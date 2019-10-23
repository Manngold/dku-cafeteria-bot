import { menu } from "../db";

export const textEdit = data => {
    const { profCafeteria, studentCafeteria, dormCafeteria } = data;
    menu.profCafeteria = trimmer(profCafeteria);
    menu.studentCafeteria = trimmer(studentCafeteria);
    menu.dormCafeteria = trimmer(dormCafeteria);
    console.log(menu);
};

const trimmer = data => {
    const brTrimedData = data.replace(/<br>/gi, "\n");
    const braketTrimedData = brTrimedData.replace(/&lt;/gi, "<");
    const andTrimedData = braketTrimedData.replace(/&amp;/gi, "&");
    const trimedData = andTrimedData.replace(/&gt;/gi, ">");
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
    console.log(fixedData);
    return fixedData;
};
