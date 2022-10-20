import { Button, BaseControl } from '../common/controls.js';

export class DownloadsPage {
  constructor() {
    // Graphical Analysis section buttons
    // These are actually the selectors for the todos below :)
    this.GAlearnMoreBtn = new Button('.elementor-element-89c242c a ');
    this.GAdownloadNowBtn = new Button('.elementor-element-dde5a38 a ');
    this.GAstartFreeTrialBtn = new Button('.elementor-element-fd60067 a ');
    this.GApurchaseNowBtn = new Button('.elementor-element-51c1ff2 a ');

    // Spectral Analysis section buttons
    // ** todo **
    this.SAmoreInfoBtn = new Button('.elementor-element-dde5a38 a ')


    // Instrumental Analysis section buttons
    this.IAmoreInfoBtn = new Button('.elementor-element-fd60067 a ');
  }

  // Graphical Analysis section
  async GA_ClickLearnMoreButton() {
    await this.GAlearnMoreBtn.exists();
    await this.GAlearnMoreBtn.click();
  }

  async GA_ClickDownloadNowButton() {
    this.GAdownloadNowBtn.click();
  }

  async GA_ClickStartFreeTrialButton() {
    this.GAstartFreeTrialBtn.click();
  }

  async GA_ClickPurchaseNowButton() {
    this.GApurchaseNowBtn.click();
  }


  // Spectral Analysis section

  // ** todo: add method to click 'more info' button
  async SA_ClickMoreInfoButton() {
    await this.SAmoreInfoBtn.click();
  }

}
