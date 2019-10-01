const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

function startServer(route, handle) {
    let onRequest = function (req, res) {
        let pathname = url.parse(req.url).pathname;
        console.log('Request Received');
        console.log(`request ${req.url}`);
        let data = '';
        req.on('error', err => {
            console.log(err);
        }).on('data', chunk => {
            data += chunk;
        }).on('end', () => {
            if (req.method === 'POST') {
                console.log(`POST ${pathname}`);
                route(handle, pathname, res, querystring.parse(data));
            } else {
                console.log(`GET ${pathname}`);
                let params = url.parse(req.url, true).query;
                route(handle, pathname, res, params);
            }
        })
    }

    let server = http.createServer(onRequest);
    
    server.listen(5269);
}

module.exports = startServer;