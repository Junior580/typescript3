"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controller_1 = require("../controller/controller");
exports.router = (0, express_1.Router)();
exports.router.get("/", controller_1.padraoController.home);
exports.router.get("/", controller_1.padraoController.getPerson);
exports.router.get("/usr", controller_1.padraoController.getPerson);
exports.router.get("/usr/:id", controller_1.padraoController.getPersonByID);
exports.router.post("/usr", controller_1.padraoController.postPerson);
exports.router.put("/usr/:id", controller_1.padraoController.patchPerson);
exports.router.delete("/usr/:id", controller_1.padraoController.deletePerson);
