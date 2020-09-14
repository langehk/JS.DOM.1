"use strict";

function validateForm(){

    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value;
    let submitBtn = document.getElementsById("submitBtn");
/*
Vi validerer ikke datoen, grundet det er valideret gennem type="date"
*/

if(name.length <= 1)
{
    alert("Dit navn er for kort.");
    return false;
}

}




// Cookies

    let form = function createCookie() {
        debugger;
        let name = document.getElementById('name').value;
        let date = document.getElementById('date').value;
        let value = 42;
        let tenMinExp = 0.00694444;
        let expires = "; expires=" + tenMinExp;
        document.cookie = name + date + "=" + value + expires + "; path=/";
    }


    submitBtn.addEventListener("click", form);


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
