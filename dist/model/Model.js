"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userModel = new mongoose_1.default.Schema({
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
exports.Person = mongoose_1.default.model("Person", userModel);
