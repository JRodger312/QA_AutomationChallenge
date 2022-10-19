import { Button, BaseControl } from '../common/controls.js';

export class SiteHeader {
  constructor() {
    // set element locators
    this.downloadsBtn = new Button('#top-menu #menu-item-83020 .menu-item-link');
    this.supportBtn = new Button('#top-menu #menu-item-71624 .menu-item-link');
    this.closeBtn = new Button('#close', this.experiments);
  }

  async ClickDownloadsButton() {
    await this.downloadsBtn.click();
  }

  ClickSupportButton() {
    this.supportBtn.click();
  }
}
