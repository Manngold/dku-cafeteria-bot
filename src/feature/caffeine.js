import app from "../app";
import routes from "../routes";

const caffeine = () => {
    app.get(routes.caffeine, caffeineHandler);
};

const caffeineHandler = () => {
    console.log("Wake Up! 🚀");
};

export default caffeine;
