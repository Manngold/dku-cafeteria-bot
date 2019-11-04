"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _helmet = _interopRequireDefault(require("helmet"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _router = _interopRequireDefault(require("./router"));

var _loader = require("./feature/loader");

var app = (0, _express["default"])();
app.use((0, _helmet["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use("/api", _router["default"]);
(0, _loader.isUpdated)();
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=app.js.map