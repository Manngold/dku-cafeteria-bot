import puppeteer from "puppeteer";
import { textEdit } from "./editor";
import routes from "../routes";

export const scrapper = async () => {
    const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });
    const page = await browser.newPage();

    await page.setViewport({ width: 1280, height: 720 });
    await page.goto(routes.destUrl);

    const student = await page.$eval("#mCSB_5_container", e => e.innerHTML);
    const professor = await page.$eval("#mCSB_4_container", e => e.innerHTML);
    const dormitory = await page.$eval("#mCSB_6_container", e => e.innerHTML);

    const cafeteria = { student, professor, dormitory };

    await browser.close();
    return textEdit(cafeteria);
};
