import Page from '@justeat/f-wdio-utils';
import {
    COUNTRY_LINK,
    IS_NAV_IN_VIEW,
    MOBILE_NAVIGATION_BAR,
    NAVIGATION
} from './f-header.selectors';


class Header extends Page {
    constructor () {
        super('organism', 'header-component');
    }

    navigation = {
        offersIcon: {
            get link () { return $(NAVIGATION.offersIcon.link); }
        },
        offersLink: {
            get link () { return $(NAVIGATION.offersLink.link); }
        },
        help: {
            get link () { return $(NAVIGATION.help.link); }
        },
        delivery: {
            get link () { return $(NAVIGATION.delivery.link); }
        },
        userAccount: {
            get link () { return $(NAVIGATION.userAccount.link); }
        },
        countrySelector: {
            get link () { return $(NAVIGATION.countrySelector.link); },
            get currentIcon () { return $(NAVIGATION.countrySelector.currentIcon); },
            get countries () { return $$(NAVIGATION.countrySelector.countryList); }
        }
    };

    async isCountryLinkDisplayed (country) {
        const countryLink = await $(`[${COUNTRY_LINK}${country}"]`);

        return countryLink.isDisplayed();
    }

    async isNavigationItemClickable (item) {
        return this.navigation[item].link.isClickable();
    }

    async openCountrySelector () {
        const countrySelectorLink = await this.navigation.countrySelector.link;

        await countrySelectorLink.click();
    }

    async clickCountryListItem (country) {
        const countryLink = await $(`[${COUNTRY_LINK}${country}"]`);

        await countryLink.click();
    }

    async moveToNavigationLink (item) {
        const navigationItem = await this.navigation[item];
        const navigationItemLink = await navigationItem.link;

        await navigationItemLink.moveTo();
    }

    async openMobileNavigationBar () {
        const mobileNavigationBar = await $(MOBILE_NAVIGATION_BAR);

        await mobileNavigationBar.click();
        const inNavView = await $(IS_NAV_IN_VIEW);

        await inNavView.waitForExist();
    }

    async hoverOverLink (item) {
        const navItem = await this.navigation[item];
        const navItemLink = await navItem.link;

        await navItemLink.moveTo();
    }

    async pressDownTabKey (times = 1) {
        Array.from({ length: times }, () => browser.keys('\uE004'));
    }
}

export default new Header();
