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
const express_1 = __importDefault(require("express"));
const resizeImage_1 = __importDefault(require("../utilities/resizeImage"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const router = express_1.default.Router();
router.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filename = req.query.filename;
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    if (!filename) {
        return res.status(400).send("Filename parameter is required");
    }
    if (!width || !height) {
        return res.status(400).send("Width and height parameters are required");
    }
    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        return res
            .status(400)
            .send("Width and height must be valid positive numbers");
    }
    const fullImagePath = path_1.default.join("assets/full", `${filename}.jpg`);
    if (!fs_1.default.existsSync(fullImagePath)) {
        return res.status(404).send("Image not found");
    }
    try {
        const output = yield (0, resizeImage_1.default)(filename, width, height);
        res.sendFile(path_1.default.resolve(output));
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Image processing failed");
    }
}));
exports.default = router;
//# sourceMappingURL=images.js.map