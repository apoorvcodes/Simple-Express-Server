"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TestRouter = express_1.Router();
TestRouter.get('/', async (_, res) => {
    res.send("works");
});
exports.default = TestRouter;
//# sourceMappingURL=test.js.map