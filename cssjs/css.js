// CSS colors
let primary = '#ffffff';
let secondary = '#ffffff';
let tertiary = '#ffffff';
let quaternary = '#ffffff';
let quinary = '#ffffff';
let senary = '#ffffff';
let septenary = '#ffffff';
let octonary = '#ffffff';
let nonary = '#ffffff';
let denary = '#ffffff';

let fs = require('fs');

function setCss(prim,sec,ter,qua,qui,sen,sep,oct,non,den,tff,bWH){


    primary = prim;
    secondary = sec;
    tertiary = ter;
    quaternary = qua;
    quinary = qui;
    senary = sen;
    septenary = sep;
    octonary = oct;
    nonary = non;
    denary = den;
   console.log(bWH[0]+' -- '+bWH[1]+' ---- '+bWH) 
   let csshead =  'html {'+
                'color: #222;'+
                'font-size: 1em;'+
                'line-height: 1;'+
                '--bwidth:'+bWH[0]+'px;'+
                '--bheight:'+bWH[1]+'px;'+
                '}';
       


let cssStr =fs.readFileSync('./cssjs/oddsfeed.css','utf8');

csshead+=cssStr

return csshead;
}

module.exports.setCss=setCss;