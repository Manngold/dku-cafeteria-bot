import { menu } from "./db";

const { studentCafeteria, profCafeteria, dormCafeteria } = menu;

export const student = (req, res) => {
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: studentCafeteria
                    }
                }
            ]
        }
    };
    res.status(200).send(responseBody);
};

export const professor = (req, res) => {
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: profCafeteria
                    }
                }
            ]
        }
    };
    res.status(200).send(responseBody);
};

export const dormitory = (req, res) => {
    const responseBody = {
        version: "2.0",
        template: {
            outputs: [
                {
                    simpleText: {
                        text: dormCafeteria
                    }
                }
            ]
        }
    };
    res.status(200).send(responseBody);
};
