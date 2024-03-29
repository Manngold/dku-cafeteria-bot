import { menu } from "./updater";

export const textEdit = data => {
    menu.student = trimmer(data.student);
    menu.professor = trimmer(data.professor);
    menu.dormitory = trimmer(data.dormitory);
};

const trimmer = data => {
    const brTrimedData = data.replace(/<br>/gi, "\n");
    const leftBraketTrimedData = brTrimedData.replace(/&lt;/gi, "<");
    const rightBraketTrimedData = leftBraketTrimedData.replace(/&gt;/gi, ">");
    const andTrimedData = rightBraketTrimedData.replace(/&amp;/gi, "&");
    const trimedData = andTrimedData.replace(/\\/gi, "₩ ");
    return originDelete(trimedData);
};

const originDelete = data => {
    let stack = [];
    let deleteMode = false;
    let fixedData = "";
    for (let i = 0; i < data.length; i++) {
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
    return fixedData;
};
