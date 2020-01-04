const express = require("express");
const http = require("http");

let nameToId = new Map();
let idToName = new Map();

const app = express();
app.use(require("cors")());
app.use(express.json());
const server = http.createServer(app);
const io = require("socket.io")(server);

let sockets = [];

io.on("connection", async (socket) => {
    console.log(`io on connection ${socket.id}`)

    nameToId.set(socket.id, socket.id);
    idToName.set(socket.id, socket.id);
    sockets.push(socket);

    socket.on("disconnect", async () => {
        console.log(`on disconnect ${socket.id}`);
        let id = socket.id;
        let name = idToName.get(id);

        nameToId.delete(name);
        idToName.delete(id);
        sockets.filter(item => {
            if (item.id !== id) return true;
            return false;
        });
    });

    socket.on("login", username => {
        console.log(`on login ${socket.id}: ${username}`);

        let id = socket.id;
        let name = idToName.get(id);

        idToName.set(id, username);
        nameToId.delete(name);
        nameToId.set(username, id);
    });

    socket.on("chat msg", msg => {
        console.log(`on chat-msg ${socket.id}`);

        sockets.forEach(item => {
            if (item.id === msg.from || item.id === msg.to) {
                item.emit("chat msg", msg);
            }
        });
    });

    socket.on("group msg", msg => {
        console.log(`on group-msg ${msg}`);

        io.emit("chat msg", msg);
    });

    socket.on("user info", async () => {
        console.log(`on user-info ${socket.id}`);
    
        let data = [];
        idToName.forEach((value, key) => {
            data.push({
                name: value,
                id: key
            });
        });
        socket.emit("user info", data);
    });
});

server.listen(3000, () => {
    console.log("http://localhost:3000");
});