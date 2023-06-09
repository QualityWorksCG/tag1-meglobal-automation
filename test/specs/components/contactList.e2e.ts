import LoginPage from  '../../pageobjects/CMS/Login/login.page';
import AdminContentPage from '../../pageobjects/CMS/Login/adminContent.page';
import ContactListBlockPage from '../../pageobjects/CMS/Components/contactList.page';
import {users} from '../../data/users.data';
import { contactListBlockData } from '../../data/contactList.data';
import QALayoutPage from '../../pageobjects/CMS/Components/QALayoutPage.page';
import { cookieData } from '../../data/cookie.data';


describe('Contact List Component Tests', () => {
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
        const screenshotPath = `./screenshots/ContactList/${testName}.png`;
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
  
    it('[S3C874] Verify that a site Content Administrator can create a Contact List Component with an Email Contact List Item', async () => {
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.createNewSection();
        await QALayoutPage.navigateToBlockList();
        (await QALayoutPage.btnContactList).scrollIntoView();
        (await QALayoutPage.btnContactList).click();
        (await ContactListBlockPage.configBlock).waitForDisplayed();

        await ContactListBlockPage.createEmailContact(contactListBlockData.title, contactListBlockData.headline, contactListBlockData.content, contactListBlockData.heading, contactListBlockData.email, contactListBlockData.info);

        await expect(ContactListBlockPage.successMsg).toBeDisplayed();

        await QALayoutPage.goToPageView();
        await (await ContactListBlockPage.contactElement).scrollIntoView({ behavior: 'auto', block: 'center' });
        
        await expect(ContactListBlockPage.contactHeadline).toHaveText(contactListBlockData.headline); 
        await expect(ContactListBlockPage.contactHeading).toHaveText(contactListBlockData.heading); 
        await expect(ContactListBlockPage.contactContent).toHaveText(contactListBlockData.content); 
        await expect($(`a[data-analytics-click-text="${contactListBlockData.email}"]`)).toExist();   
    });

    it('[S3C875] Verify that a site Content Administrator can create a Contact List Component with an Text Contact List Item', async () => {
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.createNewSection();
        await QALayoutPage.navigateToBlockList();
        (await QALayoutPage.btnContactList).scrollIntoView();
        (await QALayoutPage.btnContactList).click();
        (await ContactListBlockPage.configBlock).waitForDisplayed();

        await ContactListBlockPage.createTextContact(contactListBlockData.title, contactListBlockData.headline, contactListBlockData.content, contactListBlockData.heading, contactListBlockData.text, contactListBlockData.url, contactListBlockData.linkText, contactListBlockData.info);

        await expect(ContactListBlockPage.successMsg).toBeDisplayed();

        await QALayoutPage.goToPageView();
        await (await ContactListBlockPage.contactElement).scrollIntoView({ behavior: 'auto', block: 'center' });
        
        await expect(ContactListBlockPage.contactHeadline).toHaveText(contactListBlockData.headline); 
        await expect(ContactListBlockPage.contactHeading).toHaveText(contactListBlockData.heading); 
        await expect(ContactListBlockPage.contactContent).toHaveText(contactListBlockData.content); 
        await expect($(`a[data-analytics-click-text="${contactListBlockData.linkText}"]`)).toExist();   
    });

    it('[S3C876] Verify that a site Content Administrator can create a Contact List Component with an Text Contact List Item using an internal node as its link', async () => {
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.createNewSection();
        await QALayoutPage.navigateToBlockList();
        (await QALayoutPage.btnContactList).scrollIntoView();
        (await QALayoutPage.btnContactList).click();
        (await ContactListBlockPage.configBlock).waitForDisplayed();

        await ContactListBlockPage.createIntTextContact(contactListBlockData.title, contactListBlockData.headline, contactListBlockData.content, contactListBlockData.heading, contactListBlockData.text, contactListBlockData.intUrl, contactListBlockData.intLinkText, contactListBlockData.info);

        await expect(ContactListBlockPage.successMsg).toBeDisplayed();

        await QALayoutPage.goToPageView();
        await (await ContactListBlockPage.contactElement).scrollIntoView({ behavior: 'auto', block: 'center' });
        
        await expect(ContactListBlockPage.contactHeadline).toHaveText(contactListBlockData.headline); 
        await expect(ContactListBlockPage.contactHeading).toHaveText(contactListBlockData.heading); 
        await expect(ContactListBlockPage.contactContent).toHaveText(contactListBlockData.content); 
        await expect($(`a[data-analytics-click-text="${contactListBlockData.intLinkText}"]`)).toExist();   
    });

    it('[S3C877]  Verify that a site Content Administrator can create a Contact List Component with a Phone Contact List Item', async () => {
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.createNewSection();
        await QALayoutPage.navigateToBlockList();
        (await QALayoutPage.btnContactList).scrollIntoView();
        (await QALayoutPage.btnContactList).click();
        (await ContactListBlockPage.configBlock).waitForDisplayed();

        await ContactListBlockPage.createPhoneContact(contactListBlockData.title, contactListBlockData.headline, contactListBlockData.content, contactListBlockData.heading, contactListBlockData.subTitle, contactListBlockData.text, contactListBlockData.phone, contactListBlockData.info);

        await expect(ContactListBlockPage.successMsg).toBeDisplayed();

        await QALayoutPage.goToPageView();
        await (await ContactListBlockPage.contactElement).scrollIntoView({ behavior: 'auto', block: 'center' });
        
        await expect(ContactListBlockPage.contactHeadline).toHaveText(contactListBlockData.headline); 
        await expect(ContactListBlockPage.contactHeading).toHaveText(contactListBlockData.heading); 
        await expect(ContactListBlockPage.contactContent).toHaveText(contactListBlockData.content); 
        await expect($(`a[data-analytics-click-text="${contactListBlockData.subTitle}"]`)).toExist();   
    });

    it('[S3C878]  Verify that a site Content Administrator can create a Contact List Component with a Location Contact List Item', async () => {
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.createNewSection();
        await QALayoutPage.navigateToBlockList();
        (await QALayoutPage.btnContactList).scrollIntoView();
        (await QALayoutPage.btnContactList).click();
        (await ContactListBlockPage.configBlock).waitForDisplayed();

        await ContactListBlockPage.createLocationContact(contactListBlockData.title, contactListBlockData.headline, contactListBlockData.content, contactListBlockData.heading, contactListBlockData.address, contactListBlockData.latitude, contactListBlockData.longitude, contactListBlockData.url);

        await expect(ContactListBlockPage.successMsg).toBeDisplayed();

        await QALayoutPage.goToPageView();
        await (await ContactListBlockPage.contactElement).scrollIntoView({ behavior: 'auto', block: 'center' });
        
        await expect(ContactListBlockPage.contactHeadline).toHaveText(contactListBlockData.headline); 
        await expect(ContactListBlockPage.contactHeading).toHaveText(contactListBlockData.heading); 
        await expect(ContactListBlockPage.contactContent).toHaveText(contactListBlockData.content); 
        await expect($(`a[href="${contactListBlockData.url}"]`)).toExist();   
    });

    it('[S3C879]  Verify that a site Content Administrator can create a Contact List Component with a Location Contact List Item using an internal node as its link', async () => {
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.createNewSection();
        await QALayoutPage.navigateToBlockList();
        (await QALayoutPage.btnContactList).scrollIntoView();
        (await QALayoutPage.btnContactList).click();
        (await ContactListBlockPage.configBlock).waitForDisplayed();

        await ContactListBlockPage.createIntLocationContact(contactListBlockData.title, contactListBlockData.headline, contactListBlockData.content, contactListBlockData.heading, contactListBlockData.address, contactListBlockData.latitude, contactListBlockData.longitude, contactListBlockData.intUrl);

        await expect(ContactListBlockPage.successMsg).toBeDisplayed();

        await QALayoutPage.goToPageView();
        await (await ContactListBlockPage.contactElement).scrollIntoView({ behavior: 'auto', block: 'center' });
        
        await expect(ContactListBlockPage.contactHeadline).toHaveText(contactListBlockData.headline); 
        await expect(ContactListBlockPage.contactHeading).toHaveText(contactListBlockData.heading); 
        await expect(ContactListBlockPage.contactContent).toHaveText(contactListBlockData.content); 
        await expect($(`a[href="${contactListBlockData.intUrl}"]`)).toExist();   
    });

    it('[S3C880] Verify that a site Content Administrator can create a Contact List Component with a Chat Contact List Item', async () => {
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.createNewSection();
        await QALayoutPage.navigateToBlockList();
        (await QALayoutPage.btnContactList).scrollIntoView();
        (await QALayoutPage.btnContactList).click();
        (await ContactListBlockPage.configBlock).waitForDisplayed();

        await ContactListBlockPage.createChatContact(contactListBlockData.title, contactListBlockData.headline, contactListBlockData.content, contactListBlockData.heading, contactListBlockData.url, contactListBlockData.linkText, contactListBlockData.info);

        await expect(ContactListBlockPage.successMsg).toBeDisplayed();

        await QALayoutPage.goToPageView();
        await (await ContactListBlockPage.contactElement).scrollIntoView({ behavior: 'auto', block: 'center' });
        
        await expect(ContactListBlockPage.contactHeadline).toHaveText(contactListBlockData.headline); 
        await expect(ContactListBlockPage.contactHeading).toHaveText(contactListBlockData.heading); 
        await expect(ContactListBlockPage.contactContent).toHaveText(contactListBlockData.content); 
        await expect($(`a[data-analytics-click-text="${contactListBlockData.linkText}"]`)).toExist();   
    });

    it('[S3C881] Verify that a site Content Administrator can create a Contact List Component with a Chat Contact List Item using an internal node as its link', async () => {
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.createNewSection();
        await QALayoutPage.navigateToBlockList();
        (await QALayoutPage.btnContactList).scrollIntoView();
        (await QALayoutPage.btnContactList).click();
        (await ContactListBlockPage.configBlock).waitForDisplayed();

        await ContactListBlockPage.createChatContact(contactListBlockData.title, contactListBlockData.headline, contactListBlockData.content, contactListBlockData.heading, contactListBlockData.intUrl, contactListBlockData.intLinkText, contactListBlockData.info);

        await expect(ContactListBlockPage.successMsg).toBeDisplayed();

        await QALayoutPage.goToPageView();
        await (await ContactListBlockPage.contactElement).scrollIntoView({ behavior: 'auto', block: 'center' });
        
        await expect(ContactListBlockPage.contactHeadline).toHaveText(contactListBlockData.headline); 
        await expect(ContactListBlockPage.contactHeading).toHaveText(contactListBlockData.heading); 
        await expect(ContactListBlockPage.contactContent).toHaveText(contactListBlockData.content); 
        await expect($(`a[data-analytics-click-text="${contactListBlockData.intLinkText}"]`)).toExist();   
    });

    it('[S3C882] Verify that a site Content Administrator can create a Contact List Component with an Button Contact List Item', async () => {
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.createNewSection();
        await QALayoutPage.navigateToBlockList();
        (await QALayoutPage.btnContactList).scrollIntoView();
        (await QALayoutPage.btnContactList).click();
        (await ContactListBlockPage.configBlock).waitForDisplayed();

        await ContactListBlockPage.createButtonContact(contactListBlockData.title, contactListBlockData.headline, contactListBlockData.content, contactListBlockData.heading, contactListBlockData.btnText, contactListBlockData.url, contactListBlockData.info);

        await expect(ContactListBlockPage.successMsg).toBeDisplayed();

        await QALayoutPage.goToPageView();
        await (await ContactListBlockPage.contactElement).scrollIntoView({ behavior: 'auto', block: 'center' });
        
        await expect(ContactListBlockPage.contactHeadline).toHaveText(contactListBlockData.headline); 
        await expect(ContactListBlockPage.contactHeading).toHaveText(contactListBlockData.heading); 
        await expect(ContactListBlockPage.contactContent).toHaveText(contactListBlockData.content); 
        await expect($(`a[data-analytics-click-text="${contactListBlockData.btnText}"]`)).toExist();   
    });

    it('[S3C883] Verify that a site Content Administrator can create a Contact List Component with an Button Contact List Item using an internal node as its link', async () => {
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.createNewSection();
        await QALayoutPage.navigateToBlockList();
        (await QALayoutPage.btnContactList).scrollIntoView();
        (await QALayoutPage.btnContactList).click();
        (await ContactListBlockPage.configBlock).waitForDisplayed();

        await ContactListBlockPage.createIntButtonContact(contactListBlockData.title, contactListBlockData.headline, contactListBlockData.content, contactListBlockData.heading, contactListBlockData.btnText, contactListBlockData.intUrl, contactListBlockData.info);

        await expect(ContactListBlockPage.successMsg).toBeDisplayed();

        await QALayoutPage.goToPageView();
        await (await ContactListBlockPage.contactElement).scrollIntoView({ behavior: 'auto', block: 'center' });
        
        await expect(ContactListBlockPage.contactHeadline).toHaveText(contactListBlockData.headline); 
        await expect(ContactListBlockPage.contactHeading).toHaveText(contactListBlockData.heading); 
        await expect(ContactListBlockPage.contactContent).toHaveText(contactListBlockData.content); 
        await expect($(`a[data-analytics-click-text="${contactListBlockData.btnText}"]`)).toExist();   
    });

    it('[S3C884] Verify that a site Content Administrator can create a Contact List Component with a Person Contact List Item', async () => {
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.createNewSection();
        await QALayoutPage.navigateToBlockList();
        (await QALayoutPage.btnContactList).scrollIntoView();
        (await QALayoutPage.btnContactList).click();
        (await ContactListBlockPage.configBlock).waitForDisplayed();

        const imageFilePath = await browser.uploadFile('scriptFiles/sampleImg2.jpg');
        await ContactListBlockPage.createPersonContact(contactListBlockData.title, contactListBlockData.headline, contactListBlockData.content, contactListBlockData.heading, imageFilePath, contactListBlockData.altText,contactListBlockData.name, contactListBlockData.info);

        await expect(ContactListBlockPage.successMsg).toBeDisplayed();

        await QALayoutPage.goToPageView();
        await (await ContactListBlockPage.contactElement).scrollIntoView({ behavior: 'auto', block: 'center' });
        
        await expect(ContactListBlockPage.contactHeadline).toHaveText(contactListBlockData.headline); 
        await expect(ContactListBlockPage.contactHeading).toHaveText(contactListBlockData.heading); 
        await expect(ContactListBlockPage.contactContent).toHaveText(contactListBlockData.content); 
    });

    it('[S3C885] Verify that a site Content Administrator can create a Contact List Component with multiple Items', async () => {
        (await QALayoutPage.tabLayout).click();
        await QALayoutPage.createNewSection();
        await QALayoutPage.navigateToBlockList();
        (await QALayoutPage.btnContactList).scrollIntoView();
        (await QALayoutPage.btnContactList).click();
        (await ContactListBlockPage.configBlock).waitForDisplayed();

        const imageFilePath = await browser.uploadFile('scriptFiles/sampleImg2.jpg');
        await ContactListBlockPage.createMultiContact(contactListBlockData.title, contactListBlockData.headline, contactListBlockData.content, contactListBlockData.heading, contactListBlockData.address, contactListBlockData.latitude, contactListBlockData.longitude, contactListBlockData.url, contactListBlockData.email, contactListBlockData.subTitle, contactListBlockData.text, contactListBlockData.phone, contactListBlockData.url, contactListBlockData.linkText,
        imageFilePath, contactListBlockData.altText, contactListBlockData.name, contactListBlockData.info);

        await expect(ContactListBlockPage.successMsg).toBeDisplayed();

        await QALayoutPage.goToPageView();
        await (await ContactListBlockPage.contactElement).scrollIntoView();
        
        await expect(ContactListBlockPage.contactHeadline).toHaveText(contactListBlockData.headline); 
        await expect(ContactListBlockPage.contactHeading).toHaveText(contactListBlockData.heading); 
        await expect(ContactListBlockPage.contactContent).toHaveText(contactListBlockData.content); 
        await expect($(`a[data-analytics-click-text="${contactListBlockData.email}"]`)).toExist();   
        await expect($(`a[data-analytics-click-text="${contactListBlockData.linkText}"]`)).toExist();   
        await expect($(`a[data-analytics-click-text="${contactListBlockData.subTitle}"]`)).toExist();   
        await expect($(`a[href="${contactListBlockData.url}"]`)).toExist();     

    });
   

    // it('[S3C886] Verify that all design fields are present with the correct available options and they are correctly applied', async () => {
    //     (await QALayoutPage.tabLayout).click();
    //     await QALayoutPage.createNewSection();
    //     await QALayoutPage.navigateToBlockList();
    //     (await QALayoutPage.btnContactList).scrollIntoView();
    //     (await QALayoutPage.btnContactList).click();
    //     (await ContactListBlockPage.configBlock).waitForDisplayed();

    //     await ContactListBlockPage.navToStyling()
        
    //     await expect(ContactListBlockPage.dropdownBackground).toBeDisplayed();
    //     await expect(ContactListBlockPage.dropdownBackground).toHaveValue('white');
    //     await expect(ContactListBlockPage.dropdownBackground).toHaveValue('soft-gray');
    //     await expect(ContactListBlockPage.dropdownBackground).toHaveValue('soft-blue');

    //     await expect(ContactListBlockPage.dropdownContentPadding).toBeDisplayed();
    //     await expect(ContactListBlockPage.dropdownContentPadding).toHaveValue('base');

    // });

  });
