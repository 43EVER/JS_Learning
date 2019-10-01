const fs = require('fs');

function home(res, params) {
    console.log(`Execution home`);
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    
    let rs = fs.createReadStream(`${__dirname}/index.html`);
    rs.pipe(res);
}

function review(res, params) {
    console.log(`Execution review`);
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    
    let rs = fs.createReadStream(`${__dirname}/review.html`);
    rs.pipe(res);
}

function api(res, params) {
    console.log(`Execution api`);
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(params));
}

module.exports = {
    home  : home,
    review: review,
    api   : api
};