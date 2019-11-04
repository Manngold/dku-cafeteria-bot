"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textEdit = void 0;

var _db = require("../db");

var textEdit = function textEdit(data) {
  var profCafeteria = data.profCafeteria,
      studentCafeteria = data.studentCafeteria,
      dormCafeteria = data.dormCafeteria;
  _db.menu.profCafeteria = trimmer(profCafeteria);
  _db.menu.studentCafeteria = trimmer(studentCafeteria);
  _db.menu.dormCafeteria = trimmer(dormCafeteria);
};

exports.textEdit = textEdit;

var trimmer = function trimmer(data) {
  var brTrimedData = data.replace(/<br>/gi, "\n");
  var leftBraketTrimedData = brTrimedData.replace(/&lt;/gi, "<");
  var rightBraketTrimedData = leftBraketTrimedData.replace(/&gt;/gi, ">");
  var andTrimedData = rightBraketTrimedData.replace(/&amp;/gi, "&");
  var trimedData = andTrimedData.replace(/\\/gi, "₩ ");
  return originDelete(trimedData);
};

var originDelete = function originDelete(data) {
  var stack = [];
  var deleteMode = false;
  var fixedData = "";

  for (var i = 0; i < data.length; i++) {
    if (deleteMode) {
      if (data[i] === ")") {
        if (stack.length > 1) {
          stack.pop();
          continue;
        } else if (stack.length == 1) {
          stack.pop();
          deleteMode = false;
          continue;
        }
      } else if (data[i] === "(") {
        stack.push(data[i]);
        continue;
      }
    } else if (!deleteMode) {
      if (data[i] === "(") {
        stack.push(data[i]);
        deleteMode = true;
        continue;
      } else fixedData += data[i];
    }
  }

  if (fixedData.length == 1) {
    fixedData = "학교 홈페이지에 메뉴가 등록되어 있지 않습니다.";
  }

  console.log(_db.menu);
  return fixedData;
};
//# sourceMappingURL=editor.js.map