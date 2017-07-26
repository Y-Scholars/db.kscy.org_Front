import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CookieService {

    getCookie(c_name) {

        var i, x, y, ARRcookies = document.cookie.split(";");

        for (i = 0; i < ARRcookies.length; i++) {

            x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));

            y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);

            x = x.replace(/^\s+|\s+$/g, "");

            if (x == c_name) {

                return decodeURI(y);

            }

        }

    }

    setCookie(c_name, value, exdays) {

        var exdate = new Date();

        exdate.setDate(exdate.getDate() + exdays);

        var c_value = encodeURI(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());

        document.cookie = c_name + "=" + c_value;

    }

    delete_cookie(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
}