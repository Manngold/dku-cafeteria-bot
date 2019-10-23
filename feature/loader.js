import { menu } from "../db";

let ts = Date.now();
let dateObj = new Date(ts);

export const getDate = () => {
    const month = dateObj.getMonth();
    const date = dateObj.getDate();
    const fullDate = `${month}${date}`;
    menu.date = fullDate;
};
