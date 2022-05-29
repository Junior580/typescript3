import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
export const connectToDB = async () => {
    await mongoose
        .connect(
            `mongodb+srv://${user}:${pass}@cluster0.6n3zh.mongodb.net/?retryWrites=true&w=majority`
        )
        .then(() => {
            console.log("😊 Connected to data base.");
        })
        .catch((err) => {
            console.log(err);
        });
};
