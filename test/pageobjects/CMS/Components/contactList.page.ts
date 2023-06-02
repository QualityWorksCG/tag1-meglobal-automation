import Page from '../Login/page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ContactListBlockPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get btnSaveLayout () {
        return $('#edit-submit');
    }

    public get inputTitle () {
        return $('#edit-settings-label');
    }

    public get inputHeadline () {
        return $('#edit-settings-block-form-field-content-0-subform-field-headline-0-headline');
    }

    public get inputContent () {
        return $('#edit-settings-block-form-field-content-0-subform-field-content-0-value');
    }

    //email contact selectors
    public get inputHeading () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-0-subform-field-heading-0-value"]');
    }

    public get inputEmailAddress () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-0-subform-field-email-address-0-value"]');
    }

    public get checkboxDisplayAsLink () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-0-subform-field-display-as-link-value"]');
    }

    public get inputInfo () {
        return $('textarea[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-0-subform-field-info-0-value"]');
    }

    public get checkboxDivider () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-0-subform-field-divider-value"]');
    }

    // text contact selectors
    
    public get inputText () {
        return $('textarea[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-0-subform-field-text-0-value"]');
    }

    public get inputUrl () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-0-subform-field-link-0-uri"]');
    }

    public get inputLinkText () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-0-subform-field-link-0-title"]');
    }


    //phone contact selectors

    public get inputSubTitle () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-0-subform-field-title-0-value"]');
    }

    public get inputPhoneNumber () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-0-subform-field-phone-number-0-value"]');
    }

    //location contact selectors

    public get inputAddress () {
        return $('textarea[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-0-subform-field-address-0-value"]');
    }

    public get inputLatitude () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-0-subform-field-coordinates-0-value-lat"]');
    }

    public get inputLongitude () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-0-subform-field-coordinates-0-value-lon"]');
    }

    public get inputLink () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-0-subform-field-link-0-uri"]');
    }

    //chat contact selectors

    public get inputChatCTA () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-0-subform-field-chat-cta-0-value"]');
    }
    
    // button contact selectors

    public get inputButtonText () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-0-subform-field-button-0-title"]');
    }

    public get inputButtonUrl () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-0-subform-field-button-0-uri"]');
    }

    //person contact selectors

    public get dropdownImage () {
        return $('details[id^="edit-field-image-"]');
    }

    public get inputAltText () {
        return $('input[data-drupal-selector="edit-inline-entity-form-field-media-image-0-alt"]');
    }

    public get btnBrowse () {
        return $("input[type='file']");
    }

    public get btnSaveImage () {
        return $('#edit-submit');
    }

    public get inputName () {
        return $('textarea[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-0-subform-field-name-0-value"]');
    }

    //multi item selectors

    public get inputHeading1 () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-1-subform-field-heading-0-value"]');
    }

    public get inputHeading2 () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-2-subform-field-heading-0-value"]');
    }

    public get inputHeading3 () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-3-subform-field-heading-0-value"]');
    }

    public get inputHeading4 () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-4-subform-field-heading-0-value"]');
    }

    public get inputHeading5 () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-5-subform-field-heading-0-value"]');
    }
    
    public get inputInfo1 () {
        return $('textarea[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-1-subform-field-info-0-value"]');
    }

    public get inputInfo2 () {
        return $('textarea[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-2-subform-field-info-0-value"]');
    }

    public get inputInfo3 () {
        return $('textarea[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-3-subform-field-info-0-value"]');
    }

    public get inputInfo4 () {
        return $('textarea[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-4-subform-field-info-0-value"]');
    }

    public get checkboxDivider1 () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-1-subform-field-divider-value"]');
    }

    public get checkboxDivider2 () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-2-subform-field-divider-value"]');
    }

    public get checkboxDivider3 () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-3-subform-field-divider-value"]');
    }

    public get checkboxDivider4 () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-4-subform-field-divider-value"]');
    }

    public get checkboxDisplayAsLink1 () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-1-subform-field-display-as-link-value"]');
    }

    public get checkboxDisplayAsLink2 () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-2-subform-field-display-as-link-value"]');
    }

    public get checkboxDisplayAsLink3 () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-3-subform-field-display-as-link-value"]');
    }

    //*email multi
    public get inputEmailAddressM () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-1-subform-field-email-address-0-value"]');
    }

    public get checkboxDisplayAsLinkM () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-1-subform-field-display-as-link-value"]');
    }

    //*phone multi
    public get inputTitleM () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-2-subform-field-title-0-value"]');
    }

    public get inputTextM () {
        return $('textarea[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-2-subform-field-text-0-value"]');
    }

    public get inputPhoneNumberM () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-2-subform-field-phone-number-0-value"]');
    }

    public get checkboxPhoneLink () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-2-subform-field-display-as-link-value"]');
    }

    //*chat multi

    public get inputChatUrl () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-3-subform-field-link-0-uri"]');
    }

    public get inputChatCta () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-3-subform-field-chat-cta-0-value"]');
    }

    //*person multi

    public get inputNameM () {
        return $('textarea[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-items-4-subform-field-name-0-value"]');
    }
    
    ////


    public get dropdownToggle () {
        return $('.dropbutton__toggle');
    }

    public get emailListItem () {
        return $('.add-more-button-contact-item-email');
    }

    public get locationListItem () {
        return $('.add-more-button-contact-item-location');
    }

    public get phoneListItem () {
        return $('.add-more-button-contact-item-phone');
    }

    public get textListItem () {
        return $('.add-more-button-contact-item-text');
    }

    public get buttonListItem () {
        return $('.add-more-button-contact-item-button');
    }

    public get chatListItem () {
        return $('.add-more-button-contact-item-chat');
    }

    public get personListItem () {
        return $('.add-more-button-contact-item-person');
    }

    public get dropdownStyling () {
        return $('#edit-settings-block-form-field-content-widget-0-subform-group-styling');
    }

    public get dropdownBackground () {
        return $('#edit-settings-block-form-field-content-0-subform-field-background');
    }

    public get dropdownContentPadding () {
        return $('#edit-settings-block-form-field-content-0-subform-field-content-padding');
    }

    public get btnAddBlock () {
        return $('#edit-actions-submit');
    }

    public get configBlock () {
        return $('.ui-draggable-handle');
    }

    public get successMsg () {
        return $('.mf-alert__container--success');
    }

    public get entityIframe () {
        return $('iframe[name="entity_browser_iframe_image_browser"]');
    }

    public get contactElement () {
        return $('.mf-contact');
    }

    public get contactHeadline () {
        return $('p.mf-text-title-5-serif');
    }

    public get contactContent () {
        return $('p.mf-text-body-3-sans');
    }

    public get contactHeading () {
        return $('.mf-text-body-2-sans');
    }

    public get editTrigger () {
        return $('button.trigger');
    }

    public get optionConfigure () {
        return $('=Configure');
    }

    public get mainFrame () {
        return $('iframe[name="lbim-dialog-iframe"]');
    }




    /**
     * Helper methods to create Contact List Component
     */

    public async createEmailContact(title: string, headline: string, content: string, heading: string, email: string, info: string) {
        await browser.pause(6000); //TODO: find a better wait criteria here. At the moment an explicit wait is the only thing that seems to work
        // switch to the iframe
        const iframe = await $('iframe[name="lbim-dialog-iframe"]');
        await iframe.waitForDisplayed();
        await browser.switchToFrame(iframe);
        (await this.inputTitle).setValue(title);
        (await this.inputHeadline).scrollIntoView();
        (await this.inputHeadline).setValue(headline);
        (await this.inputContent).setValue(content);
        (await this.dropdownToggle).click();
        (await this.emailListItem).scrollIntoView();
        (await this.emailListItem).click();
        await browser.pause(2000);
        (await this.inputHeading).setValue(heading);
        (await this.inputEmailAddress).setValue(email);
        (await this.checkboxDisplayAsLink).click();
        (await this.inputInfo).scrollIntoView();
        (await this.inputInfo).setValue(info);
        (await this.checkboxDivider).click();
        (await this.btnAddBlock).scrollIntoView();
        (await this.btnAddBlock).click();
        (await this.btnSaveLayout).waitForDisplayed();
        (await this.btnSaveLayout).scrollIntoView();
        (await this.btnSaveLayout).click();
        await browser.pause(3000);
    }

    public async createTextContact(title: string, headline: string, content: string, heading: string, text: string, url: string, linkText: string, info: string) {
        await browser.pause(6000); //TODO: find a better wait criteria here. At the moment an explicit wait is the only thing that seems to work
        // switch to the iframe
        const iframe = await $('iframe[name="lbim-dialog-iframe"]');
        await iframe.waitForDisplayed();
        await browser.switchToFrame(iframe);
        (await this.inputTitle).setValue(title);
        (await this.inputHeadline).scrollIntoView();
        (await this.inputHeadline).setValue(headline);
        (await this.inputContent).setValue(content);
        (await this.dropdownToggle).scrollIntoView();
        (await this.dropdownToggle).click();
        (await this.textListItem).click();
        await browser.pause(2000);
        (await this.inputHeading).setValue(heading);
        (await this.inputText).setValue(text);
        (await this.inputUrl).scrollIntoView();
        (await this.inputUrl).setValue(url);
        (await this.inputLinkText).setValue(linkText);
        (await this.inputInfo).setValue(info);
        (await this.checkboxDivider).click();
        (await this.btnAddBlock).scrollIntoView();
        (await this.btnAddBlock).click();
        (await this.btnSaveLayout).waitForDisplayed();
        (await this.btnSaveLayout).scrollIntoView();
        (await this.btnSaveLayout).click();
        await browser.pause(3000);
    }

    public async createIntTextContact(title: string, headline: string, content: string, heading: string, text: string, intUrl: string, intLinkText: string, info: string) {
        await browser.pause(6000); //TODO: find a better wait criteria here. At the moment an explicit wait is the only thing that seems to work
        // switch to the iframe
        const iframe = await $('iframe[name="lbim-dialog-iframe"]');
        await iframe.waitForDisplayed();
        await browser.switchToFrame(iframe);
        (await this.inputTitle).setValue(title);
        (await this.inputHeadline).scrollIntoView();
        (await this.inputHeadline).setValue(headline);
        (await this.inputContent).setValue(content);
        (await this.dropdownToggle).scrollIntoView();
        (await this.dropdownToggle).click();
        (await this.textListItem).click();
        await browser.pause(2000);
        (await this.inputHeading).setValue(heading);
        (await this.inputText).setValue(text);
        (await this.inputUrl).scrollIntoView();
        (await this.inputUrl).setValue(intUrl);
        (await this.inputLinkText).setValue(intLinkText);
        (await this.inputInfo).setValue(info);
        (await this.checkboxDivider).click();
        (await this.btnAddBlock).scrollIntoView();
        (await this.btnAddBlock).click();
        (await this.btnSaveLayout).waitForDisplayed();
        (await this.btnSaveLayout).scrollIntoView();
        (await this.btnSaveLayout).click();
        await browser.pause(3000);
    }

    public async createPhoneContact(title: string, headline: string, content: string, heading: string, subTitle: string, text: string, phone: string, info: string) {
        await browser.pause(6000); //TODO: find a better wait criteria here. At the moment an explicit wait is the only thing that seems to work
        // switch to the iframe
        const iframe = await $('iframe[name="lbim-dialog-iframe"]');
        await iframe.waitForDisplayed();
        await browser.switchToFrame(iframe);
        (await this.inputTitle).setValue(title);
        (await this.inputHeadline).scrollIntoView();
        (await this.inputHeadline).setValue(headline);
        (await this.inputContent).setValue(content);
        (await this.dropdownToggle).scrollIntoView();
        (await this.dropdownToggle).click();
        (await this.phoneListItem).click();
        await browser.pause(2000);
        (await this.inputHeading).setValue(heading);
        (await this.inputSubTitle).setValue(subTitle);
        (await this.inputText).setValue(text);
        (await this.inputPhoneNumber).scrollIntoView();
        (await this.inputPhoneNumber).setValue(phone);
        (await this.checkboxDisplayAsLink).click();
        (await this.inputInfo).setValue(info);
        (await this.checkboxDivider).click();
        (await this.btnAddBlock).scrollIntoView();
        (await this.btnAddBlock).click();
        (await this.btnSaveLayout).waitForDisplayed();
        (await this.btnSaveLayout).scrollIntoView();
        (await this.btnSaveLayout).click();
        await browser.pause(3000);
    }

    public async createLocationContact(title: string, headline: string, content: string, heading: string, address: string, latitude: string, longitude: string, link: string) {
        await browser.pause(6000); //TODO: find a better wait criteria here. At the moment an explicit wait is the only thing that seems to work
        // switch to the iframe
        const iframe = await $('iframe[name="lbim-dialog-iframe"]');
        await iframe.waitForDisplayed();
        await browser.switchToFrame(iframe);
        (await this.inputTitle).setValue(title);
        (await this.inputHeadline).scrollIntoView();
        (await this.inputHeadline).setValue(headline);
        (await this.inputContent).setValue(content);
        (await this.dropdownToggle).scrollIntoView();
        (await this.dropdownToggle).click();
        (await this.locationListItem).click();
        await browser.pause(3000);
        (await this.inputHeading).setValue(heading);
        (await this.inputAddress).setValue(address);
        (await this.inputLatitude).scrollIntoView();
        (await this.inputLatitude).setValue(latitude);
        (await this.inputLongitude).setValue(longitude);
        (await this.inputLink).setValue(link);
        (await this.checkboxDivider).click();
        (await this.btnAddBlock).scrollIntoView();
        (await this.btnAddBlock).click();
        (await this.btnSaveLayout).waitForDisplayed();
        (await this.btnSaveLayout).scrollIntoView();
        (await this.btnSaveLayout).click();
        await browser.pause(3000);
    }

    public async createIntLocationContact(title: string, headline: string, content: string, heading: string, address: string, latitude: string, longitude: string, intLink: string) {
        await browser.pause(6000); //TODO: find a better wait criteria here. At the moment an explicit wait is the only thing that seems to work
        // switch to the iframe
        const iframe = await $('iframe[name="lbim-dialog-iframe"]');
        await iframe.waitForDisplayed();
        await browser.switchToFrame(iframe);
        (await this.inputTitle).setValue(title);
        (await this.inputHeadline).scrollIntoView();
        (await this.inputHeadline).setValue(headline);
        (await this.inputContent).setValue(content);
        (await this.dropdownToggle).scrollIntoView();
        (await this.dropdownToggle).click();
        (await this.locationListItem).click();
        await browser.pause(3000);
        (await this.inputHeading).setValue(heading);
        (await this.inputAddress).setValue(address);
        (await this.inputLatitude).scrollIntoView();
        (await this.inputLatitude).setValue(latitude);
        (await this.inputLongitude).setValue(longitude);
        (await this.inputLink).setValue(intLink);
        (await this.checkboxDivider).click();
        (await this.btnAddBlock).scrollIntoView();
        (await this.btnAddBlock).click();
        (await this.btnSaveLayout).waitForDisplayed();
        (await this.btnSaveLayout).scrollIntoView();
        (await this.btnSaveLayout).click();
        await browser.pause(3000);
    }

    public async createChatContact(title: string, headline: string, content: string, heading: string, url: string, cta: string, info: string) {
        await browser.pause(6000); //TODO: find a better wait criteria here. At the moment an explicit wait is the only thing that seems to work
        // switch to the iframe
        const iframe = await $('iframe[name="lbim-dialog-iframe"]');
        await iframe.waitForDisplayed();
        await browser.switchToFrame(iframe);
        (await this.inputTitle).setValue(title);
        (await this.inputHeadline).scrollIntoView();
        (await this.inputHeadline).setValue(headline);
        (await this.inputContent).setValue(content);
        (await this.dropdownToggle).scrollIntoView();
        (await this.dropdownToggle).click();
        (await this.chatListItem).click();
        await browser.pause(2000);
        (await this.inputHeading).setValue(heading);
        (await this.inputUrl).setValue(url);
        (await this.inputChatCTA).setValue(cta);
        (await this.inputInfo).scrollIntoView();
        (await this.inputInfo).setValue(info);
        (await this.checkboxDisplayAsLink).click();
        (await this.checkboxDivider).click();
        (await this.btnAddBlock).scrollIntoView();
        (await this.btnAddBlock).click();
        (await this.btnSaveLayout).waitForDisplayed();
        (await this.btnSaveLayout).scrollIntoView();
        (await this.btnSaveLayout).click();
        await browser.pause(3000);
    }

    public async createIntChatContact(title: string, headline: string, content: string, heading: string, intUrl: string, cta: string, info: string) {
        await browser.pause(6000); //TODO: find a better wait criteria here. At the moment an explicit wait is the only thing that seems to work
        // switch to the iframe
        const iframe = await $('iframe[name="lbim-dialog-iframe"]');
        await iframe.waitForDisplayed();
        await browser.switchToFrame(iframe);
        (await this.inputTitle).setValue(title);
        (await this.inputHeadline).scrollIntoView();
        (await this.inputHeadline).setValue(headline);
        (await this.inputContent).setValue(content);
        (await this.dropdownToggle).scrollIntoView();
        (await this.dropdownToggle).click();
        (await this.chatListItem).click();
        await browser.pause(2000);
        (await this.inputHeading).setValue(heading);
        (await this.inputUrl).setValue(intUrl);
        (await this.inputChatCTA).setValue(cta);
        (await this.inputInfo).scrollIntoView();
        (await this.inputInfo).setValue(info);
        (await this.checkboxDisplayAsLink).click();
        (await this.checkboxDivider).click();
        (await this.btnAddBlock).scrollIntoView();
        (await this.btnAddBlock).click();
        (await this.btnSaveLayout).waitForDisplayed();
        (await this.btnSaveLayout).scrollIntoView();
        (await this.btnSaveLayout).click();
        await browser.pause(3000);
    }

    public async createButtonContact(title: string, headline: string, content: string, heading: string, btnText: string, url: string, info: string) {
        await browser.pause(6000); //TODO: find a better wait criteria here. At the moment an explicit wait is the only thing that seems to work
        // switch to the iframe
        const iframe = await $('iframe[name="lbim-dialog-iframe"]');
        await iframe.waitForDisplayed();
        await browser.switchToFrame(iframe);
        (await this.inputTitle).setValue(title);
        (await this.inputHeadline).scrollIntoView();
        (await this.inputHeadline).setValue(headline);
        (await this.inputContent).setValue(content);
        (await this.dropdownToggle).scrollIntoView();
        (await this.dropdownToggle).click();
        (await this.buttonListItem).click();
        await browser.pause(2200);
        (await this.inputHeading).setValue(heading);
        (await this.inputButtonText).setValue(btnText);
        (await this.inputButtonUrl).scrollIntoView();
        (await this.inputButtonUrl).setValue(url);
        (await this.inputInfo).scrollIntoView();
        (await this.inputInfo).setValue(info);
        (await this.checkboxDivider).click();
        (await this.btnAddBlock).scrollIntoView();
        (await this.btnAddBlock).click();
        (await this.btnSaveLayout).waitForDisplayed();
        (await this.btnSaveLayout).scrollIntoView();
        (await this.btnSaveLayout).click();
        await browser.pause(3000);
    }

    public async createIntButtonContact(title: string, headline: string, content: string, heading: string, btnText: string, intUrl: string, info: string) {
        await browser.pause(6000); //TODO: find a better wait criteria here. At the moment an explicit wait is the only thing that seems to work
        // switch to the iframe
        const iframe = await $('iframe[name="lbim-dialog-iframe"]');
        await iframe.waitForDisplayed();
        await browser.switchToFrame(iframe);
        (await this.inputTitle).setValue(title);
        (await this.inputHeadline).scrollIntoView();
        (await this.inputHeadline).setValue(headline);
        (await this.inputContent).setValue(content);
        (await this.dropdownToggle).scrollIntoView();
        (await this.dropdownToggle).click();
        (await this.buttonListItem).click();
        await browser.pause(2200);
        (await this.inputHeading).setValue(heading);
        (await this.inputButtonText).setValue(btnText);
        (await this.inputButtonUrl).scrollIntoView();
        (await this.inputButtonUrl).setValue(intUrl);
        (await this.inputInfo).scrollIntoView();
        (await this.inputInfo).setValue(info);
        (await this.checkboxDivider).click();
        (await this.btnAddBlock).scrollIntoView();
        (await this.btnAddBlock).click();
        (await this.btnSaveLayout).waitForDisplayed();
        (await this.btnSaveLayout).scrollIntoView();
        (await this.btnSaveLayout).click();
        await browser.pause(3000);
    }

    public async createPersonContact(title: string, headline: string, content: string, heading: string, remoteFilePath: string, altText: string, name: string, info: string) {
        await browser.pause(6000); //TODO: find a better wait criteria here. At the moment an explicit wait is the only thing that seems to work
        // switch to the iframe
        const iframe = await $('iframe[name="lbim-dialog-iframe"]');
        await iframe.waitForDisplayed();
        await browser.switchToFrame(iframe);
        (await this.inputTitle).setValue(title);
        (await this.inputHeadline).scrollIntoView();
        (await this.inputHeadline).setValue(headline);
        (await this.inputContent).setValue(content);
        (await this.dropdownToggle).scrollIntoView();
        (await this.dropdownToggle).click();
        (await this.personListItem).click();
        await browser.pause(3000);
        (await this.inputHeading).setValue(heading);
        await browser.pause(3000);
        (await this.dropdownImage).click();
        // switch to the iframe
        await browser.switchToFrame(await this.entityIframe);
        (await this.btnBrowse).scrollIntoView();
        (await this.btnBrowse).setValue(remoteFilePath);
        await browser.pause(8000); //explicit waits seem to be necessary here
        (await this.inputAltText).waitForEnabled();
        (await this.inputAltText).setValue(altText);
        (await this.btnSaveImage).scrollIntoView();
        (await this.btnSaveImage).click();
        await browser.pause(4000); //explicit waits seem to be necessary here
        await browser.switchToParentFrame();
        await browser.pause(3000); //explicit waits seem to be necessary here

        (await this.inputName).setValue(name);
        (await this.inputInfo).scrollIntoView();
        (await this.inputInfo).setValue(info);
        (await this.checkboxDivider).click();
        (await this.btnAddBlock).scrollIntoView();
        (await this.btnAddBlock).click();
        (await this.btnSaveLayout).waitForDisplayed();
        (await this.btnSaveLayout).scrollIntoView();
        (await this.btnSaveLayout).click();
        await browser.pause(3000);
    }

    public async createMultiContact(title: string, headline: string, content: string, heading: string, address: string, latitude: string, longitude: string, link: string, email: string, subTitle: string, text: string, phone: string, url: string, cta: string, remoteFilePath: string, altText: string, name: string, info: string) {
        await browser.pause(6000); //TODO: find a better wait criteria here. At the moment an explicit wait is the only thing that seems to work
        // switch to the iframe
        const iframe = await $('iframe[name="lbim-dialog-iframe"]');
        await iframe.waitForDisplayed();
        await browser.switchToFrame(iframe);
        (await this.inputTitle).setValue(title);
        (await this.inputHeadline).scrollIntoView();
        (await this.inputHeadline).setValue(headline);
        (await this.inputContent).setValue(content);
        (await this.dropdownToggle).scrollIntoView();
        (await this.dropdownToggle).click();
        await browser.pause(2000);


        //location block
        (await this.locationListItem).click();
        await browser.pause(3000);
        (await this.inputHeading).setValue(heading);
        (await this.inputAddress).setValue(address);
        (await this.inputLatitude).scrollIntoView();
        (await this.inputLatitude).setValue(latitude);
        (await this.inputLongitude).setValue(longitude);
        (await this.inputLink).setValue(link);
        await browser.pause(3000);
        (await this.checkboxDivider).click();

        //email block
        (await this.dropdownToggle).scrollIntoView();
        (await this.dropdownToggle).click();
        (await this.emailListItem).click();
        await browser.pause(2000);
        (await this.inputHeading1).setValue(heading);
        (await this.inputEmailAddressM).setValue(email);
        (await this.checkboxDisplayAsLinkM).click();
        (await this.inputInfo1).scrollIntoView();
        (await this.inputInfo1).setValue(info);
        (await this.checkboxDivider1).click();
        await browser.pause(1500);

        //phone block
        (await this.dropdownToggle).scrollIntoView();
        (await this.dropdownToggle).click();
        (await this.phoneListItem).click();
        await browser.pause(2000);
        (await this.inputHeading2).setValue(heading);
        (await this.inputTitleM).setValue(subTitle);
        (await this.inputTextM).setValue(text);
        (await this.inputPhoneNumberM).scrollIntoView();
        (await this.inputPhoneNumberM).setValue(phone);
        await browser.pause(2000);
        (await this.checkboxPhoneLink).click();
        (await this.inputInfo2).setValue(info);
        (await this.checkboxDivider2).click();
        await browser.pause(1500);

        //chat block
        (await this.dropdownToggle).scrollIntoView();
        (await this.dropdownToggle).click();
        (await this.chatListItem).click();
        await browser.pause(2000);
        (await this.inputHeading3).setValue(heading);
        (await this.inputChatUrl).setValue(url);
        (await this.inputChatCta).setValue(cta);
        (await this.inputInfo3).scrollIntoView();
        (await this.inputInfo3).setValue(info);
        await browser.pause(2000);
        (await this.checkboxDisplayAsLink3).click();
        (await this.checkboxDivider3).click();
        await browser.pause(1500);

        //Person block
        (await this.dropdownToggle).scrollIntoView();
        (await this.dropdownToggle).click();
        (await this.personListItem).click();
        await browser.pause(3500);
        (await this.inputHeading4).setValue(heading);
        await browser.pause(3000);
        (await this.dropdownImage).click();
        // switch to the iframe
        await browser.switchToFrame(await this.entityIframe);
        (await this.btnBrowse).scrollIntoView();
        (await this.btnBrowse).setValue(remoteFilePath);
        await browser.pause(8000); //explicit waits seem to be necessary here
        (await this.inputAltText).waitForEnabled();
        (await this.inputAltText).setValue(altText);
        (await this.btnSaveImage).scrollIntoView();
        (await this.btnSaveImage).click();
        await browser.pause(4000); //explicit waits seem to be necessary here
        await browser.switchToParentFrame();
        await browser.pause(3000); //explicit waits seem to be necessary here
        (await this.inputNameM).setValue(name);
        (await this.inputInfo4).scrollIntoView();
        (await this.inputInfo4).setValue(info);
        (await this.checkboxDivider4).click();
        await browser.pause(2000);


        //complete form
        (await this.btnAddBlock).scrollIntoView();
        (await this.btnAddBlock).click();
        (await this.btnSaveLayout).waitForDisplayed();
        (await this.btnSaveLayout).scrollIntoView();
        (await this.btnSaveLayout).click();
        await browser.pause(3000);
    }

    public async navToStyling() {
        await browser.pause(6000); //TODO: find a better wait criteria here. At the moment an explicit wait is the only thing that seems to work
        // switch to the iframe
        const iframe = await $('iframe[name="lbim-dialog-iframe"]');
        await iframe.waitForDisplayed();
        await browser.switchToFrame(iframe);
        await browser.pause(3000);
        (await this.dropdownStyling).scrollIntoView();
        (await this.dropdownStyling).click();
        await browser.pause(3000);

    }
}

export default new ContactListBlockPage();