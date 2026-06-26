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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var fs = require("fs");
function generateProducts() {
    return __awaiter(this, void 0, void 0, function () {
        var products, dummyjsonResponse, productsFromDummyJsonAPI, freeapiResponse, booksFromFreeapi;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    products = [];
                    return [4 /*yield*/, axios_1.default.get("https://dummyjson.com/products?limit=194")];
                case 1:
                    dummyjsonResponse = _a.sent();
                    productsFromDummyJsonAPI = dummyjsonResponse.data.products;
                    productsFromDummyJsonAPI.forEach(function (p) {
                        var productCategory = "Beauty";
                        if (p.category === "beauty" ||
                            p.category === "fragrances" ||
                            p.category === "skin-care") {
                            productCategory = "Beauty";
                        }
                        else if (p.category === "furniture" ||
                            p.category === "home-decoration" ||
                            p.category === "kitchen-accessories") {
                            productCategory = "Home & Kitchen";
                        }
                        else if (p.category === "groceries") {
                            productCategory = "Grocery";
                        }
                        else if (p.category === "laptops" ||
                            p.category === "mens-watches" ||
                            p.category === "mobile-accessories" ||
                            p.category === "smartphones" ||
                            p.category === "tablets" ||
                            p.category === "womens-watches") {
                            productCategory = "Electronics";
                        }
                        else if (p.category === "mens-shirts" ||
                            p.category === "mens-shoes" ||
                            p.category === "sunglasses" ||
                            p.category === "tops" ||
                            p.category === "womens-bags" ||
                            p.category === "womens-dresses" ||
                            p.category === "womens-jewellery" ||
                            p.category === "womens-shoes") {
                            productCategory = "Fashion";
                        }
                        else if (p.category === "motorcycle" || p.category === "vehicle") {
                            productCategory = "Vehicle";
                        }
                        else if (p.category === "sports-accessories") {
                            productCategory = "Sports";
                        }
                        else {
                            throw new Error("Unknown category: <p.category> - " + p.category);
                        }
                        var price = (p === null || p === void 0 ? void 0 : p.price) * 95;
                        price = Math.ceil(price);
                        products.push({
                            id: crypto.randomUUID(),
                            name: p.title,
                            category: productCategory,
                            description: p.description,
                            basePrice: price * 100,
                            imageUrl: p.images[0],
                        });
                    });
                    return [4 /*yield*/, axios_1.default.get("https://api.freeapi.app/api/v1/public/books?limit=56")];
                case 2:
                    freeapiResponse = _a.sent();
                    booksFromFreeapi = freeapiResponse.data.data.data;
                    booksFromFreeapi.forEach(function (b) {
                        var _a, _b;
                        var price = ((_b = (_a = b === null || b === void 0 ? void 0 : b.saleInfo) === null || _a === void 0 ? void 0 : _a.listPrice) === null || _b === void 0 ? void 0 : _b.amount) || Math.ceil(Math.random() * 1000);
                        price = Math.ceil(price);
                        products.push({
                            id: crypto.randomUUID(),
                            name: b.volumeInfo.title,
                            category: "Books",
                            description: b.volumeInfo.description,
                            basePrice: price * 100,
                            imageUrl: b.volumeInfo.imageLinks.thumbnail
                        });
                    });
                    return [2 /*return*/, products];
            }
        });
    });
}
generateProducts().then(function (products) {
    fs.writeFileSync("".concat(process.cwd(), "/public/data/products.json"), JSON.stringify(products));
});
