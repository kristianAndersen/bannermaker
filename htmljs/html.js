

function setStrings(ff,tStr,t1Str,t2Str,t3Str,bStr){

    let titleStr=tStr;
    let txt1Str =t1Str;
    let txt2Str =t2Str;
    let txt3Str =t3Str;
    let buttonStr=bStr;








let htmlStr = '<!doctype html>\n' +
  '<html>\n' +
  '<head>\n\n' +
  '<meta charset="utf-8" />\n' +
  '<meta name="viewport" content="width=device-width, initial-scale=1" />\n\n' +
  '<title>' + titleStr + '</title>\n\n' +
  '<link rel="stylesheet" href="css/maincss.css" />\n' +
   ff+'\n'+
   '<!-- Important, imports the Sizmek library -->'+
  '<script type="text/javascript" src="http://ds.serving-sys.com/BurstingScript/adKit/adkit.js"></script>\n' +
  '<link href="https://fonts.googleapis.com/css?family=Open+Sans:700i" rel="stylesheet">\n'+
  '</head>\n' +
  '<body>\n' +
  '<div id="ad">\n' +


  '<div class="eodds-feed-wrap">'+
  '<div class="textwrap">'+
  '\xa0\xa0<div class="headline top">'+
  '\xa0\xa0<div class="h1class hed1 glitch" data-text=""></div>'+
  '\xa0\xa0<div class="h1class hed2 glitch" data-text=""></div>'+ 
  '\xa0\xa0<div class="h1class hed3 glitch" data-text=""></div>'+
  '\xa0\</div>'+
  '\xa0\<div class="oddds">'+
  '\xa0\xa0<div class="glitch o1" data-text=""><span></span></div>'+
  '\xa0\xa0<div class="glitch ox" data-text=""><span></span></div>'+
  '\xa0\xa0<div class="glitch o2" data-text=""><span></span></div>'+
  '\xa0\</div>'+
  '</div>'+
  '<div class="ctawrap">'+
  '\xa0\<div class="cta">'+buttonStr+'</div>'+
  '</div>'+
  '<div class="logo"></div>'+
  '</div>'+
 
  '</div>\n'+
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>'+
  '<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/CSSRulePlugin.min.js"></script>'+
  '<script src="js/main.js"></script>\n\n' +
  '</body>\n' +
  '</html>\n';

  return htmlStr;
}


module.exports.setStrings=setStrings;


