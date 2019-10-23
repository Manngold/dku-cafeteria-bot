import { menu } from "../db";

export const textEdit = data => {
    const { profCafeteria, studentCafeteria, dormCafeteria } = data;
    menu.profCafeteria = trimmer(profCafeteria);
    menu.studentCafeteria = trimmer(studentCafeteria);
    menu.dormCafeteria = trimmer(dormCafeteria);
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
    return fixedData;
};
