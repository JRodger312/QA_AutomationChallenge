import { Button, TextElement, BaseControl } from '../common/controls.js';

export class SpectralAnalysisPage {
  constructor() {
    // todo: this is where the element locators go. see GALearnMorePage for example.
    this.SARequirementsTab = new Button('li.system-requirements_tab');
    this.SARequirementText = new TextElement('dd:nth-of-type(2)');
  }

  ClickSystemRequirementsTab() {
    // TODO: click the system requirement tab
    this.SARequirementsTab.click();
  }

  VerifyMacOSRequirements(expectedText) {
    
    // TODO: compare expected text to actual text (see GALearnMorePage.VerifyPrice for similar example)
    this.SARequirementText.elementText()
    .then(shownText => {
      if (expectedText !== shownText) {
        console.error('ERROR: Expected Text to be ' + expectedText + '. Actual is ' + shownText);
      }
      else {
        console.log('SUCCESS: Shown text (' + shownText + ') is correct!');
      }
    })
  }
    
}
