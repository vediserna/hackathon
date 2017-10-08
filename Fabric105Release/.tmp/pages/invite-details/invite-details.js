import { Component, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Content, NavController, NavParams, Platform } from 'ionic-angular';
export var InviteDetails = (function () {
    function InviteDetails(navCtrl, navParams, platform, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.errorMessage = '';
        this.authDataObject = OnymosAccess.getAuth();
        this.invitee = navParams.data.contact;
        this.platform = platform;
    } /* end constructor */
    InviteDetails.prototype.ionViewCanEnter = function () {
        if (OnymosAccess.getAuth()) {
            return true;
        }
        else {
            return false;
        }
    }; /* end ionViewCanEnter */
    InviteDetails.prototype.getSMSHrefForPhoneNumber = function (phoneNumber) {
        var formattedPhoneNumber = phoneNumber.replace(/[\(\)\+\-\.\,\_\s]*/g, '');
        var stringForSMSHref = '';
        if (this.platform.is('ios')) {
            stringForSMSHref = 'sms:' + formattedPhoneNumber +
                '&body=Check out ' + 'Your Appname' + '.%0D%0A%0D%0A' +
                'iOS link: https://itunes.apple.com/us/app/yourappname/id123456789 %0D%0A%0D%0A' +
                '(or)%0D%0A%0D%0A' +
                'Android link: https://play.google.com/store/apps/details?id=com.yourappname';
        }
        else {
            stringForSMSHref = 'sms:' + formattedPhoneNumber +
                '?body=Check out ' + 'Your Appname' + '.%0D%0A%0D%0A' +
                'iOS link: https://itunes.apple.com/us/app/yourappname/id123456789 %0D%0A%0D%0A' +
                '(or)%0D%0A%0D%0A' +
                'Android link: https://play.google.com/store/apps/details?id=com.yourappname';
        }
        return this.sanitizer.bypassSecurityTrustUrl(stringForSMSHref);
    }; /* end function getSMSHrefForPhoneNumber */
    InviteDetails.prototype.getEmailHrefForEmail = function (email) {
        var stringForEmailHref = 'mailto:' + email +
            '?subject=Check out ' + 'Your Appname' + '&body=Hi,%0D%0A Check out this ' + 'Your Appname ' + ' App.%0D%0A%0D%0A' +
            'iOS link: https://itunes.apple.com/us/app/yourappname/id123456789 %0D%0A%0D%0A' +
            'Android link: https://play.google.com/store/apps/details?id=com.yourappname %0D%0A%0D%0A%0D%0A' +
            this.authDataObject.userName;
        return this.sanitizer.bypassSecurityTrustUrl(stringForEmailHref);
    }; /* end function getEmailHrefForEmail */
    InviteDetails.decorators = [
        { type: Component, args: [{
                    selector: 'page-invite-details',
                    templateUrl: 'invite-details.html'
                },] },
    ];
    /** @nocollapse */
    InviteDetails.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: Platform, },
        { type: DomSanitizer, },
    ];
    InviteDetails.propDecorators = {
        'content': [{ type: ViewChild, args: [Content,] },],
    };
    return InviteDetails;
}()); /* end export class InviteDetails */
//# sourceMappingURL=invite-details.js.map