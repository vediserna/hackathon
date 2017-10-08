import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnymosServices } from '../../services/onymos-services';
import { Home } from '../home/home';
export var Account = (function () {
    function Account(navCtrl, onymosServices) {
        this.navCtrl = navCtrl;
        this.onymosServices = onymosServices;
        this.errorMessage = '';
        this.userName = '';
        this.userPhoto = '';
        this.authProvider = '';
        this.authDataObject = OnymosAccess.getAuth();
        if (this.authDataObject) {
            this.userName = this.authDataObject.userName;
            this.userPhoto = this.authDataObject.userPhoto;
            this.authProvider = this.authDataObject.authProvider;
        } /* end if this.authDataObject */
    } /* end constructor */
    Account.prototype.ionViewCanEnter = function () {
        if (OnymosAccess.getAuth()) {
            return true;
        }
        else {
            return false;
        }
    }; /* end ionViewCanEnter */
    Account.prototype.socialLogout = function () {
        var that = this;
        OnymosAccess.logout(function logoutSuccess(message) {
            that.errorMessage = '';
            that.navCtrl.setRoot(Home);
            return;
        }, // end function logoutSuccess
        function logoutFailure(error) {
            console.log('ERROR : account.ts : onymosAccessLogout failed with error - ' + error);
            that.errorMessage = 'Failed in Logout.';
            return;
        }); // end function logoutFailure
    }; /* end function socialLogout */
    Account.decorators = [
        { type: Component, args: [{
                    selector: 'page-account',
                    templateUrl: 'account.html',
                    providers: [OnymosServices]
                },] },
    ];
    /** @nocollapse */
    Account.ctorParameters = [
        { type: NavController, },
        { type: OnymosServices, },
    ];
    return Account;
}()); /* end export class Account */
//# sourceMappingURL=account.js.map