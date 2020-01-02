const fs = require('fs-extra');
const path = require('path');
const { promisify } = require("util");
const writeFile = promisify(fs.writeFile);
const {mkdir} = require ('commandir')

//html strings
const standartHtml = require('./htmljs/html.js');
//css strings
const standartCss = require('./cssjs/css.js');
//js strings
const standartJS = require('./jsjs/js.js');


const standartSizes = ['160x600', '320x50', '320x160', '320x250', '320x320', '930x180', '930x600'];



function makemeabannerbitch(){
  const bannerWH = standartSizes[0].split("x");
 


//========================================================================//
//Set HTML values
//========================================================================//
   
    let titleStr;
    let txt1Str;
    let txt2Str;
    let txt3Str;


    //wide
    if(bannerWH[0]>bannerWH[1]){
       
        titleStr = 'awesome banner';
        txt1Str = 'Dette er den forste tekst';
        txt2Str = 'Dette er den anden tekst';
        txt3Str = 'Dette er den tredie tekst';

    }
    //tall
    if(bannerWH[1]>bannerWH[0]){
     
        titleStr = 'awesome <br>banner';
        txt1Str = 'Dette er den<br>forste tekst';
        txt2Str = 'Dette er den<br>anden tekst';
        txt3Str = 'Dette er den<br>tredie tekst';

    }

      let buttonStr = "SPIL MED HER"

      let ff='<link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">'
      let html=standartHtml.setStrings(ff,titleStr,txt1Str,txt2Str,txt3Str,buttonStr);

   

//========================================================================//
//Set CSS values
//========================================================================//
        //colors from 1-10  , widtheight, fontface
        let prim='#003E99';//oddset dark blue
        let sec='#4D78B8'; //oddset dark blue 70%
        let ter='#99B2D6'; //oddset dark blue 40%
        let qua='#DC5F11'; //oddset orange
        let qui='#E78F59'; //oddset orange 70%
        let sen='#F1BFA0'; //oddset orange 40%
        let sep='#333';
        let oct='#333';
        let non='#333';
        let den='#333';
        let bWH=bannerWH;
        let tff='Pacifico';

    
    


//========================================================================//
//Set JS values
//========================================================================//
let js=standartJS.setjsjs()

//========================================================================//
//Create the directory and subdirectoryes
//========================================================================//

let banner = './banners/xxx_banner_'+bWH[0]+'x'+bWH[1];
const imgdir = '/./img';
  //const imgdir = '/img';
const cssdir = '/../css';
  //const cssdir = '/css';
const jsdir = '/../js';
  //const jsdir = '/js';  
const targetDir = banner+imgdir+cssdir+jsdir;








/*
async function makeSomeDirs () {
  try {
  
    const maindir = await mkdir (banner)
    console.log(maindir)
    const idir = await mkdir (banner+imgdir)
    console.log(idir)
    const cdir = await mkdir (banner+cssdir)
    console.log(cdir)
    const jdir = await mkdir (banner+jsdir)
    console.log(jdir)

  } catch ({err, dirs}) {

     
  }
}
makeSomeDirs ()
*/

async function makedirs(path){
  
let css=standartCss.setCss(prim,sec,ter,qua,qui,sen,sep,oct,non,den,tff,bWH)

const psep = path.sep;
const initDir = await path.isAbsolute(targetDir) ? psep : '';

 targetDir.split(psep).reduce((parentDir, childDir) => {
  const curDir = path.resolve(parentDir, childDir);
 //  console.log(`Dir Name: ${curDir}`);
   
  // if dir do not exsist
  if (!fs.existsSync(curDir)) {

    fs.mkdirSync(curDir);
    if(childDir!='img' && childDir!='css' && childDir!='js'){
      writeFiles(curDir+'/index.html',html)
    }else if(childDir=='css'){
      writeFiles(curDir+'/maincss.css',css)
    }else if(childDir=='js'){
      writeFiles(curDir+'/main.js',js)
    }else if(childDir=='img'){

      try {
        fs.copySync('./imgjs/bg.jpg', curDir+'/bg.jpg')
        console.log('success!')
      } catch (err) {
        console.error(err)
      }

      try {
        fs.copySync('./imgjs/logo.png', curDir+'/logo.png')
        console.log('success!')
      } catch (err) {
        console.error(err)
      }


    }







  }
 
  
  return curDir;
}, initDir);

}
makedirs(path)








async function writeFiles(path,file){

  await fs.writeFile(path, file, (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('writing bitching files');
    standartSizes.shift()
    if (typeof standartSizes !== 'undefined' && standartSizes.length > 0) {
      makemeabannerbitch()
    }
  
  })


}


}
makemeabannerbitch()