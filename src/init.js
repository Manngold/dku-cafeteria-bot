import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListening = () =>
    console.log(`Server is running on : http://localhost:${PORT}`);

app.listen(PORT, handleListening);
