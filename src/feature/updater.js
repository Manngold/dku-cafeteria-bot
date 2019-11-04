import { scrapper } from "./scrapper";
import puppeteer from "puppeteer";

export let menu = {
    date: "",
    student: "",
    professor: "",
    dormitory: ""
};

const dateUpdater = async () => {
    const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });
    const page = await browser.newPage();

    await page.setViewport({ width: 1280, height: 720 });
    await page.goto("https://portal.dankook.ac.kr/web/portal");

    const date = await page.$eval(".date", e => e.innerHTML);
    return date;
};

export const caffeine = async () => {
    const newDate = await dateUpdater();
    if (menu.date != newDate) {
        menu.date = newDate;
        await scrapper();
    } else {
        console.log("Everything is up-to-date");
    }
};
