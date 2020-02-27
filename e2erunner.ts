import { Workbook, Row, Cell } from 'exceljs'
import { browser, element, by, protractor } from "protractor"
import * as lib from './lib'

describe('eune2e dynamic', () => {

  beforeEach(() => {
    browser.ignoreSynchronization = true;
    browser.waitForAngularEnabled(false)
  })

  it('check all', async () => {
    let wb = new Workbook()
    console.log("xlsx:", browser.params.xlsx)
    console.log("sheet:", browser.params.sheet)
    await wb.xlsx.readFile(browser.params.xlsx)
    let sheet = wb.getWorksheet(browser.params.sheet)

    for (let i = 2; i < sheet.rowCount; i++) {
      let isHidden = sheet.getRow(i).hidden
      let action = sheet.getRow(i).getCell(4)
      let locator = sheet.getRow(i).getCell(3)
      let data = sheet.getRow(i).getCell(5)
      if (action.isMerged || action.value == null) {
        console.log(i, '----------')
      } else {
        let a = action.value.toString()
        let l = (locator.value) ? locator.value.toString() : ''
        let d = (data.value) ? data.value.toString() : ''
        try {
          switch (a) {
            case 'url': await browser.get(l); break
            case 'title': {
              let title = await lib.getTitle()
              if (!title.includes(d)) throw new Error("[" + title + "] does not match [" + d + "]")
              break
            }
            case 'assert': {
              let txt = await lib.getText(l)
              if (!txt.includes(d)) throw new Error(txt + " does not match " + d)
              break
            }
            case 'keys': await lib.inputText(l, d); break
            case 'dnd': await lib.dragAndDrop(l, d); break
            case 'sleep': await lib.sleep(+d); break
            case 'wait': await lib.wait(l, +d); break
            case 'wait:click': await lib.waitClick(l, +d); break
            case 'click': await lib.click(l); break
            case 'click:text': await lib.clickButtonByText(l); break
            case 'link:text': await lib.clickLink(l); break
            case 'keys:enter': await lib.pressEnter(l); break
            default: console.log(i, "Warning: Unknown Action", a)
          }
        } catch (err) {
          console.log(i, "ERROR: ", err.name, err.message)
        }
      }
    }
  })

})





