"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const index_1 = require("../index");
/**
 * App Variables
 */
if (!process.env.PORT) {
    process.exit(1);
}
const PORT = parseInt(process.env.PORT, 10) || 3000;
const DB = String(process.env.APP_DB);
console.log(PORT);
index_1.app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    mongoose_1.connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    }).then(() => { console.log('connected'); })
        .catch(() => { console.log('something went wrong'); });
});
//# sourceMappingURL=server.js.map