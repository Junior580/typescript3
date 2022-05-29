"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const connectToDB = () => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default
        .connect(`mongodb+srv://${user}:${pass}@cluster0.6n3zh.mongodb.net/?retryWrites=true&w=majority`)
        .then(() => {
        console.log("😊 Connected to data base.");
    })
        .catch((err) => {
        console.log(err);
    });
});
exports.connectToDB = connectToDB;
