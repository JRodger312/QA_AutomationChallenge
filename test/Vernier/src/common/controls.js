/* eslint-disable no-console */
/* eslint-disable no-eval */

import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { By } = require('selenium-webdriver');

export class BaseControl {
  constructor(locator, parent = null) {
    this.locator = locator;
    this.parent = parent;

    if (parent !== null) {

      // this means there is a parent to this shadow root so start with that
      this.fullLocatorPath = `${parent.fullLocatorPath}.getShadowRoot()`;
    } else {
      this.fullLocatorPath = 'driver';
    }

    this.fullLocatorPath += `.findElement(By.css("${locator}"))`;

    // console.log(this.fullLocatorPath);
  }

  getLocatorString() {
    return this.fullLocatorPath;
  }

  async exists() {
    let el = await eval(this.fullLocatorPath);
  }
}

export class Button extends BaseControl {
  constructor(locator, parent = null) {
    super(locator, parent);
  }

  async click() {
    await eval(this.fullLocatorPath).click();
  }
}

export class TextElement extends BaseControl {
  constructor(locator, parent = null) {
    super(locator, parent);
  }

  async elementText() {
    let response = await eval(this.fullLocatorPath).getText();
    return response
  }
  
}
