"use strict";

var _module = require("./module_es5.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function readFile(path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, function (err, data) {
      err ? reject(err) : resolve(data);
    });
  });
}

function test() {
  return _test.apply(this, arguments);
}

function _test() {
  _test = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var a, b;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return readFile('./.js')["catch"](function (e) {
              return console.log(e);
            });

          case 2:
            a = _context.sent;
            _context.next = 5;
            return readFile('./a.js')["catch"](function (e) {
              return console.log(e);
            });

          case 5:
            b = _context.sent;
            console.log("read finished, total ".concat(a.length + b.length, " characters"));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _test.apply(this, arguments);
}

console.log(_module.a_val);
