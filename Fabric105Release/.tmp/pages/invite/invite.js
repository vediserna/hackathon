import { ChangeDetectorRef, Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Login } from '../login/login';
import { InviteDetails } from '../invite-details/invite-details';
export var Invite = (function () {
    function Invite(navCtrl, cdRef) {
        this.navCtrl = navCtrl;
        this.cdRef = cdRef;
        this.errorMessage = '';
        this.contacts = [];
        this.loadingContacts = false;
        this.authDataObject = OnymosAccess.getAuth();
        if (this.authDataObject) {
            this.updateContactsList(null);
        }
    } /* end constructor */
    Invite.prototype.ionViewCanEnter = function () {
        if (OnymosAccess.getAuth()) {
            return true;
        }
        else {
            return false;
        }
    }; /* end ionViewCanEnter */
    Invite.prototype.updateContactsList = function (searchEvent) {
        var searchFilter = '';
        if (searchEvent)
            searchFilter = searchEvent.target.value;
        var searchOptions = {
            filter: searchFilter,
            hasPhoneNumber: false,
            searchField: OnymosContactsConstants.SearchField.givenName,
            displayFields: [
                OnymosContactsConstants.DisplayFields.name,
                OnymosContactsConstants.DisplayFields.nickname,
                OnymosContactsConstants.DisplayFields.phoneNumbers,
                OnymosContactsConstants.DisplayFields.emails,
                OnymosContactsConstants.DisplayFields.addresses,
                OnymosContactsConstants.DisplayFields.photos,
                OnymosContactsConstants.DisplayFields.note
            ],
            numberOfRecords: 25
        };
        this.contacts = [];
        this.loadingContacts = true;
        var that = this;
        OnymosContacts.getList('0', function (contactsList) {
            that.contacts = contactsList;
            that.loadingContacts = false;
            that.cdRef.detectChanges();
        }, function (error) {
            console.log('invite.ts : onymosContactsGetList error - ' + JSON.stringify(error));
            that.errorMessage = 'ERROR : Failed searching for Contacts.';
            that.loadingContacts = false;
            return;
        }, searchOptions); /* end OnymosContacts.getList */
    }; /* end updateContactsList */
    Invite.prototype.loadMoreContacts = function (loadMoreEvent) {
        this.loadingContacts = true;
        var that = this;
        OnymosContacts.loadNextSet('0', function (nextSet) {
            if (!nextSet || !nextSet.length || nextSet.length < 1) {
                that.loadingContacts = false;
                loadMoreEvent.complete();
                that.cdRef.detectChanges();
            }
            else {
                that.contacts.push.apply(that.contacts, nextSet);
                that.loadingContacts = false;
                loadMoreEvent.complete();
                that.cdRef.detectChanges();
                return;
            }
        }, function (error) {
            console.log('invite.ts : onymosContactsLoadNextSet error - ' + error);
            that.errorMessage = 'ERROR : Failed loading more Contacts.';
            that.loadingContacts = false;
            loadMoreEvent.complete();
            return;
        }); /* end OnymosContacts.loadNextSet */
    }; /* end loadMoreContacts */
    Invite.prototype.messageInvitee = function (contact) {
        var _this = this;
        if (!contact.phoneNumbers && !contact.emails)
            return;
        this.navCtrl.push(InviteDetails, {
            contact: contact
        })
            .catch(function () {
            // Page requires authentication, re-direct to Login page
            _this.navCtrl.setRoot(Login, { routeToPage: 'Invite' });
        });
    }; /* end messageInvitee */
    Invite.decorators = [
        { type: Component, args: [{
                    selector: 'page-invite',
                    templateUrl: 'invite.html'
                },] },
    ];
    /** @nocollapse */
    Invite.ctorParameters = [
        { type: NavController, },
        { type: ChangeDetectorRef, },
    ];
    return Invite;
}()); /* end export class Invite */
//# sourceMappingURL=invite.js.map