import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Events } from 'ionic-angular';
import { Home } from '../pages/home/home';
import { Chat } from '../pages/chat/chat';
export var MyApp = (function () {
    function MyApp(events, platform, cdRef) {
        this.events = events;
        this.platform = platform;
        this.cdRef = cdRef;
        this.rootPage = Home;
        this.initializeApp();
        this.pages = [
            { title: 'Home', component: Home },
            { title: 'Chat', component: Chat },
        ];
        this.authenticated = false;
    } /* end constructor */
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.events.subscribe('user:login', function (time) {
                _this.authenticated = true;
                _this.cdRef.detectChanges();
            });
            _this.events.subscribe('user:logout', function (time) {
                _this.authenticated = false;
                _this.cdRef.detectChanges();
                console.log('app.component.ts : user:logout event Switching to Home page.');
                _this.nav.setRoot(Home);
            });
            _this.initializeOnymosComponents();
        });
    }; /* end function initializeApp */
    MyApp.prototype.initializeOnymosComponents = function () {
        var onymosConnectObj = {
            customerId: 'O1000002388',
            onymosAuthToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MDk0ODc5OTksInYiOjAsImQiOnsidWlkIjoiTzEwMDAwMDIzODgifSwiaWF0IjoxNTA3MzgxMTg2fQ.EmdKnzEZvcaVZ3Zkus2aady7RXxQRonqDywzs3VH0rI',
            envType: 'PRD'
        };
        var that = this;
        var numberOfOnymosComponentsInitialized = 0;
        // Initialize Access Component
        OnymosAccess.initialize(onymosConnectObj, function onymosInitializeSuccess(status) {
            console.log('app.component.ts : OnymosAccess.initialize status - ' + status);
            numberOfOnymosComponentsInitialized++;
            initializeNonAccessComponents();
        }, function onymosInitializeFailure(error) {
            console.log('app.component.ts : OnymosAccess.initialize error - ' + error);
        }); // end OnymosAccess.initialize
        // end Initialize Access Component
        function initializeNonAccessComponents() {
            // Initialize Chat Component
            OnymosChat.initialize(onymosConnectObj, function onymosInitializeSuccess(status) {
                console.log('app.component.ts : OnymosChat.initialize status - ' + status);
                numberOfOnymosComponentsInitialized++;
                if (numberOfOnymosComponentsInitialized === 5) {
                    that.publishAuthenticationState();
                    StatusBar.styleDefault();
                    Splashscreen.hide();
                }
            }, function onymosInitializeFailure(error) {
                console.log('app.component.ts : OnymosChat.initialize error - ' + error);
            }); // end OnymosChat.initialize
            // end Initialize Chat Component
            // Initialize Contacts Component
            OnymosContacts.initialize(onymosConnectObj, function onymosInitializeSuccess(status) {
                console.log('app.component.ts : OnymosContacts.initialize status - ' + status);
                numberOfOnymosComponentsInitialized++;
                if (numberOfOnymosComponentsInitialized === 5) {
                    that.publishAuthenticationState();
                    StatusBar.styleDefault();
                    Splashscreen.hide();
                }
            }, function onymosInitializeFailure(error) {
                console.log('app.component.ts : OnymosContacts.initialize error - ' + error);
            }); // end OnymosContacts.initialize
            // end Initialize Contacts Component
            // Initialize Media Component
            OnymosMedia.initialize(onymosConnectObj, function onymosInitializeSuccess(status) {
                console.log('app.component.ts : OnymosMedia.initialize status - ' + status);
                numberOfOnymosComponentsInitialized++;
                if (numberOfOnymosComponentsInitialized === 5) {
                    that.publishAuthenticationState();
                    StatusBar.styleDefault();
                    Splashscreen.hide();
                }
            }, function onymosInitializeFailure(error) {
                console.log('app.component.ts : OnymosMedia.initialize error - ' + error);
            }); // end OnymosMedia.initialize
            // end Initialize Media Component
            // Initialize Util Component
            OnymosUtil.initialize(onymosConnectObj, function onymosInitializeSuccess(status) {
                console.log('app.component.ts : OnymosUtil.initialize status - ' + status);
                numberOfOnymosComponentsInitialized++;
                if (numberOfOnymosComponentsInitialized === 5) {
                    that.publishAuthenticationState();
                    StatusBar.styleDefault();
                    Splashscreen.hide();
                }
            }, function onymosInitializeFailure(error) {
                console.log('app.component.ts : OnymosUtil.initialize error - ' + error);
            }); // end OnymosUtil.initialize
            // end Initialize Util Component
        } // end initializeNonAccessComponents
    }; // end function initializeOnymosComponents
    /*navigateTo (page) {
        this.nav.setRoot(page.component)
            .catch(() => {

                // Page requires authentication, re-direct to Login page
                this.nav.setRoot(Login, {routeToPage: page.title});

            });

    } // end function navigateTo
    */
    MyApp.prototype.publishAuthenticationState = function () {
        if (OnymosAccess.getAuth()) {
            console.log('User logged in.');
            this.events.publish('user:login', Date.now());
        }
        else {
            console.log('User not logged in.');
            this.events.publish('user:logout', Date.now());
        }
    }; // end function publishAuthenticatedEvent
    MyApp.prototype.socialLogin = function () {
        this.nav.setRoot(Home);
    }; // end function socialLogin
    MyApp.prototype.socialLogout = function () {
        var that = this;
        OnymosAccess.logout(function logoutSuccess(statusMessage) {
            console.log('app.component.ts : onymosAccessLogout - Success');
            that.events.publish('user:logout', Date.now());
        }, function logoutFailure(error) {
            console.log('app.component.ts : onymosAccessLogout error - ' + error);
        });
    }; // end function socialLogout
    MyApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'app.html'
                },] },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = [
        { type: Events, },
        { type: Platform, },
        { type: ChangeDetectorRef, },
    ];
    MyApp.propDecorators = {
        'nav': [{ type: ViewChild, args: [Nav,] },],
    };
    return MyApp;
}()); /* end class MyApp */
//# sourceMappingURL=app.component.js.map