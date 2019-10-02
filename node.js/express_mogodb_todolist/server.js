const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

let app = express();
app.use(express.urlencoded());

const multer = require('multer');
const upload = multer({dest: 'uploads/'});

app.get('/', (req, res) => {
    res.json({
        status: 'success'
    })
});

app.post('/', (req, res) => {
    console.dir(req.body);
    res.send(req.data);
});


app.get('/form', (req, res) => {
    res.sendFile(`${__dirname}/form.html`);
})

app.post('/form', upload.single('user_file'), (req, res) => {
    res.send({
        status: 'success'
    });
})

app.listen(5269);
console.log('listening http://localhost:5269');