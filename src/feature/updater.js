import { scrapper } from "./scrapper";
import puppeteer from "puppeteer";
import routes from "../routes";

export let menu = {
    date: "",
    student: "",
    professor: "",
    dormitory: "",
};

const dateUpdater = () => {
    const dateTime = new Date();
    const getMonth = String(dateTime.getMonth() + 1);
    const getDate = String(dateTime.getDate());
    const date = `${getMonth}.${getDate}`;
    return date;
};

export const menuUpdater = async () => {
    const newDate = dateUpdater();
    if (menu.date !== newDate) {
        menu.date = newDate;
        await scrapper();
    } else {
        console.log("Everything is up-to-date");
    }
};
