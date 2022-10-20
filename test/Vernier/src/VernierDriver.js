import { Browser } from './common/browser.js';
import { DownloadsPage } from './pages/DownloadsPage.js';
import { GALearnMorePage} from './pages/GALearnMorePage.js';
import { SiteHeader } from './pages/SiteHeader.js';
import { SpectralAnalysisPage } from './pages/SpectralAnalysisPage.js';

// instantiate the pages
let browser = new Browser('chrome');
let siteHeader = new SiteHeader();
let downloadsPage = new DownloadsPage();
let gaLearnMorePage = new GALearnMorePage();
let saAnalysisPage = new SpectralAnalysisPage();

// TEST WORKFLOWS
async function VerifyTestWorkflows() {
    
    // Verify GA Price shown on website
    await browser.launch();
    // Added to avoid failures due to content overlap
    await siteHeader.ClickAcceptCookiesButton();
    await siteHeader.ClickDownloadsButton();
    await downloadsPage.GA_ClickLearnMoreButton();
    await gaLearnMorePage.VerifyPrice("Starting at $99/year");


    // Verify SA MacOS System requirements

    console.log("SA section not yet implemented")
    // todo: click downloads button from home page
    await siteHeader.ClickHomePageButton();
    await siteHeader.ClickDownloadsButton();
    // todo: click Spectral Analysis more info button 
    await downloadsPage.SA_ClickMoreInfoButton();
    // todo: click System Requirement Tab
    saAnalysisPage.ClickSystemRequirementsTab();
    // todo: Verify text under MacOS section (should be "Computer running macOS 10.14, 10.15, or 11. USB and Bluetooth")
    // actual text contains a period and using text above will cause a failure.  Also, the and was missing a d :)
    saAnalysisPage.VerifyMacOSRequirements("Computer running macOS 10.14, 10.15, or 11. USB and Bluetooth.");
}


// run the workflows
VerifyTestWorkflows();  


