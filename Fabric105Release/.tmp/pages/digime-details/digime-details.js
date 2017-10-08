import { ChangeDetectorRef, Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { OnymosServices } from '../../services/onymos-services';
export var DigiMeDetails = (function () {
    function DigiMeDetails(navCtrl, navParams, onymosServices, cdRef) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.onymosServices = onymosServices;
        this.cdRef = cdRef;
        this.errorMessage = '';
        this.fileName = '';
        this.displayGetDetailsSpec = false;
        this.getDetailsQueryInProgress = false;
        this.getDetailsQueryComplete = false;
        this.fileData = '';
        var fileNameObject = navParams.data;
        this.fileName = fileNameObject.fileName;
        console.log('DEBUG : fileName [' + this.fileName + ']');
    } /* end constructor */
    DigiMeDetails.prototype.ionViewCanEnter = function () {
        if (OnymosAccess.getAuth()) {
            return true;
        }
        else {
            return false;
        }
    }; /* end ionViewCanEnter */
    DigiMeDetails.prototype.getFileDetails = function (fileName) {
        this.fileData = '';
        this.errorMessage = '';
        this.getDetailsQueryInProgress = true;
        this.getDetailsQueryComplete = false;
        var inputObject = {
            fileName: fileName
        };
        var that = this;
        OnymosDigiMe.getDetails(inputObject, function getDetailSuccess(retrievedFileData) {
            console.log('DEBUG : getDetail Output : [' + JSON.stringify(retrievedFileData) + ']');
            console.log('DEBUG : getDetail Content Object [' + retrievedFileData.content + ']');
            console.log('DEBUG : getDetail Content Stringify [' + JSON.stringify(retrievedFileData.content) + ']');
            //that.fileData = retrievedFileData.content.replace(/,/g, '<BR><BR>').replace(/{/g, '<ul>').replace(/}/g, '</ul>').replace(/\"/g, '');
            that.fileData = '<TABLE><TR><TD>' +
                retrievedFileData.content
                    .substring(1, (retrievedFileData.content.length - 1))
                    .replace(/,/g, '</TD></TR><TR><TD>')
                    .replace(/:/g, '</TD><TD>')
                    .replace(/{/g, '</TD><TD>&nbsp;</TD><TD>')
                    .replace(/}/g, '<BR>')
                    .replace(/\"/g, '') +
                '</TD></TR></TABLE>';
            console.log('DEBUG : getDetail fileData [' + that.fileData + ']');
            that.getDetailsQueryInProgress = false;
            that.getDetailsQueryComplete = true;
            that.cdRef.detectChanges();
        }, function getDetailFailure(getDetailError) {
            console.log("DEBUG : JS : [" + getDetailError + "]");
            that.getDetailsQueryInProgress = false;
            that.getDetailsQueryComplete = true;
            that.cdRef.detectChanges();
        });
    }; // end function getFileDetails
    DigiMeDetails.decorators = [
        { type: Component, args: [{
                    selector: 'page-digime-details',
                    templateUrl: 'digime-details.html',
                    providers: [OnymosServices]
                },] },
    ];
    /** @nocollapse */
    DigiMeDetails.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: OnymosServices, },
        { type: ChangeDetectorRef, },
    ];
    return DigiMeDetails;
}()); /* end export class DigiMeDetails */
//# sourceMappingURL=digime-details.js.map