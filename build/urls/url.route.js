"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const url_controller_1 = __importDefault(require("./url.controller"));
const router = express_1.Router();
const { generateShortenedUrl } = url_controller_1.default;
// @route  POST /api/v1/urls
router.post('/', generateShortenedUrl);
exports.default = router;
//# sourceMappingURL=url.route.js.map