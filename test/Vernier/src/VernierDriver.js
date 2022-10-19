import { Browser } from './common/browser.js';
import { DownloadsPage } from './pages/DownloadsPage.js';
import { GALearnMorePage} from './pages/GALearnMorePage.js';
import { SiteHeader } from './pages/SiteHeader.js';

// instantiate the pages
let browser = new Browser('chrome');
let siteHeader = new SiteHeader();
let downloadsPage = new DownloadsPage();
let gaLearnMorePage = new GALearnMorePage();


// TEST WORKFLOWS
async function VerifyTestWorkflows() {
    
    // Verify GA Price shown on website
    await browser.launch();
    await siteHeader.ClickDownloadsButton();
    await downloadsPage.GA_ClickLearnMoreButton();
    await gaLearnMorePage.VerifyPrice("Starting at $99/year");


    // Verify SA MacOS System requirements

    console.log("SA section not yet implemented")
    // todo: click downloads button from home page

    // todo: click Spectral Analysis more info button 

    // todo: click System Requirement Tab

    // todo: Verify text under MacOS section (should be "Computer running macOS 10.14, 10.15, or 11. USB an Bluetooth")
}


// run the workflows
VerifyTestWorkflows();  


