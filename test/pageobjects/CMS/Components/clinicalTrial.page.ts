import Page from '../Login/page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ClinicalTrialBlockPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get btnSaveLayout () {
        return $('#edit-submit');
    }

    public get inputMainTitle () {
        return $('#edit-settings-label');
    }

    public get btnAddCardClinicalTrial () {
        return $('div[id^="edit-settings-block-form-field-content-add-more"]');
    }

    //content area start
    public get inputTitle () {
        return $('#edit-settings-block-form-field-content-0-subform-field-title-0-value');
    }

    public get btnAddFirstTag () {
        return $('#edit-settings-block-form-field-content-0-subform-field-tags-add-more');
    }

    public get btnAddSubsequentTag () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-tags-add-more"]')
    }

    public get inputTag1 () {
        return $('#edit-settings-block-form-field-content-0-subform-field-tags-0-value');
    }

    public get inputTag2 () {
        return $('input[id^="edit-settings-block-form-field-content-0-subform-field-tags-1-value"]');
    }

    public get inputTag3 () {
        return $('input[id^="edit-settings-block-form-field-content-0-subform-field-tags-2-value"]');
    }

    public get inputLink () {
        return $('#edit-settings-block-form-field-content-0-subform-field-link-0-uri');
    }

    public get inputDate () {
        return $('#edit-settings-block-form-field-content-0-subform-field-start-date-0-value-date');
    }

    public get btnAddCondition () {
        return $('#edit-settings-block-form-field-content-0-subform-field-conditions-add-more');
    }

    public get inputConditions1 () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-conditions-0-value"]');
    }

    public get inputConditions2 () {
        return $('input[data-drupal-selector="edit-settings-block-form-field-content-0-subform-field-conditions-1-value"]');
    }

    public get dropdownStyling () {
        return $('#edit-settings-block-form-field-content-widget-0-subform-group-styling');
    }

    public get checkboxAddBorder () {
        return $('#edit-settings-block-form-field-content-0-subform-field-border-value');
    }

    public get checkboxAddShadow () {
        return $('#edit-settings-block-form-field-content-0-subform-field-shadow-value');
    }

    //content area end


    public get btnAddBlock () {
        return $('#edit-actions-submit');
    }

    public get configBlock () {
        return $('.ui-draggable-handle');
    }

    public get successMsg () {
        return $('.mf-alert__container--success');
    }

    public get clinicalCardElement () {
        return $('.mf-card-clinical-trial');
    }

    public get internalUrl () {
        return $('=Residency Programs')
    }


    /**
     * Helper methods to create Card Clinical Trial Component
     */

    public async createCardClinicalTrial(mainTitle: string, title: string, tag1: string, tag2: string, tag3: string, link: string, strDate: string, condition1: string, condition2: string) {
        await browser.pause(8000); //TODO: find a better wait criteria here. At the moment an explicit wait is the only thing that seems to work
        // switch to the iframe
        const iframe = await $('iframe[name="lbim-dialog-iframe"]');
        await iframe.waitForDisplayed();
        await browser.switchToFrame(iframe);
        (await this.inputMainTitle).setValue(mainTitle);
        await browser.pause(3000); //explicit wait seems necessary here
        (await this.inputTitle).scrollIntoView();
        (await this.inputTitle).setValue(title);
        await browser.pause(3000); //explicit wait seems necessary here
        (await this.inputTag1).scrollIntoView();
        (await this.inputTag1).waitForClickable();
        (await this.inputTag1).setValue(tag1);
        await browser.pause(3000); //explicit wait seems necessary here
        (await this.btnAddFirstTag).click();
        (await this.inputTag2).scrollIntoView();
        (await this.inputTag2).setValue(tag2);
        await browser.pause(3000); //explicit wait seems necessary here
        (await this.btnAddSubsequentTag).click();
        (await this.inputTag3).scrollIntoView();
        (await this.inputTag3).setValue(tag3);
        await browser.pause(3000); //explicit wait seems necessary here
        (await this.inputLink).scrollIntoView();
        (await this.inputLink).setValue(link);
        (await this.internalUrl).click();
        await browser.pause(3000); //explicit wait seems necessary here
        (await this.inputDate).setValue(strDate);
        await browser.pause(3000); //explicit wait seems necessary here
        (await this.inputConditions1).scrollIntoView();
        (await this.inputConditions1).waitForClickable();
        (await this.inputConditions1).setValue(condition1);
        await browser.pause(3000); //explicit wait seems necessary here
        (await this.btnAddCondition).click();
        (await this.inputConditions1).scrollIntoView();
        (await this.inputConditions2).waitForClickable();
        (await this.inputConditions2).setValue(condition2);
        await browser.pause(3000); //explicit wait seems necessary here
        (await this.dropdownStyling).scrollIntoView();
        (await this.dropdownStyling).click();
        await browser.pause(3000); //explicit wait seems necessary here
        (await this.checkboxAddBorder).scrollIntoView();
        (await this.checkboxAddBorder).waitForClickable();
        (await this.checkboxAddBorder).click();
        (await this.checkboxAddShadow).click();
        (await this.btnAddBlock).scrollIntoView();
        (await this.btnAddBlock).click();
        await browser.pause(3000); //explicit wait seems necessary here
        (await this.btnSaveLayout).waitForDisplayed();
        (await this.btnSaveLayout).scrollIntoView();
        (await this.btnSaveLayout).click();
        await browser.pause(3000);
    }

    public async createCardClinicalTrialInternalUrl(mainTitle: string, title: string, tag1: string, tag2: string, tag3: string, strDate: string, condition1: string, condition2: string) {
        await browser.pause(8000); //TODO: find a better wait criteria here. At the moment an explicit wait is the only thing that seems to work
        // switch to the iframe
        const iframe = await $('iframe[name="lbim-dialog-iframe"]');
        await iframe.waitForDisplayed();
        await browser.switchToFrame(iframe);
        (await this.inputMainTitle).setValue(mainTitle);
        await browser.pause(3000); //explicit wait seems necessary here
        (await this.inputTitle).scrollIntoView();
        (await this.inputTitle).setValue(title);
        await browser.pause(3000); //explicit wait seems necessary here
        (await this.inputTag1).scrollIntoView();
        (await this.inputTag1).waitForClickable();
        (await this.inputTag1).setValue(tag1);
        await browser.pause(3000); //explicit wait seems necessary here
        (await this.btnAddFirstTag).click();
        (await this.inputTag2).scrollIntoView();
        (await this.inputTag2).setValue(tag2);
        await browser.pause(3000); //explicit wait seems necessary here
        (await this.btnAddSubsequentTag).click();
        (await this.inputTag3).scrollIntoView();
        (await this.inputTag3).setValue(tag3);
        await browser.pause(3000); //explicit wait seems necessary here
        (await this.inputLink).scrollIntoView();
        (await this.inputLink).setValue('Residency Programs');
        (await this.internalUrl).click();
        await browser.pause(3000); //explicit wait seems necessary here
        (await this.inputDate).setValue(strDate);
        await browser.pause(3000); //explicit wait seems necessary here
        (await this.inputConditions1).scrollIntoView();
        (await this.inputConditions1).waitForClickable();
        (await this.inputConditions1).setValue(condition1);
        await browser.pause(3000); //explicit wait seems necessary here
        (await this.btnAddCondition).click();
        (await this.inputConditions1).scrollIntoView();
        (await this.inputConditions2).waitForClickable();
        (await this.inputConditions2).setValue(condition2);
        await browser.pause(3000); //explicit wait seems necessary here
        (await this.dropdownStyling).scrollIntoView();
        (await this.dropdownStyling).click();
        await browser.pause(3000); //explicit wait seems necessary here
        (await this.checkboxAddBorder).scrollIntoView();
        (await this.checkboxAddBorder).waitForClickable();
        (await this.checkboxAddBorder).click();
        (await this.checkboxAddShadow).click();
        (await this.btnAddBlock).scrollIntoView();
        (await this.btnAddBlock).click();
        await browser.pause(3000); //explicit wait seems necessary here
        (await this.btnSaveLayout).waitForDisplayed();
        (await this.btnSaveLayout).scrollIntoView();
        (await this.btnSaveLayout).click();
        await browser.pause(3000);
    }
   
}

export default new ClinicalTrialBlockPage();