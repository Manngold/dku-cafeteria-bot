"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUpdated = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _puppeteer = _interopRequireDefault(require("puppeteer"));

var _scrapper = require("./scrapper");

var _db = require("../db");

var dateScrapper =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var browser, page, date;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _puppeteer["default"].launch();

          case 2:
            browser = _context.sent;
            _context.next = 5;
            return browser.newPage();

          case 5:
            page = _context.sent;
            _context.next = 8;
            return page.setViewport({
              width: 1280,
              height: 720
            });

          case 8:
            _context.next = 10;
            return page["goto"]("https://portal.dankook.ac.kr/web/portal");

          case 10:
            _context.next = 12;
            return page.$eval(".date", function (e) {
              return e.innerText;
            });

          case 12:
            date = _context.sent;
            _context.next = 15;
            return browser.close();

          case 15:
            return _context.abrupt("return", date);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function dateScrapper() {
    return _ref.apply(this, arguments);
  };
}();

var isUpdated = function isUpdated() {
  if (_db.menu.date != dateScrapper()) {
    var newDate = dateScrapper();
    _db.menu.date = newDate;
    (0, _scrapper.scrapper)();
  } else {
    console.log("Date info is already up-to-date");
  }
};

exports.isUpdated = isUpdated;
//# sourceMappingURL=loader.js.map