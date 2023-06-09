import LoginPage from  '../../pageobjects/CMS/Login/login.page';
import AdminContentPage from '../../pageobjects/CMS/Login/adminContent.page';
import StepperBlockPage from '../../pageobjects/CMS/Components/stepper.page';
import {users} from '../../data/users.data';
import { stepperBlockData } from '../../data/stepper.data';
import QALayoutPage from '../../pageobjects/CMS/Components/QALayoutPage.page';
import { cookieData } from '../../data/cookie.data';


describe('Stepper Component Tests', () => {
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
        const screenshotPath = `./screenshots/Stepper/${testName}.png`;
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

    it('[S3C926] Verify required fields in a stepper component', async () => {
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.createNewSection();
        await QALayoutPage.navigateToBlockList();
        (await QALayoutPage.btnStepper).scrollIntoView();
        (await QALayoutPage.btnStepper).click();
        (await StepperBlockPage.configBlock).waitForDisplayed();

        await StepperBlockPage.checkRequired(stepperBlockData.adminTitle);

        const elem = await StepperBlockPage.inputTitle;
        await expect(await elem.getAttribute('aria-required')).toEqual('true');

    });
  
    it('[S3C927] Verify that a site Content Administrator can create a horizontal Stepper Component', async () => {
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.createNewSection();
        await QALayoutPage.navigateToBlockList();
        (await QALayoutPage.btnStepper).scrollIntoView();
        (await QALayoutPage.btnStepper).click();
        (await StepperBlockPage.configBlock).waitForDisplayed();

        await StepperBlockPage.createHorizontalStepper(stepperBlockData.adminTitle, stepperBlockData.steps.title1, stepperBlockData.steps.content1, stepperBlockData.steps.title2, stepperBlockData.steps.content2, stepperBlockData.steps.title3, stepperBlockData.steps.content3, stepperBlockData.steps.title4, stepperBlockData.steps.content4, stepperBlockData.steps.title5, stepperBlockData.steps.content5, stepperBlockData.backLabel, stepperBlockData.contLabel);

        await expect(await StepperBlockPage.successMsg).toBeDisplayed();

        await QALayoutPage.goToPageView();
        await (await StepperBlockPage.stepperElement).scrollIntoView({ behavior: 'auto', block: 'center' });

        await expect(await $('.mf-stepper__list--horizontal')).toBeExisting();
        await expect(await StepperBlockPage.stepsElements.length).toEqual(5);
    });

    it('[S3C928] Verify that a site Content Administrator can create a vertical Stepper Component', async () => {
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.createNewSection();
        await QALayoutPage.navigateToBlockList();
        (await QALayoutPage.btnStepper).scrollIntoView();
        (await QALayoutPage.btnStepper).click();
        (await StepperBlockPage.configBlock).waitForDisplayed();

        await StepperBlockPage.createVerticalStepper(stepperBlockData.adminTitle, stepperBlockData.steps.title1, stepperBlockData.steps.content1, stepperBlockData.steps.title2, stepperBlockData.steps.content2, stepperBlockData.steps.title3, stepperBlockData.steps.content3, stepperBlockData.steps.title4, stepperBlockData.steps.content4, stepperBlockData.steps.title5, stepperBlockData.steps.content5, stepperBlockData.backLabel, stepperBlockData.contLabel);

        await expect(await StepperBlockPage.successMsg).toBeDisplayed();

        await QALayoutPage.goToPageView();
        await (await StepperBlockPage.stepperElement).scrollIntoView({ behavior: 'auto', block: 'center' });

        await expect(await $('.mf-stepper__list--vertical')).toBeExisting();
        await expect(await StepperBlockPage.stepsElements.length).toEqual(5);
    });

    it('[S3C929] Verify that when the stepper component is on the initial step, the "back" button is not displayed, and the "continue" button is displayed.', async () => {
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.createNewSection();
        await QALayoutPage.navigateToBlockList();
        (await QALayoutPage.btnStepper).scrollIntoView();
        (await QALayoutPage.btnStepper).click();
        (await StepperBlockPage.configBlock).waitForDisplayed();

        await StepperBlockPage.createHorizontalStepper(stepperBlockData.adminTitle, stepperBlockData.steps.title1, stepperBlockData.steps.content1, stepperBlockData.steps.title2, stepperBlockData.steps.content2, stepperBlockData.steps.title3, stepperBlockData.steps.content3, stepperBlockData.steps.title4, stepperBlockData.steps.content4, stepperBlockData.steps.title5, stepperBlockData.steps.content5, stepperBlockData.backLabel, stepperBlockData.contLabel);

        await expect(await StepperBlockPage.successMsg).toBeDisplayed();

        await QALayoutPage.goToPageView();
        await (await StepperBlockPage.stepperElement).scrollIntoView({ behavior: 'auto', block: 'center' });

        await expect(await StepperBlockPage.btnBackStep).not.toBeDisplayedInViewport();
        await expect(await StepperBlockPage.btnNextStep).toBeDisplayedInViewport();
    });

    it('[S3C930] Verify that when the stepper component is on the last step, "continue" button is not displayed and the "back" button is displayed', async () => {
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.createNewSection();
        await QALayoutPage.navigateToBlockList();
        (await QALayoutPage.btnStepper).scrollIntoView();
        (await QALayoutPage.btnStepper).click();
        (await StepperBlockPage.configBlock).waitForDisplayed();

        await StepperBlockPage.createHorizontalStepper(stepperBlockData.adminTitle, stepperBlockData.steps.title1, stepperBlockData.steps.content1, stepperBlockData.steps.title2, stepperBlockData.steps.content2, stepperBlockData.steps.title3, stepperBlockData.steps.content3, stepperBlockData.steps.title4, stepperBlockData.steps.content4, stepperBlockData.steps.title5, stepperBlockData.steps.content5, stepperBlockData.backLabel, stepperBlockData.contLabel);

        await expect(await StepperBlockPage.successMsg).toBeDisplayed();

        await QALayoutPage.goToPageView();
        await (await StepperBlockPage.stepperElement).scrollIntoView({ behavior: 'auto', block: 'center' });

        await (await StepperBlockPage.btnLastStep).click();
        await expect(await StepperBlockPage.btnBackStep).toBeEnabled();
        await expect(await StepperBlockPage.btnNextStep).not.toBeDisplayedInViewport();
    });





   

  });
