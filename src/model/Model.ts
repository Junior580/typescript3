import mongoose from "mongoose";
const userModel = new mongoose.Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
    },
    salary: {
        type: Number,
    },
    approved: {
        type: Boolean,
    },
});

export const Person = mongoose.model("Person", userModel);
