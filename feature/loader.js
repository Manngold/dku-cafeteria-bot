import puppeteer from "puppeteer";
import { scrapper } from "./scrapper";
import { menu } from "../db";

const dateScrapper = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    await page.goto("https://portal.dankook.ac.kr/web/portal");

    const date = await page.$eval(".date", e => e.innerText);
    await browser.close();
    return date;
};

export const isUpdated = () => {
    if (menu.date != dateScrapper()) {
        const newDate = dateScrapper();
        menu.date = newDate;
        scrapper();
    } else {
        console.log("Date info is already up-to-date");
    }
};
