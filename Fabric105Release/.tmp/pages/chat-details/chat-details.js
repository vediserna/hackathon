import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { Content, ModalController, NavController, NavParams, Platform, ViewController } from 'ionic-angular';
import { OnymosServices } from '../../services/onymos-services';
export var ChatDetails = (function () {
    function ChatDetails(modalCtrl, navCtrl, navParams, onymosServices, cdRef) {
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.onymosServices = onymosServices;
        this.cdRef = cdRef;
        this.chatDetailsPageTitle = '';
        this.errorMessage = '';
        this.recipients = [];
        this.messageContent = '';
        this.recipientListReady = false;
        this.displayDetails = 'NEW_CHAT';
        /* ------ Pick Recipient variables ------ */
        this.searchUserString = '';
        this.searchUserResults = [];
        this.emptySearchUserResults = false;
        /* ------ end Pick Recipient variables ------ */
        /* ------ Select Media and Upload variables ------ */
        this.callId = '';
        this.selectedMediaUrl = '';
        this.inProgressUploadKeys = [];
        this.inProgressUploads = {};
        this.loadingSelectedMedia = false;
        /* ------ end Select Media and Upload variables ------ */
        this.messagesList = [];
        this.authDataObject = OnymosAccess.getAuth();
        this.sender = {
            userId: this.authDataObject.userId,
            userName: this.authDataObject.userName,
            userPhoto: this.authDataObject.userPhoto
        };
        var chatDetailsObject = {
            sender: null,
            recipients: null
        };
        chatDetailsObject = navParams.data;
        if (chatDetailsObject.sender && chatDetailsObject.sender.userId !== '') {
            this.displayDetails = 'EXISTING_CHAT';
            if (chatDetailsObject.recipients.length === 1) {
                this.chatDetailsPageTitle = chatDetailsObject.recipients[0].userName;
            }
            else {
                this.chatDetailsPageTitle = 'Group Chat';
            }
            this.updateExistingChatRecipientsList(chatDetailsObject);
            this.updateMessages();
        }
        else {
            this.displayDetails = 'NEW_CHAT';
            this.chatDetailsPageTitle = 'New Chat';
            this.searchUserString = '';
        }
    } // end constructor
    ChatDetails.prototype.ionViewCanEnter = function () {
        if (OnymosAccess.getAuth()) {
            return true;
        }
        else {
            return false;
        }
    }; /* end ionViewCanEnter */
    ChatDetails.prototype.ionViewDidEnter = function () {
        this.content.scrollToBottom();
    }; /* end ionViewDidEnter */
    ChatDetails.prototype.ionViewDidLoad = function () {
        this.content.scrollToBottom();
    }; /* end ionViewDidLoad */
    /* ------ NEW_CHAT - Pick Recipient Functions ------ */
    ChatDetails.prototype.focusPickRecipientInput = function () {
        document.getElementById('id_pick-recipient-input').focus();
    }; /* end function focusPickRecipientInput */
    ChatDetails.prototype.addRecipient = function (index) {
        this.recipients[this.recipients.length] = this.searchUserResults[index];
        this.searchUserString = '';
        this.updateRecipient();
        return;
    }; /* end function addRecipient */
    ChatDetails.prototype.deleteRecipient = function (index) {
        this.recipients.splice(index, 1);
        this.updateRecipient();
        return;
    }; /* end function deleteRecipient */
    ChatDetails.prototype.updateRecipient = function () {
        this.recipientListReady = true;
        this.messagesList = [];
        if (this.recipients.length > 0) {
            this.updateMessages();
            return;
        }
    }; /* end function updateRecipient */
    ChatDetails.prototype.searchUsers = function (newValue) {
        this.searchUserString = newValue;
        this.recipientListReady = false;
        this.searchUserResults = [];
        if (this.searchUserString === '' && this.recipients.length > 0) {
            this.recipientListReady = true;
            this.updateMessages();
            return;
        }
        if (this.searchUserString === '' && this.recipients.length <= 0) {
            this.emptySearchUserResults = false;
            return;
        }
        var that = this;
        OnymosAccess.getOtherUsersInfo(function searchUsersSuccess(userRecords) {
            var alreadyAdded = false;
            if (userRecords.length === 0) {
                that.emptySearchUserResults = true;
            }
            else {
                that.emptySearchUserResults = false;
            }
            for (var i = 0; i < userRecords.length; i++) {
                alreadyAdded = false;
                for (var j = 0; j < that.recipients.length; j++) {
                    if (userRecords[i].userId === that.recipients[j].userId) {
                        alreadyAdded = true;
                    }
                } /* end for j < that.recipients.length */
                if (!alreadyAdded) {
                    that.searchUserResults[that.searchUserResults.length] = userRecords[i];
                }
            } /* end for i < userRecords.length */
            that.cdRef.detectChanges();
        }, /* end function searchUsersSuccess */ function searchUsersFailure(error) {
            console.log('chatDetails.ts : onymosAccessGetOtherUsersInfo error - ' + error);
            that.errorMessage = 'ERROR : Failed searching for Users.';
            that.searchUserString = '';
            that.searchUserResults = [];
        }, /* end function searchUsersFailure */ {
            searchString: this.searchUserString.toLowerCase(),
            numberOfRecords: 10
        }); /* end OnymosAccess.getOtherUsersInfo */
    }; /* end function searchUsers */
    /* ------ end NEW_CHAT - Pick Recipient Functions ------ */
    /* ------ EXISTING_CHAT Functions ------ */
    ChatDetails.prototype.updateExistingChatRecipientsList = function (chatDetailsObject) {
        // Copy last message's Sender and Recipients, except current Logged-in user as Recipients
        this.recipients = [];
        if (chatDetailsObject.sender.userId !== this.authDataObject.userId) {
            this.recipients[this.recipients.length] = chatDetailsObject.sender;
        }
        for (var i = 0; i < chatDetailsObject.recipients.length; i++) {
            if (chatDetailsObject.recipients[i].userId !== this.authDataObject.userId) {
                this.recipients[this.recipients.length] = chatDetailsObject.recipients[i];
            }
        } /* end for i < chatDetailsObject.recipients.length */
        this.recipientListReady = true;
    }; /* end function updateExistingChatRecipientsList */
    ChatDetails.prototype.getFormattedRecipientsList = function () {
        var recipientsListString = '';
        recipientsListString = this.recipients[0].userName;
        for (var i = 1; i < this.recipients.length; i++) {
            recipientsListString = recipientsListString + ', ' + this.recipients[i].userName;
        } /* end for i < this.recipients.length */
        if (this.recipients.length > 1) {
            // Replace last comma with & sign
            recipientsListString = recipientsListString.replace(/\,([^\,]*)$/, ' \& ' + '$1');
        }
        return recipientsListString;
    };
    ;
    /* ------ end EXISTING_CHAT Functions ------ */
    /* ------ Chat Messages Functions ------ */
    ChatDetails.prototype.updateMessages = function () {
        if (this.recipients.length <= 0)
            return;
        var that = this;
        OnymosChat.listenForMessages('@AUTHOBJECT@', this.recipients, function getMessagesSuccess(chatMessage) {
            if (chatMessage.options &&
                chatMessage.options.chatCustomObject &&
                chatMessage.options.chatCustomObject.mediaTag) {
                that.updateMessageWithMedia(chatMessage, true);
            }
            else {
                var newMessageObject = {};
                newMessageObject.sender = chatMessage.sender;
                newMessageObject.recipients = chatMessage.recipients;
                newMessageObject.messageContent = chatMessage.messageContent;
                newMessageObject.messageCreated = chatMessage.messageCreated;
                newMessageObject.formattedDate = that.onymosServices.formatTime(chatMessage.messageCreated);
                that.messagesList.push(newMessageObject);
                that.cdRef.detectChanges();
                that.content.scrollToBottom();
            }
        }, function getMessagesFailure(error) {
            console.log('chat-details.ts : onymosChatListenForMessages error - ' + error);
            that.errorMessage = 'ERROR : Cannot retrieve messages.';
        }, {
            numberOfRecords: 10
        });
    }; /* end function updateMessages */
    ChatDetails.prototype.updateMessageWithMedia = function (chatMessage, scrollToBottom) {
        var mediaTag = chatMessage.options.chatCustomObject.mediaTag;
        var mediaTagsArray = mediaTag.split(/[\s,]+/);
        var that = this;
        OnymosMedia.onymosMediaSearch(mediaTagsArray, function searchMediaSuccess(resultsArray) {
            if (resultsArray.length > 0) {
                var newMessageObject = {};
                newMessageObject.sender = chatMessage.sender;
                newMessageObject.recipients = chatMessage.recipients;
                newMessageObject.messageContent = chatMessage.messageContent;
                newMessageObject.messageCreated = chatMessage.messageCreated;
                newMessageObject.formattedDate = that.onymosServices.formatTime(chatMessage.messageCreated);
                newMessageObject.mediaUrl = resultsArray[0].mediaUrl;
                newMessageObject.mediaType = resultsArray[0].mediaType;
                newMessageObject.thumbnailUrl = resultsArray[0].thumbnailUrl;
                that.messagesList.push(newMessageObject);
                that.cdRef.detectChanges();
                if (scrollToBottom)
                    that.content.scrollToBottom();
            }
            else {
                console.log('chat-details.ts : onymosMediaSearch returned 0 results.');
                that.errorMessage = 'ERROR : Cannot retrieve media.';
            }
        }, function searchMediaFailure(error) {
            console.log('chat-details.ts : onymosMediaSearch error - ' + error);
            that.errorMessage = 'ERROR : Cannot retrieve media.';
        }, {
            resulsValidityTime: 3600,
            searchResultsLimit: 1
        }); /* end OnymosMedia.onymosMediaSearch */
    }; /* end function updateMessageWithMedia */
    ChatDetails.prototype.loadMoreMessages = function (refresher) {
        var that = this;
        OnymosChat.loadMessagesPreviousSet('@AUTHOBJECT@', this.recipients, function (previousMessages) {
            for (var i = 0; i < previousMessages.length; i++) {
                var chatMessage = previousMessages[i];
                if (chatMessage.options &&
                    chatMessage.options.chatCustomObject &&
                    chatMessage.options.chatCustomObject.mediaTag) {
                    that.updateMessageWithMedia(chatMessage, false);
                }
                else {
                    var newMessageObject = {};
                    newMessageObject.sender = chatMessage.sender;
                    newMessageObject.recipients = chatMessage.recipients;
                    newMessageObject.messageContent = chatMessage.messageContent;
                    newMessageObject.messageCreated = chatMessage.messageCreated;
                    newMessageObject.formattedDate = that.onymosServices.formatTime(chatMessage.messageCreated);
                    that.messagesList.push(newMessageObject);
                    that.cdRef.detectChanges();
                }
            }
            refresher.complete();
        }, function (error) {
            console.log('chat-details.ts : onymosChatMessagesPreviousSet error - ' + error);
            that.errorMessage = 'ERROR : Cannot retrieve messages.';
            refresher.complete();
        }); /* end OnymosChat.loadMessagesPreviousSet */
    }; /* end function loadMoreMessages */
    ChatDetails.prototype.launchMedia = function (sender, mediaUrl, mediaType) {
        var mediaObject = {
            mediaUrl: mediaUrl,
            mediaType: mediaType
        };
        var modal = this.modalCtrl.create(ModalContentPage, mediaObject);
        modal.present();
    }; /* end function launchMedia */
    ChatDetails.prototype.sortMessagesList = function (messagesList) {
        messagesList.sort(function (a, b) {
            if (a.messageCreated < b.messageCreated)
                return -1;
            if (a.messageCreated > b.messageCreated)
                return 1;
            return 0;
        });
        return messagesList;
    }; /* end function sortMessagesList */
    ChatDetails.prototype.enableCopy = function (message) {
        this.disableCopy();
        message.enabledCopy = true;
    }; /* end function enableCopy */
    ChatDetails.prototype.disableCopy = function () {
        for (var i = 0; i < this.messagesList.length; i++) {
            this.messagesList[i].enabledCopy = false;
        }
    }; /* end function disableCopy */
    ChatDetails.prototype.copyContent = function (message) {
        message.enabledCopy = false;
        var that = this;
        OnymosChat.copyToClipboard(message.messageContent, function clipboardCopySuccess(status) {
            console.log('chat-details.ts : onymosChatCopyToClipboard status - ' + status);
        }, function clipboardCopyFailure(error) {
            console.log('chat-details.ts : onymosChatCopyToClipboard error - ' + error);
            that.errorMessage = 'ERROR : Copy failed.';
        }); /* end OnymosChat.copyToClipboard */
    }; /* end function copyContent */
    ChatDetails.prototype.clearFailedUpload = function (callId) {
        OnymosMedia.onymosMediaCancelSelect(callId);
        delete this.inProgressUploads[callId];
        this.inProgressUploadKeys = Object.keys(this.inProgressUploads);
    }; /* end function clearFailedUpload */
    ChatDetails.prototype.numberOfInProgressUploads = function () {
        var hashArrayLength = 0;
        try {
            hashArrayLength = Object.keys(this.inProgressUploads).length;
            return hashArrayLength;
        }
        catch (error) {
            var key = void 0;
            for (key in this.inProgressUploads) {
                if (this.inProgressUploads.hasOwnProperty(key))
                    hashArrayLength++;
            }
            return hashArrayLength;
        }
    };
    ;
    /* ------ end Chat Messages Functions ------ */
    /* ------ Chat Send Functions ------ */
    ChatDetails.prototype.selectMedia = function () {
        this.loadingSelectedMedia = true;
        this.callId = '' + Date.now();
        var that = this;
        OnymosMedia.onymosMediaSelect(this.callId, OnymosMediaConstants.PictureSourceType.PHOTOLIBRARY, OnymosMediaConstants.MediaType.ALLMEDIA, function mediaSelectSuccess(mediaURI) {
            that.selectedMediaUrl = OnymosMedia.onymosMediaGetThumbnail(that.callId);
            that.cdRef.detectChanges();
        }, function mediaSelectFailure(error) {
            console.log('chat-details.ts : onymosMediaSelect error - ' + error);
            that.errorMessage = 'ERROR : Cannot select media.';
            that.loadingSelectedMedia = false;
        });
    }; /* end function selectMedia */
    ChatDetails.prototype.cancelSelectedMedia = function () {
        OnymosMedia.onymosMediaCancelSelect('1');
        this.selectedMediaUrl = '';
        this.loadingSelectedMedia = false;
    }; /* end function cancelSelectedMedia */
    ChatDetails.prototype.onSelectedMediaLoad = function () {
        this.loadingSelectedMedia = false;
        this.cdRef.detectChanges();
    }; /* end function onSelectedMediaLoad */
    ChatDetails.prototype.sendMessage = function () {
        if (this.recipients.length <= 0)
            return;
        if (this.messageContent === '' && this.selectedMediaUrl === '')
            return;
        var options = null;
        var mediaTag = this.generateUniqueKey();
        if (this.selectedMediaUrl !== '') {
            options = {
                chatCustomObject: {
                    mediaTag: mediaTag
                }
            };
            this.uploadMediaAndPostMessage(this.sender, this.recipients, this.messageContent, options);
        } /* end if this.selectedMediaUrl !== '' */
        else {
            this.postMessage(this.sender, this.recipients, this.messageContent, options);
        } /* end else this.selectedMediaUrl !== '' */
        this.messageContent = '';
        this.selectedMediaUrl = '';
    }; /* end sendMessage */
    ChatDetails.prototype.uploadMediaAndPostMessage = function (sender, recipients, messageContent, options) {
        this.inProgressUploads[this.callId] = {
            callId: this.callId,
            mediaTag: options.chatCustomObject.mediaTag,
            messageContent: messageContent,
            mediaUrl: OnymosMedia.onymosMediaGetThumbnail(this.callId),
            uploadProgress: -1,
            uploadError: false
        };
        this.inProgressUploadKeys = Object.keys(this.inProgressUploads);
        this.content.scrollToBottom();
        var mediaTagsArray = options.chatCustomObject.mediaTag.split(/[\s,]+/);
        var that = this;
        OnymosMedia.onymosMediaGetUploadProgress(this.callId, function progressCallback(statusObject) {
            that.inProgressUploads[that.callId].uploadProgress = statusObject.percent;
        }, function failureCallback(error) {
            console.log('chat-details.ts : onymosMediaGetUploadProgress error - ' + error);
        }); /* end OnymosMedia.onymosMediaGetUploadProgress */
        OnymosMedia.onymosMediaUpload(this.callId, mediaTagsArray, function uploadMediaSuccess(status) {
            console.log('chat-details.ts : onymosMediaUpload status - ' + status);
            OnymosMedia.onymosMediaCancelSelect(that.callId);
            delete that.inProgressUploads[that.callId];
            that.inProgressUploadKeys = Object.keys(that.inProgressUploads);
            that.content.scrollToBottom();
            that.postMessage(sender, recipients, messageContent, options);
        }, function uploadMediaFailure(error) {
            console.log('chat-details.ts : onymosMediaUpload error - ' + error);
            that.errorMessage = 'ERROR : Cannot Upload media to Post message.';
            that.inProgressUploads[that.callId].uploadError = true;
        }, {
            targetDeviceFactor: OnymosMediaConstants.TargetDeviceFactor.MOBILE,
            thumbnailResizeFactor: 10,
            uploadSizeLimit: 15
        });
    }; /* end uploadMediaAndPostMessage */
    ChatDetails.prototype.postMessage = function (sender, recipients, messageContent, options) {
        var that = this;
        OnymosChat.sendMessage('@AUTHOBJECT@', recipients, messageContent, function sendMessageSuccess(status) {
            console.log('chat-details.ts : onymosChatSendMessage status - ' + status);
        }, function sendMessageFailure(error) {
            console.log('chat-details.ts : onymosChatSendMessage error - ' + error);
            that.errorMessage = 'ERROR : Cannot Post message.';
        }, options); /* end OnymosChat.sendMessage */
    }; /* end postMessage */
    ChatDetails.prototype.generateUniqueKey = function () {
        var cryptArray = new Uint32Array(4);
        var d0, d1, d2, d3;
        var refTab = [];
        for (var i = 0; i < 256; i++) {
            refTab[i] = (i < 16 ? '0' : '') + (i).toString(16);
        }
        try {
            window.crypto.getRandomValues(cryptArray);
            d0 = cryptArray[0];
            d1 = cryptArray[1];
            d2 = cryptArray[2];
            d3 = cryptArray[3];
        }
        catch (e) {
            d0 = Math.random() * 0x100000000 >>> 0;
            d1 = Math.random() * 0x100000000 >>> 0;
            d2 = Math.random() * 0x100000000 >>> 0;
            d3 = Math.random() * 0x100000000 >>> 0;
        }
        return refTab[d0 & 0xff] + refTab[d0 >> 8 & 0xff] + refTab[d0 >> 16 & 0xff] + refTab[d0 >> 24 & 0xff] + '-' +
            refTab[d1 & 0xff] + refTab[d1 >> 8 & 0xff] + '-' + refTab[d1 >> 16 & 0x0f | 0x40] + refTab[d1 >> 24 & 0xff] + '-' +
            refTab[d2 & 0x3f | 0x80] + refTab[d2 >> 8 & 0xff] + '-' + refTab[d2 >> 16 & 0xff] + refTab[d2 >> 24 & 0xff] +
            refTab[d3 & 0xff] + refTab[d3 >> 8 & 0xff] + refTab[d3 >> 16 & 0xff] + refTab[d3 >> 24 & 0xff];
    }; /* end generateUniqueKey */
    /* ------ end Chat Send Functions ------ */
    ChatDetails.decorators = [
        { type: Component, args: [{
                    selector: 'page-chat-details',
                    templateUrl: 'chat-details.html',
                    providers: [OnymosServices]
                },] },
    ];
    /** @nocollapse */
    ChatDetails.ctorParameters = [
        { type: ModalController, },
        { type: NavController, },
        { type: NavParams, },
        { type: OnymosServices, },
        { type: ChangeDetectorRef, },
    ];
    ChatDetails.propDecorators = {
        'content': [{ type: ViewChild, args: [Content,] },],
    };
    return ChatDetails;
}()); /* end export class ChatDetails */
export var ModalContentPage = (function () {
    function ModalContentPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.mediaObject = {
            mediaUrl: this.params.get('mediaUrl'),
            mediaType: this.params.get('mediaType')
        };
    } // end constructor
    ModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    }; // end dismiss
    ModalContentPage.decorators = [
        { type: Component, args: [{
                    template: "\n\t\t<ion-header>\n\t\t\t<ion-toolbar>\n\t\t\t\t<ion-title>\n\t\t\t\t\tMedia\n\t\t\t\t</ion-title>\n\t\t\t\t<ion-buttons start>\n\t\t\t\t\t<button ion-button (click)=\"dismiss()\">\n\t\t\t\t\t\t<span ion-text color=\"light\" showWhen=\"ios\">Cancel</span>\n\t\t\t\t\t\t<ion-icon name=\"md-close\" showWhen=\"android\"></ion-icon>\n\t\t\t\t\t</button>\n\t\t\t\t</ion-buttons>\n\t\t\t</ion-toolbar>\n\t\t</ion-header>\n\n\t\t<ion-content has-header=\"true\" class=\"media-viewer-page\">\n\t\t\t<div class=\"row row-center\">\n\t\t\t\t<div class=\"col col-center\">\n\t\t\t\t\t<img\tclass=\"media-viewer-image\" *ngIf=\"mediaObject.mediaType !== 'mp4'\"\n\t\t\t\t\t\t\t\tsrc=\"{{mediaObject.mediaUrl}}\" />\n\n\t\t\t\t\t<video\tclass=\"media-viewer-video\" controls *ngIf=\"mediaObject.mediaType === 'mp4'\">\n\t\t\t\t\t\t<source src=\"{{mediaObject.mediaUrl}}\">\n\t\t\t\t\t</video>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</ion-content>\n\t"
                },] },
    ];
    /** @nocollapse */
    ModalContentPage.ctorParameters = [
        { type: Platform, },
        { type: NavParams, },
        { type: ViewController, },
    ];
    return ModalContentPage;
}()); /* end export class ModalContentPage */
//# sourceMappingURL=chat-details.js.map