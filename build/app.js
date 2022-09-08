"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = __importDefault(require("console"));
const express_1 = __importDefault(require("express"));
const crypto = require('crypto');
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use((req, res, next) => {
    const hash = crypto.createHash('sha256');
    const finalHex = hash.update(JSON.stringify(req.body)).digest('hex');
    res.locals.hash = { "SHA256": finalHex };
    next();
});
app.use('/', (req, res, next) => {
    res.send(res.locals.hash.SHA256);
});
app.listen(port, () => console_1.default.log(`server is runing on port ${port}`));
