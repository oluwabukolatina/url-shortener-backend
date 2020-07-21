"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UrlSchema = new mongoose_1.Schema({
    shortenedUrl: String,
    originalUrl: { type: String, required: true },
    urlCode: String,
});
exports.default = mongoose_1.model('Url', UrlSchema);
//# sourceMappingURL=url.model.js.map