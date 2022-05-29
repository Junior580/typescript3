import { Request, Response } from "express";
import { Person } from "../model/Model";
import { uuid } from "uuidv4";
import path from "path";
export const padraoController = {
    home: (req: Request, res: Response) => {
        res.status(200).sendFile(
            path.join(__dirname, "../", "../src/view/index.html")
        );
    },
    getPerson: async (req: Request, res: Response) => {
        try {
            const people = await Person.find();
            res.status(200).json({ msg: "Bumbum" });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    },
    getPersonByID: async (req: Request, res: Response) => {
        const id = req.params.id;
        try {
            const person = await Person.findOne({ id: id });
            if (!person) {
                res.status(422).json({ msg: "O usuario não foi encontrado!" });
                return;
            }
            res.status(200).json(person);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    },
    postPerson: async (req: Request, res: Response) => {
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
            id: uuid(),
            name,
            salary,
            approved,
        };
        try {
            await Person.create(person);
            res.status(201).json({
                msg: "Pessoa inserida no sistema com sucesso.",
            });
        } catch (error) {
            res.status(500).json({ msg: error });
        }
    },
    patchPerson: async (req: Request, res: Response) => {
        const id = req.params.id;
        const { name, salary, approved } = req.body;
        const person = {
            name,
            salary,
            approved,
        };
        try {
            const updatePerson = await Person.updateOne({ id: id }, person);
            if (updatePerson.matchedCount === 0) {
                res.status(422).json({ msg: "O usuario não foi encontrado!" });
                return;
            }
            res.status(200).json(person);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    },

    deletePerson: async (req: Request, res: Response) => {
        const id = req.params.id;
        const person = await Person.findOne({ id: id });
        if (!person) {
            res.status(422).json({ msg: "O usuario não foi encontrado!" });
            return;
        }
        try {
            await Person.deleteOne({ id: id });
            res.status(200).json({ msg: "Usuario removido com sucesso!" });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    },
};
