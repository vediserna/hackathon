import { ChangeDetectorRef, Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { OnymosServices } from '../../services/onymos-services';

import { DigiMeDetails } from '../digime-details/digime-details';
import { Login } from '../login/login';

declare var OnymosAccess:any;
declare var OnymosDigiMe:any;

@Component({
	selector: 'page-digime',
	templateUrl: 'digime.html',
	providers: [OnymosServices]
})
export class DigiMe {

	errorMessage: string = '';

	digiMeConnectObj = {
		envType: 'prd',
		serviceGroup: {
			financial: true,
			health: true,
			social: true
		}
	};

	fileNameArray: Array<any> = [];

	displayGetListSpec: boolean = false;
	getListQueryInProgress: boolean = false;
	getListQueryComplete: boolean = false;

	selectedServiceGroup: string = '';
	messageContent : string = '';
	firstMessage : boolean = true;
	messages : any[] = [];
	sensei : string = "Sensei";
	username : string = "";
	authDataObject: any;
	senseiTalking : boolean = true;

	constructor (	public navCtrl: NavController,
								public onymosServices: OnymosServices,

								private cdRef: ChangeDetectorRef) {
									this.authDataObject = OnymosAccess.getAuth();
									this.username = this.authDataObject.userName;

	} /* end constructor */

	ionViewCanEnter(): boolean {
		if (OnymosAccess.getAuth()) {
			return true;
		}
		else {
			return false;
		}

	} /* end ionViewCanEnter */

	toggleGetListSpecDisplay() {
		this.displayGetListSpec = !this.displayGetListSpec;

	} // end function toggleGetListSpecDisplay

	requestConsentAccess (serviceGroup) {
		this.digiMeConnectObj.serviceGroup = {
			financial: false,
			health: false,
			social: false
		};

		this.errorMessage = '';

		this.getListQueryInProgress = true;
		this.getListQueryComplete = false;
		this.fileNameArray = [];

		switch (serviceGroup.toLowerCase()) {
			case 'financial':
				this.digiMeConnectObj.serviceGroup.financial = true;
				this.selectedServiceGroup = 'financial';
				break;

			case 'health':
				this.digiMeConnectObj.serviceGroup.health = true;
				this.selectedServiceGroup = 'health';
				break;

			case 'social':
				this.digiMeConnectObj.serviceGroup.social = true;
				this.selectedServiceGroup = 'social';
				break;
		}; // end switch serviceGroup.toLowerCase()

		let that = this;

		OnymosDigiMe.getList(this.digiMeConnectObj,
			function getListSuccess (fileRecords) {
				that.fileNameArray = fileRecords;

				that.getListQueryInProgress = false;
				that.getListQueryComplete = true;

				that.cdRef.detectChanges();

			},
			function getListFailure (getListError) {
				console.log('ERROR : getList failed with error - ' + getListError);
				that.errorMessage = 'Failed retrieving Data List.';

				that.getListQueryInProgress = false;
				that.getListQueryComplete = true;

				that.cdRef.detectChanges();
			});

	} // end function requestConsentAccess

	getFileDetails (fileName) {

		this.navCtrl.push(DigiMeDetails, {
			fileName: fileName
		})
		.catch(() => {

			// Page requires authentication, re-direct to Login page
			this.navCtrl.setRoot(Login, {routeToPage: 'DigiMe'});

		});

	} // end function getFileDetails

	getFileMetaData (fileName) {
		var yearMonthString = fileName.split('_')[5].replace('D', '');

		var year = yearMonthString.substring(0, 4);
		var month = yearMonthString.substring(4);

		switch (month) {
			case '01':
				return 'Jan. ' + year;

			case '02':
				return 'Feb. ' + year;

			case '03':
				return 'Mar. ' + year;

			case '04':
				return 'Apr. ' + year;

			case '05':
				return 'May ' + year;

			case '06':
				return 'Jun. ' + year;

			case '07':
				return 'Jul. ' + year;

			case '08':
				return 'Aug. ' + year;

			case '09':
				return 'Sep. ' + year;

			case '10':
				return 'Oct. ' + year;

			case '11':
				return 'Nov. ' + year;

			case '12':
				return 'Dec. ' + year;

		} // end switch month

	} // end function getFileMetaData

	sendMessage() {
		if(this.firstMessage) {
			this.messages.push({
				name : this.username,
				body : this.messageContent });
			let message = "";
			message = "Greetings friend," +
			"What kind of services would you like me to provide? \n"
			+ "I can give you informations about health, finance and social media" +
			"\nI understand little at the moment, please type in 'health', 'finance' or 'social media'";

			this.firstMessage = false;
			this.messages.push({
				name : "Sensei",
				body : message });
			console.log("I am always here");
			console.log(this.firstMessage);
		}
		else {
			var currUser = "";
			if(this.senseiTalking) {
				currUser = this.sensei;
			} else {
				currUser = this.username;
			}

			this.messages.push({
				name : currUser,
				body : this.messageContent });
			
				this.senseiTalking = !this.senseiTalking;
				var currUser = "";
				if(this.senseiTalking) {
					currUser = this.sensei;
				} else {
					currUser = this.username;
				}
			

			this.analyzeMessage();

			this.messages.push({
				name : currUser,
				body : this.messageContent });

		}
		this.messageContent = "";
		this.senseiTalking = !this.senseiTalking;
	}

	analyzeMessage() {
		switch(this.messageContent.toLowerCase()) {
			case 'health' :
				this.messageContent = "According to your data, you have received a prescription for Ibuprofen recently";
				break;
			case 'finance' :
				this.messageContent = "If you want me to be your Wolf of Wall-Street, I need at least SOME money to manage.. You are broke!";
				break;
			case 'social media' :
				this.messageContent = "Does your boss support all this facebook use? You spend on 8hours on average on social media per day";
				break;
			case 'bye' :
				this.messageContent = "Goodbye my friend, may you find inner peace.";
				break;
			default:
				this.messageContent = "I beg you pardon?";
		}
	}

} /* end export class DigiMe */
