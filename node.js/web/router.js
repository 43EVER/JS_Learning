const fs = require('fs');

function route (handle, pathname, res, params) {
    console.log(`route ${pathname}`);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](res, params);
    } else {        
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        let rs = fs.createReadStream(`${__dirname}/404.html`);
        rs.pipe(res);
    }
}

module.exports.route = route;