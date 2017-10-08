import { Injectable } from '@angular/core';
export var OnymosServices = (function () {
    function OnymosServices() {
    }
    OnymosServices.prototype.formatTime = function (timestamp) {
        var currentTime = new Date();
        var messageTime = new Date(timestamp);
        var timeDiff = currentTime - messageTime;
        if (timeDiff <= 86400 * 1000) {
            var formattedTime_Hours = messageTime.getHours() <= 12 ? messageTime.getHours() : messageTime.getHours() - 12;
            if (formattedTime_Hours === 0)
                formattedTime_Hours = '0' + formattedTime_Hours;
            var formattedTime_Minutes = messageTime.getMinutes() < 10 ? '0' + messageTime.getMinutes() : messageTime.getMinutes();
            var formattedTime_AMPM = messageTime.getHours() < 12 ? 'AM' : 'PM';
            return formattedTime_Hours + ':' + formattedTime_Minutes + ' ' + formattedTime_AMPM;
        } // end if timeDiff <= 86400*1000
        else {
            var numberOfDays = Math.floor(timeDiff / (86400 * 1000));
            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var months = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
            if (numberOfDays === 1)
                return 'Yesterday';
            if (numberOfDays > 1 && numberOfDays < 7)
                return days[messageTime.getDay()];
            return months[messageTime.getMonth()] + ' ' + messageTime.getDate() + ', ' + messageTime.getFullYear();
        } // end else timeDiff <= 86400*1000
    }; // end function formatTime
    OnymosServices.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    OnymosServices.ctorParameters = [];
    return OnymosServices;
}()); /* end export class OnymosServices */
//# sourceMappingURL=onymos-services.js.map