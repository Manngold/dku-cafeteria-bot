import puppeteer from "puppeteer";
import { textEdit } from "./editor";

export const scrapper = async url => {
    const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"]
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    await page.goto("https://portal.dankook.ac.kr/web/portal");

    let data = "";

    if (url == "/student") {
        data = await page.$eval("#mCSB_5_container", e => e.innerHTML);
    } else if (url == "/professor") {
        data = await page.$eval("#mCSB_4_container", e => e.innerHTML);
    } else if (url == "/dormitory") {
        data = await page.$eval("#mCSB_6_container", e => e.innerHTML);
    } else {
        data = "식당 정보가 존재하지 않습니다.";
    }

    await browser.close();
    return textEdit(data);
};
