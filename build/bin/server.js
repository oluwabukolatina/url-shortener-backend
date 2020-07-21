"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const database_1 = __importDefault(require("../utils/database"));
/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1);
}
const PORT = parseInt(process.env.PORT, 10) || 3000;
index_1.app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    database_1.default.connectToDb().then(() => console.log('connected to db'))
        // eslint-disable-next-line no-console
        .catch(() => console.log('something went wrong'));
});
//# sourceMappingURL=server.js.map