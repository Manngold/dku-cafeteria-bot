"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dormitory = exports.professor = exports.student = void 0;

var _db = require("./db");

var studentCafeteria = _db.menu.studentCafeteria,
    profCafeteria = _db.menu.profCafeteria,
    dormCafeteria = _db.menu.dormCafeteria;

var student = function student(req, res) {
  var responseBody = {
    version: "2.0",
    template: {
      outputs: [{
        simpleText: {
          text: studentCafeteria
        }
      }]
    }
  };
  res.status(200).send(responseBody);
};

exports.student = student;

var professor = function professor(req, res) {
  var responseBody = {
    version: "2.0",
    template: {
      outputs: [{
        simpleText: {
          text: profCafeteria
        }
      }]
    }
  };
  res.status(200).send(responseBody);
};

exports.professor = professor;

var dormitory = function dormitory(req, res) {
  var responseBody = {
    version: "2.0",
    template: {
      outputs: [{
        simpleText: {
          text: dormCafeteria
        }
      }]
    }
  };
  res.status(200).send(responseBody);
};

exports.dormitory = dormitory;
//# sourceMappingURL=controller.js.map