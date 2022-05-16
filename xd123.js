// ==UserScript==
// @name        przycizg
// @author      proste ze cytrus
// @match       *://www.margonem.pl
// @grant       GM_addStyle
// ==/UserScript==

var twojastara = document.createElement ('div');
twojastara.innerHTML = '<button id="xd123" type="button">'
                + 'przekieruj'
var twojastara2 = document.createElement ('div');
twojastara2.innerHTML = '<button id="xd1234" type="button">'
                + 'ac update'
var twojastara3 = document.createElement ('div');
twojastara3.innerHTML = '<button id="xd12" type="button">'
                + 'my site'


twojastara.setAttribute ('id', 'kontener');
document.body.appendChild (twojastara);
twojastara2.setAttribute ('id', 'kontener2');
document.body.appendChild (twojastara2);
twojastara3.setAttribute ('id', 'kontener3');
document.body.appendChild (twojastara3);

document.getElementById ("xd123").addEventListener (
    "click", () => {
	(document.location.href == `https://www.margonem.pl/` && document.location.href != `https://pandora.margonem.pl/`)
        document.location.href = `https://pandora.margonem.pl/`;
    });
document.getElementById ("xd1234").addEventListener (
    "click", () => {
	document.location.href = `https://bbotmargo.usermd.net/bot/AC.user.js`
     });
document.getElementById ("xd12").addEventListener (
    "click", () => {
	document.location.href = `cytrusek7331.ct8.pl`
     });

GM_addStyle ( `
    #kontener {
        position:               absolute;
        top:                    60px;
        left:                   0px;
        font-size:              20px;
        margin:                 5px;
        opacity:                0.9;
        padding:                5px 20px;
    }
    #kontener2 {
            position:               absolute;
        top:                    39px;
        left:                   0px;
        font-size:              20px;
        margin:                 5px;
        opacity:                0.9;
        padding:                5px 20px;
        }
            #kontener3 {
            position:               absolute;
        top:                    39px;
        left:                   73px;
        font-size:              20px;
        margin:                 5px;
        opacity:                0.9;
        padding:                5px 20px;
        }
` );
