
var fs = require('fs');


function setjsjs(){


let aniJs = fs.readFileSync('./jsjs/animation.js','utf8');

let jsjs='document.addEventListener("DOMContentLoaded", function(event) {\n'+

'\xa0adkit.onReady(showAd);\n'+
// Calls showAd function when the adkit library has loaded.'+

'\xa0\xa0 function showAd() {\n'+aniJs+

            // Show your ad/start animating your ad.
            // Add your click listeners here, otherwise the banner might become unclickable

            // Click listener for the whole banner, calling handleClick.
'\xa0\xa0\xa0 document.body.addEventListener("click", handleClick);\n'+

            // Make cursor pointer to indicate that banner is clickable
'\xa0\xa0\xa0 document.body.style.cursor = "pointer";\n'+
'}\n'+

'\xa0 function handleClick() {\n'+
            // Triggers clickthrough and redirects the user. 
'\xa0\xa0  EB.clickthrough();\n'+ // Case sensitive.

            // NOTE! This function does not have any arguments. 
            // The URL will be pulled directly from the Sizmek platform.

            // Uncomment below line to test the clickthrough in the console.
            // console.log( "clickthrough triggered");
'}\n'+
//end banner
'});\n'
return jsjs
}

module.exports.setjsjs=setjsjs;