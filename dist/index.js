"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const constants_1 = require("./constants");
const main_1 = require("./DataBase/main");
const PinoLogger_1 = __importDefault(require("./logger/PinoLogger"));
const index_1 = __importDefault(require("./Routes/index"));
async function Main() {
    const app = express_1.default();
    app.listen(constants_1.Port, constants_1.Host, () => PinoLogger_1.default.info(`Port Started on ${constants_1.Port}`));
    app.use('/api', index_1.default);
    app.use(express_1.default.json);
}
main_1.MongoConnect();
Main().catch(err => {
    PinoLogger_1.default.info(err);
});
//# sourceMappingURL=index.js.map