import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { Account } from '../account/account';
import { Chat } from '../chat/chat';
import { DigiMe } from '../digime/digime';
import { Invite } from '../invite/invite';
export var Login = (function () {
    function Login(events, navCtrl, navParams) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.routeToPage = navParams.get('routeToPage') || '';
        if (OnymosAccess.getAuth()) {
            events.publish('user:login', Date.now());
            switch (this.routeToPage.toLowerCase()) {
                case 'account':
                    this.navCtrl.setRoot(Account);
                    break;
                case 'chat':
                    this.navCtrl.setRoot(Chat);
                    break;
                case 'digime':
                    this.navCtrl.setRoot(DigiMe);
                    break;
                case 'invite':
                    this.navCtrl.setRoot(Invite);
                    break;
                default:
                    this.navCtrl.setRoot(Chat);
            } /* end switch this.routeToPage */
        } /* end if OnymosAccess.getAuth() */
        else {
            console.log('Not Logged in. Displaying Login page.');
        }
    } /* end constructor */
    Login.prototype.socialLogin = function (authProvider) {
        var accessObj = {
            authProvider: authProvider
        };
        var navCtrl = this.navCtrl;
        var routeToPage = this.routeToPage || '';
        var events = this.events;
        OnymosAccess.login(accessObj, function onymosAccessLoginSuccess(data) {
            console.log('login.ts : onymosAccessLogin - Success');
            var authDataObject = OnymosAccess.getAuth();
            if (authDataObject) {
                // Publish User Login event
                events.publish('user:login', Date.now());
                switch (routeToPage.toLowerCase()) {
                    case 'account':
                        navCtrl.setRoot(Account);
                        break;
                    case 'chat':
                        navCtrl.setRoot(Chat);
                        break;
                    case 'digime':
                        navCtrl.setRoot(DigiMe);
                        break;
                    case 'invite':
                        navCtrl.setRoot(Invite);
                        break;
                    default:
                        navCtrl.setRoot(Chat);
                } /* end switch this.routeToPage */
                return;
            } /* end if authDataObject */
            else {
                console.log('login.ts : onymosAccessGetAuth - Returned null.');
            } /* end else authDataObject */
        }, /* end function onymosAccessLoginSuccess */ function onymosAccessLoginFailure(error) {
            console.log('login.ts : onymosAccessLogin error - ' + error);
            return;
        }); /* end function onymosAccessLoginFailure */
    }; /* end function socialLogin */
    Login.decorators = [
        { type: Component, args: [{
                    selector: 'page-login',
                    templateUrl: 'login.html'
                },] },
    ];
    /** @nocollapse */
    Login.ctorParameters = [
        { type: Events, },
        { type: NavController, },
        { type: NavParams, },
    ];
    return Login;
}()); /* end export class Login */
//# sourceMappingURL=login.js.map