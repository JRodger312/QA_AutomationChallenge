import { Button, BaseControl } from '../common/controls.js';

export class SiteHeader {
  constructor() {
    // set element locators
    this.homePageBtn = new Button('.original_logo');
    this.downloadsBtn = new Button('#top-menu #menu-item-83020 .menu-item-link');
    this.supportBtn = new Button('#top-menu #menu-item-71624 .menu-item-link');
    this.closeBtn = new Button('#close', this.experiments);
    this.acceptCookiesBtn = new Button('#cookie_action_close_header');
  }

  async ClickHomePageButton(){
    await this.homePageBtn.click();
  }

  async ClickAcceptCookiesButton(){
    await this.acceptCookiesBtn.click();
  }

  async ClickDownloadsButton() {
    await this.downloadsBtn.click();
  }

  ClickSupportButton() {
    this.supportBtn.click();
  }
}
