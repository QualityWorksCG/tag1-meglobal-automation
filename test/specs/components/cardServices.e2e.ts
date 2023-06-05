import LoginPage from  '../../pageobjects/CMS/Login/login.page';
import AdminContentPage from '../../pageobjects/CMS/Login/adminContent.page';
import CardServicesBlockPage from '../../pageobjects/CMS/Components/cardServices.page';
import {users} from '../../data/users.data';
import { cardServicesBlockData } from '../../data/cardServices.data';
import QALayoutPage from '../../pageobjects/CMS/Components/QALayoutPage.page';
import { cookieData } from '../../data/cookie.data';


describe('Card Services Component Tests', () => {
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
        expect(await QALayoutPage.tabLayout).toBeDisplayed();
    })

    afterEach(async function() { 
        // Take a screenshot after each test/assertion
        const testName = this.currentTest?.fullTitle().replace(/\s/g, '_');
        const screenshotPath = `./screenshots/CardServices/${testName}.png`;
        await browser.saveScreenshot(screenshotPath);
    });
   
    //delete previously created sections
    afterEach(async function() { 
        await AdminContentPage.open();
        await AdminContentPage.getQALandingPage();
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.cleanUpJob();
        expect(await QALayoutPage.btnRemoveSection).not.toBeDisplayedInViewport();
        //return to starting point
        await AdminContentPage.open();
        await AdminContentPage.getQALandingPage();  
    });

  
    it('[S3C903] Verify that a site Content Administrator can create a Card Services Component with an external link', async () => {
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.createNewSection();
        await QALayoutPage.navigateToBlockList();
        (await QALayoutPage.btnCardServices).scrollIntoView();
        (await QALayoutPage.btnCardServices).click();
        (await CardServicesBlockPage.configBlock).waitForDisplayed();

        const imageFilePath = await browser.uploadFile('scriptFiles/sampleImg1.jpg');
        await CardServicesBlockPage.createCardServiceExtLink(cardServicesBlockData.title, cardServicesBlockData.eyebrow, cardServicesBlockData.headline, cardServicesBlockData.content, cardServicesBlockData.list, cardServicesBlockData.btnText, cardServicesBlockData.btnUrl,cardServicesBlockData.linkText, cardServicesBlockData.linkUrl, cardServicesBlockData.infolabel, imageFilePath, cardServicesBlockData.altText);

        expect(CardServicesBlockPage.successMsg).toBeDisplayed();

        await QALayoutPage.goToPageView();
        await (await CardServicesBlockPage.cardContent).scrollIntoView({ behavior: 'auto', block: 'center' });
        
        expect(await CardServicesBlockPage.cardServicesElement).toExist; 
        expect((await CardServicesBlockPage.cardContent).getText).toHaveText(cardServicesBlockData.content);   
    });

    it('[S3C904] Verify that a site Content Administrator can create a Card Services Component with an internal link', async () => {
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.createNewSection();
        await QALayoutPage.navigateToBlockList();
        (await QALayoutPage.btnCardServices).scrollIntoView();
        (await QALayoutPage.btnCardServices).click();
        (await CardServicesBlockPage.configBlock).waitForDisplayed();

        const imageFilePath = await browser.uploadFile('scriptFiles/sampleImg2.jpg');
        await CardServicesBlockPage.createCardServiceIntLink(cardServicesBlockData.title, cardServicesBlockData.eyebrow, cardServicesBlockData.headline, cardServicesBlockData.content, cardServicesBlockData.list, cardServicesBlockData.resiText, cardServicesBlockData.infolabel, imageFilePath, cardServicesBlockData.altText);

        expect(CardServicesBlockPage.successMsg).toBeDisplayed();

        await QALayoutPage.goToPageView();
        await (await CardServicesBlockPage.listElement).scrollIntoView({ behavior: 'auto', block: 'center' });
        
        expect(await CardServicesBlockPage.internalLink).toExist;  
        expect((await CardServicesBlockPage.internalLink).getText).toHaveText(cardServicesBlockData.resiText) 
    });

    it('[S3C905] Verify that all design fields are present with the correct available options.', async () => {
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.createNewSection();
        await QALayoutPage.navigateToBlockList();
        (await QALayoutPage.btnCardServices).scrollIntoView();
        (await QALayoutPage.btnCardServices).click();
        (await CardServicesBlockPage.configBlock).waitForDisplayed();

        await CardServicesBlockPage.navToStyling()
        
        expect(await CardServicesBlockPage.dropdownBackground).toBeDisplayed();
        expect(await CardServicesBlockPage.dropdownBackground).toHaveValue('_none');
        expect(await CardServicesBlockPage.dropdownBackground).toHaveValue('white');
        expect(await CardServicesBlockPage.dropdownBackground).toHaveValue('soft-blue');
        expect(await CardServicesBlockPage.dropdownBackground).toHaveValue('soft-gray');
        expect(await CardServicesBlockPage.dropdownBackground).toHaveValue('mist-gray');
        expect(await CardServicesBlockPage.dropdownBackground).toHaveValue('soft-fuchsia');
        expect(await CardServicesBlockPage.dropdownBackground).toHaveValue('montefiore-primary-500');
        expect(await CardServicesBlockPage.dropdownBackground).toHaveValue('montefiore-secondary-500');
        expect(await CardServicesBlockPage.dropdownBackground).toHaveValue('einstein-primary-500');
        expect(await CardServicesBlockPage.dropdownBackground).toHaveValue('einstein-secondary-500');
        expect(await CardServicesBlockPage.dropdownBackground).toHaveValue('sky');
        expect(await CardServicesBlockPage.dropdownBackground).toHaveValue('water');
        expect(await CardServicesBlockPage.dropdownBackground).toHaveValue('flesh');
        expect(await CardServicesBlockPage.dropdownBackground).toHaveValue('wheat');
        expect(await CardServicesBlockPage.dropdownBackground).toHaveValue('mint');
        expect(await CardServicesBlockPage.dropdownBackground).toHaveValue('bronze');

        expect(await CardServicesBlockPage.dropdownContentPosition).toBeDisplayed();
        expect(await CardServicesBlockPage.dropdownContentPosition).toHaveValue('_none');
        expect(await CardServicesBlockPage.dropdownContentPosition).toHaveValue('left');
        expect(await CardServicesBlockPage.dropdownContentPosition).toHaveValue('right');

        expect(await CardServicesBlockPage.dropdownServicesDisplay).toBeDisplayed();
        expect(await CardServicesBlockPage.dropdownServicesDisplay).toHaveValue('_none');
        expect(await CardServicesBlockPage.dropdownServicesDisplay).toHaveValue('grid');
        expect(await CardServicesBlockPage.dropdownServicesDisplay).toHaveValue('inline');

        const minimalCheckbox = await CardServicesBlockPage.checkboxMinimal;
        expect(await minimalCheckbox).toBeDisplayed();
        expect(await minimalCheckbox.isSelected()).toBe(false);

        expect(await CardServicesBlockPage.dropdownMobileAspectRatio).toBeDisplayed();
        expect(await CardServicesBlockPage.dropdownMobileAspectRatio).toHaveValue('none');
        expect(await CardServicesBlockPage.dropdownMobileAspectRatio).toHaveValue('fluid');
        expect(await CardServicesBlockPage.dropdownMobileAspectRatio).toHaveValue('1:1');
        expect(await CardServicesBlockPage.dropdownMobileAspectRatio).toHaveValue('5:4');
        expect(await CardServicesBlockPage.dropdownMobileAspectRatio).toHaveValue('4:3');
        expect(await CardServicesBlockPage.dropdownMobileAspectRatio).toHaveValue('3:4');
        expect(await CardServicesBlockPage.dropdownMobileAspectRatio).toHaveValue('3:2');
        expect(await CardServicesBlockPage.dropdownMobileAspectRatio).toHaveValue('16:9');
        expect(await CardServicesBlockPage.dropdownMobileAspectRatio).toHaveValue('2:1');
        expect(await CardServicesBlockPage.dropdownMobileAspectRatio).toHaveValue('21:9');
        expect(await CardServicesBlockPage.dropdownMobileAspectRatio).toHaveValue('25:6');
        
        expect(await CardServicesBlockPage.dropdownDesktopAspectRatio).toBeDisplayed();
        expect(await CardServicesBlockPage.dropdownDesktopAspectRatio).toHaveValue('none');
        expect(await CardServicesBlockPage.dropdownDesktopAspectRatio).toHaveValue('fluid');
        expect(await CardServicesBlockPage.dropdownDesktopAspectRatio).toHaveValue('1:1');
        expect(await CardServicesBlockPage.dropdownDesktopAspectRatio).toHaveValue('5:4');
        expect(await CardServicesBlockPage.dropdownDesktopAspectRatio).toHaveValue('4:3');
        expect(await CardServicesBlockPage.dropdownDesktopAspectRatio).toHaveValue('3:4');
        expect(await CardServicesBlockPage.dropdownDesktopAspectRatio).toHaveValue('3:2');
        expect(await CardServicesBlockPage.dropdownDesktopAspectRatio).toHaveValue('16:9');
        expect(await CardServicesBlockPage.dropdownDesktopAspectRatio).toHaveValue('2:1');
        expect(await CardServicesBlockPage.dropdownDesktopAspectRatio).toHaveValue('21:9');
        expect(await CardServicesBlockPage.dropdownDesktopAspectRatio).toHaveValue('25:6');

        expect(await CardServicesBlockPage.dropdownTheme).toBeDisplayed();
        expect(await CardServicesBlockPage.dropdownDesktopAspectRatio).toHaveValue('_none');
        expect(await CardServicesBlockPage.dropdownDesktopAspectRatio).toHaveValue('dark');
        expect(await CardServicesBlockPage.dropdownDesktopAspectRatio).toHaveValue('light');

        expect(await CardServicesBlockPage.dropdownAlignment).toBeDisplayed();
        expect(await CardServicesBlockPage.dropdownDesktopAspectRatio).toHaveValue('_none');
        expect(await CardServicesBlockPage.dropdownDesktopAspectRatio).toHaveValue('left');
        expect(await CardServicesBlockPage.dropdownDesktopAspectRatio).toHaveValue('center');
    });

  });