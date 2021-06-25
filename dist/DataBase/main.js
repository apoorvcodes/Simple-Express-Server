"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoConnect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const PinoLogger_1 = __importDefault(require("../logger/PinoLogger"));
const constants_1 = require("../constants");
const MongoConnect = async () => {
    await mongoose_1.default.connect(constants_1.MongoDBPass, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }).then(() => PinoLogger_1.default.info(`Connected to Database at Port ${constants_1.Port}`));
};
exports.MongoConnect = MongoConnect;
//# sourceMappingURL=main.js.map