"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
const express_1 = require("express");
const test_1 = __importDefault(require("./SubRoutes/test"));
const routes = express_1.Router();
routes.use('/users', user_1.default);
routes.use('/tests', test_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map