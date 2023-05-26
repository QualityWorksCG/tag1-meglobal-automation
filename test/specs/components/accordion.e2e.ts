import LoginPage from  '../../pageobjects/CMS/Login/login.page';
import AdminContentPage from '../../pageobjects/CMS/Login/adminContent.page';
import AccordionBlockPage from '../../pageobjects/CMS/Components/accordion.page';
import {users} from '../../data/users.data';
import { accordionBlockData } from '../../data/accordion.data';
import QALayoutPage from '../../pageobjects/CMS/Components/QALayoutPage.page';
import { cookieData } from '../../data/cookie.data';


describe('Accordion Component Tests', () => {
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
        await AdminContentPage.getQALandingPage();  //TODO: This function may need some checking out. When its run with all tests at once. I don't think it behaves as expected.
        expect(await QALayoutPage.tabLayout).toBeDisplayed();
    })

    afterEach(async function() { //TODO: This needs some checking out. The screenshots that it create seem to be taken a bit too early in the execution?
        // Take a screenshot after each test/assertion
        const testName = this.currentTest?.fullTitle().replace(/\s/g, '_');
        const screenshotPath = `./screenshots/Accordion/${testName}.png`;
        await browser.saveScreenshot(screenshotPath);
    });

    /**
     * TODO: Possibly add some cleanup code here?
     */
    // after(async function () {

    // })
  
    it('Verify that a site Content Administrator can create an Accordion Component, Show|Hide included)', async () => {
        const title = accordionBlockData.title;
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.createNewSection();
        await QALayoutPage.navigateToBlockList();
        (await QALayoutPage.btnAccordion).scrollIntoView();
        (await QALayoutPage.btnAccordion).click();
        (await AccordionBlockPage.configBlock).waitForDisplayed();

        await AccordionBlockPage.createAccordion(accordionBlockData.mainTitle, accordionBlockData.title, accordionBlockData.content);

        expect(AccordionBlockPage.successMsg).toBeDisplayed();

        await QALayoutPage.goToPageView();
        await (await AccordionBlockPage.accordionElement).scrollIntoView({ behavior: 'auto', block: 'center' });
        
        expect(await AccordionBlockPage.accordionElement).toBeDisplayedInViewport();

        //Verify that the accordion content can be shown
        await (await AccordionBlockPage.accordionBtn).click();
        expect(await $(`div[aria-labelledby="${title}"]`)).toBeDisplayedInViewport(); 

        //Verify that the accordion content can be hidden
        await (await AccordionBlockPage.accordionBtn).click();
        expect(await $(`div[aria-labelledby="${title}"]`)).not.toBeDisplayedInViewport(); 

        //Re-open accordion for screenshot
        await (await AccordionBlockPage.accordionBtn).click();
        await browser.pause(1500);

    });

  });
