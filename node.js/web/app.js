let startServer = require('./server');
let router = require('./router');
let handler = require('./handler');

let handle = {};
handle['/']       = handler.home;
handle['/home']   = handler.home;
handle['/review'] = handler.review;
handle['/api']    = handler.api;


startServer(router.route, handle);