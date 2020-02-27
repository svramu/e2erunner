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
const exceljs_1 = require("exceljs");
const protractor_1 = require("protractor");
const lib = require("./lib");
describe('eune2e dynamic', () => {
    beforeEach(() => {
        protractor_1.browser.ignoreSynchronization = true;
        protractor_1.browser.waitForAngularEnabled(false);
    });
    it('check all', () => __awaiter(void 0, void 0, void 0, function* () {
        let wb = new exceljs_1.Workbook();
        console.log("xlsx:", protractor_1.browser.params.xlsx);
        console.log("sheet:", protractor_1.browser.params.sheet);
        yield wb.xlsx.readFile(protractor_1.browser.params.xlsx);
        let sheet = wb.getWorksheet(protractor_1.browser.params.sheet);
        for (let i = 2; i < sheet.rowCount; i++) {
            let isHidden = sheet.getRow(i).hidden;
            let action = sheet.getRow(i).getCell(4);
            let locator = sheet.getRow(i).getCell(3);
            let data = sheet.getRow(i).getCell(5);
            if (action.isMerged || action.value == null) {
                console.log(i, '----------');
            }
            else {
                let a = action.value.toString();
                let l = (locator.value) ? locator.value.toString() : '';
                let d = (data.value) ? data.value.toString() : '';
                try {
                    switch (a) {
                        case 'url':
                            yield protractor_1.browser.get(l);
                            break;
                        case 'title': {
                            let title = yield lib.getTitle();
                            if (!title.includes(d))
                                throw new Error("[" + title + "] does not match [" + d + "]");
                            break;
                        }
                        case 'assert': {
                            let txt = yield lib.getText(l);
                            if (!txt.includes(d))
                                throw new Error(txt + " does not match " + d);
                            break;
                        }
                        case 'keys':
                            yield lib.inputText(l, d);
                            break;
                        case 'dnd':
                            yield lib.dragAndDrop(l, d);
                            break;
                        case 'sleep':
                            yield lib.sleep(+d);
                            break;
                        case 'wait':
                            yield lib.wait(l, +d);
                            break;
                        case 'wait:click':
                            yield lib.waitClick(l, +d);
                            break;
                        case 'click':
                            yield lib.click(l);
                            break;
                        case 'click:text':
                            yield lib.clickButtonByText(l);
                            break;
                        case 'link:text':
                            yield lib.clickLink(l);
                            break;
                        case 'keys:enter':
                            yield lib.pressEnter(l);
                            break;
                        default: console.log(i, "Warning: Unknown Action", a);
                    }
                }
                catch (err) {
                    console.log(i, "ERROR: ", err.name, err.message);
                }
            }
        }
    }));
});
