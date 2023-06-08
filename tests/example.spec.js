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
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
test_1.test.describe("Main page", () => {
    test_1.test.beforeEach(({ page }) => __awaiter(void 0, void 0, void 0, function* () {
        yield page.goto("https://goo-app-2-0.vercel.app/");
        yield page.setViewportSize({ width: 1920, height: 1080 });
    }));
    (0, test_1.test)('Should has title', ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
        yield page.goto('https://goo-app-2-0.vercel.app/');
        yield (0, test_1.expect)(page).toHaveTitle(/Goo App/);
    }));
    (0, test_1.test)('Should check started link', ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
        yield page.goto('https://goo-app-2-0.vercel.app/');
        yield (0, test_1.expect)(page).toHaveURL(/.*goo-app/);
        console.log('dupa');
    }));
    (0, test_1.test)("Should switch content after click on button", ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
        yield (0, test_1.expect)(page).toHaveURL("https://goo-app-2-0.vercel.app/");
        yield page.waitForSelector('h2:has-text("To-Do 1")', { timeout: 5000 });
        yield page.waitForSelector('h2:has-text("To-Do")', { timeout: 5000 });
    }));
});
