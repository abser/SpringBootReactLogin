import React from 'react';

    const authorized = () => {
        let token = getCookie("LC_TOKEN")
        // console.log(token);
        if(token !== "") {
          return true;
        }
        return false;
    }

    const saveToken = (token) => {
        setCookie("LC_TOKEN",token);
        return true;
    }

    const getToken = () => {
      let token = getCookie("LC_TOKEN");
        // console.log(token);
        return token;
    }


    const setCookie = (cname, cvalue) => {
      var d = new Date();
      d.setTime(d.getTime() + (900000));
      var expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    const getCookie = (cname) => {
      let name = cname + "=";
      var ca = document.cookie.split(';');
      // console.log(ca);
        for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(cname) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
    }

    const deleteCookie = (cname) => {
      document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      return true;
    }

    const getCSRFToken = () => {
        var name = "XSRF-TOKEN" + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return "";
      }

    const verifyJWT = () => {

    }

export {authorized, saveToken, getToken, setCookie, deleteCookie, verifyJWT, getCSRFToken} 