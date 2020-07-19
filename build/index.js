"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const morgan_1 = __importDefault(require("morgan"));
/**
 * Required External Modules
 */
const dotenv = __importStar(require("dotenv"));
const express_1 = __importDefault(require("express"));
dotenv.config();
/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1);
}
// const PORT: number = parseInt(process.env.APP_PORT as string, 10) || 3000;
const PORT = process.env.PORT || 3000;
const DB = String(process.env.APP_DB);
const app = express_1.default();
/**
 *  App Configuration
 */
app.use(express_1.default.json());
app.use(morgan_1.default('dev'));
/**
 * Server Activation
 */
// eslint-disable-next-line no-console
app.get('/', (req, res) => res.send('Hello Node/Typescript starter!'));
// eslint-disable-next-line consistent-return
app.listen(PORT, () => {
    try {
        mongoose_1.connect(DB, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        }).then(() => { console.log('connected'); })
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            .catch(() => { });
    }
    catch (error) {
        return error;
    }
});
//# sourceMappingURL=index.js.map