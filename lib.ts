import { browser, element, by, protractor } from "protractor";

let EC = protractor.ExpectedConditions;

export let getTitle = async (): Promise<string> => {
  let title = await browser.getTitle()
  return title
}

export let click = async (l: string) => {
  let elem = element(loc(l))
  await elem.click()
}

//TBD: multi-select
export let clickCtrl = async (l: string) => {
  let elm = element(loc(l))
  await browser.actions()
    .mouseMove(elm)
    .keyDown(protractor.Key.CONTROL)
    .click()
    .keyUp(protractor.Key.CONTROL)
    .perform()
}

export let pressEnter = async (l: string) => {
  let elem = element(loc(l))
  await elem.sendKeys(protractor.Key.ENTER)
}

export let dragAndDrop = async (src: string, dst: string) => {
  let esrc = element(loc(src))
  let edst = element(loc(dst))
  browser.actions().dragAndDrop(esrc, edst).perform();
}

export let sleep = async (ms: number) => {
  await browser.sleep(ms);
}

export let wait = async (l: string, ms: number) => {
  var EC = protractor.ExpectedConditions;
  let elem = element(loc(l))
  var isClickable = EC.elementToBeClickable(elem);
  await browser.wait(isClickable, ms);
}

export let waitClick = async (l: string, ms: number) => {
  var EC = protractor.ExpectedConditions;
  let elem = element(loc(l))
  var isClickable = EC.elementToBeClickable(elem);
  await browser.wait(isClickable, ms);
  await elem.click()
}

export let clickButtonByText = async (partialText: string) => {
  let elem = element(by.partialButtonText(partialText))
  await elem.click()
}

export let clickLink = async (partialText: string) => {
  let elem = element(by.partialLinkText(partialText))
  await browser.wait(EC.visibilityOf(elem), 3000);
  await elem.click()
}

export let clickLinks = async (partialTexts: string[]) => {
  for (let i = 0; i < partialTexts.length; i++) {
    let elem = element(by.partialLinkText(partialTexts[i]))
    await browser.wait(EC.visibilityOf(elem), 3000);
    await elem.click()
  }
}

export let getText = async (l: string): Promise<string> => {
  let txt = await element(loc(l)).getText()
  return txt
}

export let inputText = async (l: string, text: string) => {
  let elem = element(loc(l))
  await elem.sendKeys(text)
}

let loc = (l: string) => {
  //console.log(l, "//", l.startsWith("//"))
  if (l.startsWith("//")) return by.xpath(l)
  return by.css(l)
}

