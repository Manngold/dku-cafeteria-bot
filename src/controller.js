import { menu } from "./feature/updater";

export const student = async (req, res) => {
    const text = menu.student;
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
    const text = menu.professor;
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
    const text = menu.dormitory;
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
