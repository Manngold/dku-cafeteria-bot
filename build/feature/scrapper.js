"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrapper = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _puppeteer = _interopRequireDefault(require("puppeteer"));

var _editor = require("./editor");

var scrapper =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee() {
    var browser, page, profCafeteria, studentCafeteria, dormCafeteria, data;
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
            return page.$eval("#mCSB_4_container", function (e) {
              return e.innerHTML;
            });

          case 12:
            profCafeteria = _context.sent;
            _context.next = 15;
            return page.$eval("#mCSB_5_container", function (e) {
              return e.innerHTML;
            });

          case 15:
            studentCafeteria = _context.sent;
            _context.next = 18;
            return page.$eval("#mCSB_6_container", function (e) {
              return e.innerHTML;
            });

          case 18:
            dormCafeteria = _context.sent;
            data = {
              profCafeteria: profCafeteria,
              studentCafeteria: studentCafeteria,
              dormCafeteria: dormCafeteria
            };
            (0, _editor.textEdit)(data);
            _context.next = 23;
            return browser.close();

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function scrapper() {
    return _ref.apply(this, arguments);
  };
}();

exports.scrapper = scrapper;
//# sourceMappingURL=scrapper.js.map