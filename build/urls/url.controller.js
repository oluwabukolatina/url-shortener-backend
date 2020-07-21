"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const valid_url_1 = __importDefault(require("valid-url"));
const helpers_1 = __importDefault(require("../utils/helpers"));
const url_service_1 = __importDefault(require("./url.service"));
// const BASE_URL = 'https://pbid.io';
const BASE_URL = 'localhost:2021';
class UrlController {
    // @desc Generate Short Url
    static generateShortenedUrl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { originalUrl } = req.body;
            const u = helpers_1.default.generateAlphaNumericCharacters(8);
            console.log(u);
            //     shortid.characters();
            if (valid_url_1.default.isUri(originalUrl)) {
                const query = { originalUrl };
                const response = yield url_service_1.default.getAUrl(query);
                console.log(response);
            }
            else {
                return res.status(400).json({ message: 'Not a URI', status: false });
            }
            //     const goo = 'hellofaw';
            //   f3x2ab1c
            //     const shortenedUrl = `${goo}/${urlCode}`;
            //     const shortUrl = `${baseUrl}/${urlCode}`;
            //     https:// pbid.io/f3x2ab1c
            //     console.log(shortUrl);
            //     const itemToBeSaved = {
            //       originalUrl, shortUrl, urlCode, updatedAt,
            //     };
            //     // Add the item to db
            //     const item = new UrlShorten(itemToBeSaved);
            //     await item.save();
            //     // Add the item to cache
            //     cache.addToCache('originalUrl', JSON.stringify(queryOptions), itemToBeSaved);
            //     res.status(200).json(itemToBeSaved);
        });
    }
}
exports.default = UrlController;
//# sourceMappingURL=url.controller.js.map