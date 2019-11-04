"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _controller = require("./controller");

var apiRouter = _express["default"].Router();

apiRouter.post("/student", _controller.student);
apiRouter.post("/professor", _controller.professor);
apiRouter.post("/dormitory", _controller.dormitory);
var _default = apiRouter;
exports["default"] = _default;
//# sourceMappingURL=router.js.map