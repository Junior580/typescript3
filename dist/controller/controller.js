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
exports.padraoController = void 0;
const Model_1 = require("../model/Model");
const uuidv4_1 = require("uuidv4");
const path_1 = __importDefault(require("path"));
exports.padraoController = {
    home: (req, res) => {
        res.status(200).sendFile(path_1.default.join(__dirname, "../", "../src/view/index.html"));
    },
    getPerson: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const people = yield Model_1.Person.find();
            res.status(200).json({ msg: "Bumbum" });
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }),
    getPersonByID: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = req.params.id;
        try {
            const person = yield Model_1.Person.findOne({ id: id });
            if (!person) {
                res.status(422).json({ msg: "O usuario não foi encontrado!" });
                return;
            }
            res.status(200).json(person);
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }),
    postPerson: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { name, salary, approved } = req.body;
        if (!name) {
            res.status(422).json({ msg: "O nome é obrigatório" });
            return;
        }
        if (!salary) {
            res.status(422).json({ msg: "O salario é obrigatório" });
            return;
        }
        if (!approved) {
            res.status(422).json({ msg: "O Status é obrigatório" });
            return;
        }
        const person = {
            id: (0, uuidv4_1.uuid)(),
            name,
            salary,
            approved,
        };
        try {
            yield Model_1.Person.create(person);
            res.status(201).json({
                msg: "Pessoa inserida no sistema com sucesso.",
            });
        }
        catch (error) {
            res.status(500).json({ msg: error });
        }
    }),
    patchPerson: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = req.params.id;
        const { name, salary, approved } = req.body;
        const person = {
            name,
            salary,
            approved,
        };
        try {
            const updatePerson = yield Model_1.Person.updateOne({ id: id }, person);
            if (updatePerson.matchedCount === 0) {
                res.status(422).json({ msg: "O usuario não foi encontrado!" });
                return;
            }
            res.status(200).json(person);
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }),
    deletePerson: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = req.params.id;
        const person = yield Model_1.Person.findOne({ id: id });
        if (!person) {
            res.status(422).json({ msg: "O usuario não foi encontrado!" });
            return;
        }
        try {
            yield Model_1.Person.deleteOne({ id: id });
            res.status(200).json({ msg: "Usuario removido com sucesso!" });
        }
        catch (error) {
            res.status(500).json({ error: error });
        }
    }),
};
