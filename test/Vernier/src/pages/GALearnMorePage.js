import { Button, TextElement, BaseControl } from '../common/controls.js';

export class GALearnMorePage {
  constructor() {
    // tons of elements in here. just get the one that shows the price
    this.GAPrice = new TextElement('.elementor-element-0bb890b .elementor-text-editor strong');

  }

  async VerifyPrice(expectedPrice) {
    
    this.GAPrice.elementText()
    .then(shownPrice => {
      if (expectedPrice !== shownPrice) {
        console.error('Expected Price to be ' + expectedPrice + '. Actual is ' + shownPrice);
      }
      else {
        console.log('Shown price (' + shownPrice + ') is correct!');
      }
  
    })}

    
}
