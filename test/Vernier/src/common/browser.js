import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { By, Key, Builder } = require('selenium-webdriver');
require('chromedriver');

global.driver = null;
export class Browser {
  constructor(browser) {
    this.browser = browser.toUpperCase();
  }

  async launch() {
      if (this.browser == 'CHROME') {
      console.log('Launching ' + this.browser);

      driver = new Builder().forBrowser('chrome').build();

      await driver.get('http://www.vernier.com');

      
    }
  
  }
}
