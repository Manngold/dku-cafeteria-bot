import app from "../app";
import routes from "../routes";

const caffeine = () => {
    app.get(routes.caffeine, caffeineHandler);
};

const caffeineHandler = (req, res) => {
    console.log("Wake Up! 🚀");
    res.status(200).end();
};

export default caffeine;
