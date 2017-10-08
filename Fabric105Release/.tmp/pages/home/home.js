import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { DigiMe } from '../digime/digime';
export var Home = (function () {
    function Home(navCtrl, events) {
        this.navCtrl = navCtrl;
        this.events = events;
    }
    Home.prototype.socialLogin = function (authProvider) {
        var accessObj = {
            authProvider: authProvider
        };
        var navCtrl = this.navCtrl;
        var routeToPage = this.routeToPage || '';
        var events = this.events;
        OnymosAccess.login(accessObj, function onymosAccessLoginSuccess(data) {
            console.log('home.ts : onymosAccessLogin - Success');
            var authDataObject = OnymosAccess.getAuth();
            if (authDataObject) {
                // Publish User Login event
                events.publish('user:login', Date.now());
                switch (routeToPage.toLowerCase()) {
                    /*case 'account':
                        navCtrl.setRoot(Account);
                        break;*/
                    case 'chat':
                        navCtrl.setRoot(DigiMe);
                        break;
                    /*case 'digime':
                        navCtrl.setRoot(DigiMe);
                        break;
                    */
                    /*case 'invite':
                        navCtrl.setRoot(Invite);
                        break;
                    */
                    default:
                        navCtrl.setRoot(DigiMe);
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
    Home.decorators = [
        { type: Component, args: [{
                    selector: 'page-home',
                    templateUrl: 'home.html'
                },] },
    ];
    /** @nocollapse */
    Home.ctorParameters = [
        { type: NavController, },
        { type: Events, },
    ];
    return Home;
}());
//# sourceMappingURL=home.js.map