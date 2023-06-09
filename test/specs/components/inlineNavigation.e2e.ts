import LoginPage from  '../../pageobjects/CMS/Login/login.page';
import AdminContentPage from '../../pageobjects/CMS/Login/adminContent.page';
import InlineNavigationBlockPage from '../../pageobjects/CMS/Components/inlineNavigation.page';
import {users} from '../../data/users.data';
import { inlineNavigationBlockData } from '../../data/inlineNavigation.data';
import QALayoutPage from '../../pageobjects/CMS/Components/QALayoutPage.page';
import { cookieData } from '../../data/cookie.data';
import BillboardBlockPage from '../../pageobjects/CMS/Components/billboard.page';
import { billboardBlockData } from '../../data/billboard.data';
import AccordionBlockPage from '../../pageobjects/CMS/Components/accordion.page';
import { accordionBlockData } from '../../data/accordion.data';




describe('Inline Navigation Component Tests', () => {
    before(async () => {
        // //Login
        await browser.url(await users.bypassUrl);
        await browser.maximizeWindow();

        // Set the cookie for a logged in user
        await browser.setCookies([
            {
              name: cookieData.name,
              value: cookieData.value,
              domain: cookieData.domain,
              path: cookieData.path,
            }
        ]);
    });

    beforeEach(async function() {
        //navigate to admin content page
        await AdminContentPage.open();
        // Navigate to QA Landing page to execute tests
        await AdminContentPage.getQALandingPage();  
        await expect(QALayoutPage.tabLayout).toBeDisplayed();
    })

    afterEach(async function() { 
        // Take a screenshot after each test/assertion
        const testName = this.currentTest?.fullTitle().replace(/\s/g, '_');
        const screenshotPath = `./screenshots/InlineNavigation/${testName}.png`;
        await browser.saveScreenshot(screenshotPath);
    });

    //delete previously created sections
    afterEach(async function() { 
        await AdminContentPage.open();
        await AdminContentPage.getQALandingPage();
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.cleanUpJob();
        await expect(QALayoutPage.btnRemoveSection).not.toBeDisplayedInViewport();
        //return to starting point
        await AdminContentPage.open();
        await AdminContentPage.getQALandingPage();  
    });
  
    it('[S3C895] Verify that a site Content Administrator can create an Inline Navigation Component with an external link', async () => {
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.createNewSection();
        await QALayoutPage.navigateToBlockList();
        (await QALayoutPage.btnInlineNavigation).scrollIntoView();
        (await QALayoutPage.btnInlineNavigation).click();
        (await InlineNavigationBlockPage.configBlock).waitForDisplayed();

        await InlineNavigationBlockPage.createExtInlineNav(inlineNavigationBlockData.title, inlineNavigationBlockData.label, inlineNavigationBlockData.headline, inlineNavigationBlockData.linkTxt, inlineNavigationBlockData.url, inlineNavigationBlockData.id+'1');

        await expect(InlineNavigationBlockPage.successMsg).toBeDisplayed();

        await QALayoutPage.goToPageView();
        await (await InlineNavigationBlockPage.inlineNavElement).scrollIntoView({ behavior: 'auto', block: 'center' });
        
        await expect($(`#${inlineNavigationBlockData.id}1`)).toExist; 
        await expect($(`#${inlineNavigationBlockData.id}1`)).toHaveElementClassContaining('scrollto'); 
    });

    it('[S3C896] Verify that a site Content Administrator can create an Inline Navigation Component with an internal link', async () => {
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.createNewSection();
        await QALayoutPage.navigateToBlockList();
        (await QALayoutPage.btnInlineNavigation).scrollIntoView();
        (await QALayoutPage.btnInlineNavigation).click();
        (await InlineNavigationBlockPage.configBlock).waitForDisplayed();

        await InlineNavigationBlockPage.createIntInlineNav(inlineNavigationBlockData.title, inlineNavigationBlockData.label, inlineNavigationBlockData.headline, inlineNavigationBlockData.intLinkTxt, inlineNavigationBlockData.intUrl, inlineNavigationBlockData.id+'2');

        await expect(InlineNavigationBlockPage.successMsg).toBeDisplayed();

        await QALayoutPage.goToPageView();
        await (await InlineNavigationBlockPage.inlineNavElement).scrollIntoView({ behavior: 'auto', block: 'center' });
        
        await expect($(`#${inlineNavigationBlockData.id}2`)).toExist; 
        await expect($(`#${inlineNavigationBlockData.id}2`)).toHaveElementClassContaining('scrollto'); 
    });

    it('[S3C897] Verify that a site Content Administrator can create an Inline Navigation Component with a same page fragment', async () => {
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.createNewSection();
        await QALayoutPage.navigateToBlockList();
        (await QALayoutPage.btnInlineNavigation).scrollIntoView();
        (await QALayoutPage.btnInlineNavigation).click();
        (await InlineNavigationBlockPage.configBlock).waitForDisplayed();

        await InlineNavigationBlockPage.createInlineNavFragment(inlineNavigationBlockData.title, inlineNavigationBlockData.label, inlineNavigationBlockData.headline, inlineNavigationBlockData.linkTxt, inlineNavigationBlockData.jumpUrl, inlineNavigationBlockData.id+'3');
        
        (await QALayoutPage.btnBillBoard).click();
        (await QALayoutPage.btnBillBoard).waitForDisplayed();
        const imageFilePath = await browser.uploadFile('scriptFiles/sampleImg2.jpg');
        await BillboardBlockPage.createBillboard(billboardBlockData.title, billboardBlockData.headline, billboardBlockData.eyebrow, billboardBlockData.intro, billboardBlockData.content, billboardBlockData.btnText, billboardBlockData.url,imageFilePath, billboardBlockData.altText);
       
        (await QALayoutPage.tabLayout).click();
        await browser.pause(3000);
        await QALayoutPage.navigateToBlockList();
       
        (await QALayoutPage.btnAccordion).scrollIntoView();
        (await QALayoutPage.btnAccordion).click();
        (await AccordionBlockPage.configBlock).waitForDisplayed();
        await AccordionBlockPage.createAccordionWithID(accordionBlockData.mainTitle, accordionBlockData.title, accordionBlockData.content, inlineNavigationBlockData.jumpID);

        await expect(AccordionBlockPage.successMsg).toBeDisplayed();

        await QALayoutPage.goToPageView();
        await (await InlineNavigationBlockPage.inlineLink).click();
        
        await expect($(`#${inlineNavigationBlockData.id}3`)).toExist; 
        await expect($(`#${inlineNavigationBlockData.id}3`)).toHaveElementClassContaining('scrollto'); 
        await expect(AccordionBlockPage.accordionElement).toBeDisplayedInViewport();
    });

    it('[S3C898] Verify that a site Content Administrator can create an Inline Navigation Component in a Freeform block', async () => {
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.createNewSection();
        await QALayoutPage.navigateToBlockList();
        (await QALayoutPage.btnFreeform).scrollIntoView();
        (await QALayoutPage.btnFreeform).click();
        (await InlineNavigationBlockPage.configBlock).waitForDisplayed();

        await InlineNavigationBlockPage.createFreeformInlineNav(inlineNavigationBlockData.title, inlineNavigationBlockData.label, inlineNavigationBlockData.headline, inlineNavigationBlockData.linkTxt, inlineNavigationBlockData.url, inlineNavigationBlockData.id+'4');

        await expect(InlineNavigationBlockPage.successMsg).toBeDisplayed();

        await QALayoutPage.goToPageView();
        await (await InlineNavigationBlockPage.inlineNavElement).scrollIntoView({ behavior: 'auto', block: 'center' });
        
        await expect($(`#${inlineNavigationBlockData.id}4`)).toExist; 
        await expect($(`#${inlineNavigationBlockData.id}4`)).toHaveElementClassContaining('scrollto'); 
    });

   
  });
