import express from "express";
import { router } from "./routes/routes";
import { connectToDB } from "./connect/connectDB";

const app = express();

app.use(express.json());
app.use(router);
connectToDB();

const port = 3000;
app.listen(port, () => {
    console.log("🚀 Server is running.");
});
