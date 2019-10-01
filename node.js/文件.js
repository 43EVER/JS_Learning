const fs = require('fs');

function copyNormal() {
    fs.mkdir(__dirname + '/tmp', err => {
        if (err) {
            console.log(err);
        } else {
            fs.readFile(__dirname + '/conut.js', 'utf8', (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    fs.writeFile(__dirname + '/tmp/count.js', data, 'utf8', (err) => {
                        if (err) {
                            console.log(err);
                        }
                    });
                }
            });
        }
    });
}
// copyNormal()


function copyStream(rs, ws) {
    let total = 0;

    rs.setEncoding('utf8');
    rs.on('data', chunk => {
        console.log('new chunk recived');
        ws.write(chunk, err => {
            if (err) {
                console.log(err);
            }
        });
        total += chunk.length;
    });
    rs.on('end', () => {
        console.log(`finished ${total}`);
        ws.end();
    });

    ws.on('finish', err => {
        if (err) {
            console.log(err);
        }
    });
}

let rs = fs.createReadStream(`${__dirname}/tmp/data.txt`);
let ws = fs.createWriteStream(`${__dirname}/tmp/data2.txt`);
// copyStream(rs, ws);


// rs.pipe(ws); 