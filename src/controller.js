import { scrapper } from "./feature/scrapper";

export const student = async (req, res) => {
    const { url } = req;
    const text = await scrapper(url);
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text
                    }
                }
            ]
        }
    };
    res.status(200).send(responseBody);
};

export const professor = async (req, res) => {
    const { url } = req;
    const text = await scrapper(url);
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text
                    }
                }
            ]
        }
    };
    res.status(200).send(responseBody);
};

export const dormitory = async (req, res) => {
    const { url } = req;
    const text = await scrapper(url);
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text
                    }
                }
            ]
        }
    };
    res.status(200).send(responseBody);
};
