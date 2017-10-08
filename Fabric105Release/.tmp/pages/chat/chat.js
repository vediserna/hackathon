import { ChangeDetectorRef, Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OnymosServices } from '../../services/onymos-services';
import { Login } from '../login/login';
import { ChatDetails } from '../chat-details/chat-details';
import { Events } from 'ionic-angular';
export var Chat = (function () {
    function Chat(navCtrl, onymosServices, cdRef, events) {
        this.navCtrl = navCtrl;
        this.onymosServices = onymosServices;
        this.cdRef = cdRef;
        this.events = events;
        this.authenticated = false;
        this.errorMessage = '';
        this.chatList = [];
        this.authDataObject = OnymosAccess.getAuth();
        if (this.authDataObject) {
            this.authenticated = true;
            var that_1 = this;
            OnymosChat.stopListenForList('@AUTHID@');
            OnymosChat.listenForList('@AUTHID@', function getListSuccess(chatSummary) {
                var newChatObject = {};
                newChatObject.messageId = chatSummary.messageId;
                newChatObject.sender = chatSummary.sender;
                newChatObject.recipients = chatSummary.recipients;
                newChatObject.chatParticipants =
                    that_1.getFormattedParticipantList(chatSummary.sender, chatSummary.recipients);
                if (chatSummary.messageContent === '') {
                    newChatObject.messageContent = '[media]';
                }
                else {
                    newChatObject.messageContent = chatSummary.messageContent;
                }
                newChatObject.messageCreated = onymosServices.formatTime(chatSummary.messageCreated);
                that_1.chatList.push(newChatObject);
                that_1.cdRef.detectChanges();
            }, function getListFailure(error) {
                console.log('ERROR : chat.ts : onymosChatListenForList failed with error - ' + error);
                that_1.errorMessage = 'Failed obtaining Chat List.';
                that_1.cdRef.detectChanges();
            }); /* end OnymosChat.listenForList */
        } /* end if this.authDataObject */
    } /* end constructor */
    Chat.prototype.ionViewCanEnter = function () {
        if (OnymosAccess.getAuth()) {
            return true;
        }
        else {
            return false;
        }
    }; /* end ionViewCanEnter */
    Chat.prototype.compose = function () {
        var _this = this;
        this.navCtrl.push(ChatDetails, {})
            .catch(function () {
            // Page requires authentication, re-direct to Login page
            _this.navCtrl.setRoot(Login, { routeToPage: 'Chat' });
        });
    }; /* end compose */
    Chat.prototype.viewChatDetails = function (sender, recipients) {
        var _this = this;
        this.navCtrl.push(ChatDetails, {
            sender: sender,
            recipients: recipients
        })
            .catch(function () {
            // Page requires authentication, re-direct to Login page
            _this.navCtrl.setRoot(Login, { routeToPage: 'Chat' });
        });
    }; /* end viewChatDetails */
    Chat.prototype.getFormattedParticipantList = function (sender, recipients) {
        var participantsString = '';
        if (!sender) {
            this.errorMessage = 'ERROR : Missing Sender info.';
            return;
        } /* end if !recipients || recipients.length === 0 */
        if (!recipients || recipients.length === 0) {
            this.errorMessage = 'ERROR : Missing Recipients info.';
            return;
        } /* end if !recipients || recipients.length === 0 */
        if (sender.userId !== this.authDataObject.userId) {
            participantsString = sender.userName;
        }
        for (var i = 0; i < recipients.length; i++) {
            if (recipients[i].userId !== this.authDataObject.userId) {
                if (participantsString === '') {
                    participantsString = recipients[i].userName;
                }
                else {
                    participantsString = participantsString + ', ' + recipients[i].userName;
                }
            } /* end if recipients[i].userId !== this.authDataObject.userId */
        } /* end for i < recipients.length */
        // Replace last comma with & sign
        participantsString = participantsString.replace(/\,([^\,]*)$/, ' \& ' + '$1');
        return participantsString;
    };
    ;
    Chat.prototype.socialLogout = function () {
        var that = this;
        OnymosAccess.logout(function logoutSuccess(statusMessage) {
            console.log('app.component.ts : onymosAccessLogout - Success');
            that.events.publish('user:logout', Date.now());
        }, function logoutFailure(error) {
            console.log('app.component.ts : onymosAccessLogout error - ' + error);
        });
    }; // end function socialLogout
    Chat.decorators = [
        { type: Component, args: [{
                    selector: 'page-chat',
                    templateUrl: 'chat.html',
                    providers: [OnymosServices]
                },] },
    ];
    /** @nocollapse */
    Chat.ctorParameters = [
        { type: NavController, },
        { type: OnymosServices, },
        { type: ChangeDetectorRef, },
        { type: Events, },
    ];
    return Chat;
}()); /* end export class Chat */
//# sourceMappingURL=chat.js.map