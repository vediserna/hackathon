import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular';

//import { Account } from '../account/account';
//import { Chat } from '../chat/chat';
import { DigiMe } from '../digime/digime';
//import { Invite } from '../invite/invite';

declare var OnymosAccess:any;

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class Home {
	routeToPage: any;
	
	constructor (public navCtrl: NavController, public events: Events) {
		
	}

	socialLogin(authProvider) {
		let accessObj = { 
			authProvider : authProvider
		};

		let navCtrl = this.navCtrl;
		let routeToPage = this.routeToPage || '';
		let events = this.events;

		OnymosAccess.login(accessObj,
			function onymosAccessLoginSuccess (data) {
				console.log('home.ts : onymosAccessLogin - Success');

				let authDataObject = OnymosAccess.getAuth();

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

			}, /* end function onymosAccessLoginSuccess */
			function onymosAccessLoginFailure (error) {
				console.log('login.ts : onymosAccessLogin error - ' + error);
				return;

			}); /* end function onymosAccessLoginFailure */

	} /* end function socialLogin */

}