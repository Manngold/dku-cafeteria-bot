import puppeteer from "puppeteer";
import { textEdit } from "./editor";

export const scrapper = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    await page.goto("https://portal.dankook.ac.kr/web/portal");

    const profCafeteria = await page.$eval(
        "#mCSB_4_container",
        e => e.innerHTML
    );
    const studentCafeteria = await page.$eval(
        "#mCSB_5_container",
        e => e.innerHTML
    );
    const dormCafeteria = await page.$eval(
        "#mCSB_6_container",
        e => e.innerHTML
    );
    const data = { profCafeteria, studentCafeteria, dormCafeteria };
    textEdit(data);
    await browser.close();
};
