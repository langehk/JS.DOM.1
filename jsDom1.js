"use strict";

function validateForm(){
    debugger;
    let name = document.getElementById("name").value;
    name.toString();

/*
Vi validerer ikke datoen, grundet det er valideret gennem type="date"
*/


if(name.length <= 1)
{
    debugger;
    alert("Dit navn er for kort.");
    return false;
}

}




// Cookies

    let cookie = function createCookie(name, value, minutes) {
        let expires;
        name = document.getElementById('name').value;
        let birthDate = document.getElementById('date').value;
        value = 42;
        minutes = 10;

        let date = new Date();

        date.setTime(date.getTime() + (minutes * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
        
         // = "; expires=" + tenMinExp;
        document.cookie = name + birthDate + "=" + value + expires + "; path=/";
    }


    submitBtn.addEventListener("click", cookie);


function readCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}
