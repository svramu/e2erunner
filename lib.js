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
const protractor_1 = require("protractor");
let EC = protractor_1.protractor.ExpectedConditions;
exports.getTitle = () => __awaiter(void 0, void 0, void 0, function* () {
    let title = yield protractor_1.browser.getTitle();
    return title;
});
exports.click = (l) => __awaiter(void 0, void 0, void 0, function* () {
    let elem = protractor_1.element(loc(l));
    yield elem.click();
});
//TBD: multi-select
exports.clickCtrl = (l) => __awaiter(void 0, void 0, void 0, function* () {
    let elm = protractor_1.element(loc(l));
    yield protractor_1.browser.actions()
        .mouseMove(elm)
        .keyDown(protractor_1.protractor.Key.CONTROL)
        .click()
        .keyUp(protractor_1.protractor.Key.CONTROL)
        .perform();
});
exports.pressEnter = (l) => __awaiter(void 0, void 0, void 0, function* () {
    let elem = protractor_1.element(loc(l));
    yield elem.sendKeys(protractor_1.protractor.Key.ENTER);
});
exports.dragAndDrop = (src, dst) => __awaiter(void 0, void 0, void 0, function* () {
    let esrc = protractor_1.element(loc(src));
    let edst = protractor_1.element(loc(dst));
    protractor_1.browser.actions().dragAndDrop(esrc, edst).perform();
});
exports.sleep = (ms) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(ms);
});
exports.clickButtonByText = (partialText) => __awaiter(void 0, void 0, void 0, function* () {
    let elem = protractor_1.element(protractor_1.by.partialButtonText(partialText));
    yield elem.click();
});
exports.clickLink = (partialText) => __awaiter(void 0, void 0, void 0, function* () {
    let elem = protractor_1.element(protractor_1.by.partialLinkText(partialText));
    yield protractor_1.browser.wait(EC.visibilityOf(elem), 3000);
    yield elem.click();
});
exports.clickLinks = (partialTexts) => __awaiter(void 0, void 0, void 0, function* () {
    for (let i = 0; i < partialTexts.length; i++) {
        let elem = protractor_1.element(protractor_1.by.partialLinkText(partialTexts[i]));
        yield protractor_1.browser.wait(EC.visibilityOf(elem), 3000);
        yield elem.click();
    }
});
exports.getText = (l) => __awaiter(void 0, void 0, void 0, function* () {
    let txt = yield protractor_1.element(loc(l)).getText();
    return txt;
});
exports.inputText = (l, text) => __awaiter(void 0, void 0, void 0, function* () {
    let elem = protractor_1.element(loc(l));
    yield elem.sendKeys(text);
});
let loc = (l) => {
    //console.log(l, "//", l.startsWith("//"))
    if (l.startsWith("//"))
        return protractor_1.by.xpath(l);
    return protractor_1.by.css(l);
};
