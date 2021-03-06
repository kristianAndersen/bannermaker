


var playing=true;  
var efw=document.querySelector('.eodds-feed-wrap')
var headline=document.querySelector('.headline')

var openSection=document.querySelector('.glitch')

var thed1 =document.querySelector('.hed1')
var thed2 =document.querySelector('.hed2')
var thed3 =document.querySelector('.hed3')


var o1=document.querySelector('.o1')
var ox=document.querySelector('.ox')
var o2=document.querySelector('.o2')




TweenMax.set(efw, {perspective: 800});

TweenMax.set(o1, {transformOrigin:"50% 50%"});
TweenMax.set(ox, {transformOrigin:"50% 50%"});
TweenMax.set(o2, {transformOrigin:"50% 50%"});

TweenMax.set('.hed1', {transformOrigin:"50% 50%"});
TweenMax.set('.hed2', {transformOrigin:"50% 50%"});
TweenMax.set('.hed3', {transformOrigin:"50% 50%"});






var feedURL = 'https://feed.danskespil.dk/sportsbook/events.json?token=07a074a5d4ce9dffbe50e377b9bb668b&typeid=DanskeSpil&sportid=110';
var request = new XMLHttpRequest();
var count=0;
request.open('GET',feedURL, true);
request.setRequestHeader('Accept', 'application/json');
request.onload = function() {

if (request.status >= 200 && request.status < 400 && request.readyState == 4) {
    
    var resp = JSON.parse(request.responseText);
      
for (i in resp)  {

//is game active              
if(resp[i].aktiv_jn=="J"){2

 var gamename=resp[i].land_navn;

    //what game?
    switch(resp[i].land_navn){            
          case "Counter-Strike: GO":
      //get the first entry
        if(count<1){
             sortJson(resp[i])
             count++
             
        }
      
        break;
          case "League of Legends":

            break;
          case "DOTA 2":
            break;
          case "World of Warcraft":
            break;
          case "Overwatch":
            break;
          case "Starcraft II":
            break;
          case "Rainbow6":
            break;
          case "Call of Duty":
            break;                   
    }
}    
 
}  
    
  
  } else {
    thed1.innerHTML  = 'the feed is Rekt '
    thed1.dataset.text= 'the feed is Rekt';

    thed3.innerHTML  = 'we are working out the bugs';
  thed3.dataset.text='we are working out the bugs';
    console.log('We reached our target server, but it returned an error');
  }
  
  
};

request.onerror = function() {

  thed1.innerHTML  = 'the feed is Rekt '
  thed1.dataset.text= 'the feed is Rekt';

  thed3.innerHTML  = 'we are working out the bugs';
  thed3.dataset.text='we are working out the bugs';
  console.log('There was a connection error of some sort');
};

request.send();




function sortJson(e){
    var ht=e.hjemmehold;
    
    var hts=reverseString(ht);

    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    thed1.innerHTML  = ht
    thed1.dataset.text= ht ;

    thed2.innerHTML  = 'Vs.';
    thed2.dataset.text='Vs.';
    
    thed3.innerHTML  = e.udehold
    thed3.dataset.text=e.udehold;



if(e.odds_1 == null){
        e.odds_1 =0;
}
if(e.odds_2 == null){2
        e.odds_2 =0;
}
if(e.odds_x == null){
    e.odds_x =0;
}
  
    o1.innerHTML  = '<span>1</span>'+e.odds_1;
   // o1.dataset.text= e.odds_1;
    
    ox.innerHTML  = '<span>x</span>'+e.odds_x;
    //ox.dataset.text= e.odds_x;
    
    o2.innerHTML  = '<span>2</span>'+e.odds_2 
    //o2.dataset.text= e.odds_2;
 
}


//Generate som random numbers/////////////////////////////////////////////////////////////
function random(min, max) {
  
  return min + Math.random() * (max - min);
}
//////////////////////////////////////////////////////////////////////////////////////////

var masterTL = new TimelineMax({ repeat: -1 })

if(openSection){
  var sectionBefore = CSSRulePlugin.getRule(".glitch:before");
  var sectionAfter = CSSRulePlugin.getRule(".glitch:after");

  var bgBefore = CSSRulePlugin.getRule(".eodds-feed-wrap:before");
  
  function randomGlich(){
    var rg=TweenMax.to(openSection, 0.02,{skewX: random(-0.8, 1),
        ease: Power0.easeNone,
        onComplete:function() {
        if(playing)  randomGlich0
        }
        }, 1);
    return rg
    }


    function bgGlitch(){
      var bg0=TweenMax.to(bgBefore, 0.5, {
        cssRule: {filter:'hue-rotate(3.142rad)',webkitFilter:'hue-rotate(3.142rad)',x:random(-20, 30),y:random(-10, 10),skewX:random(-5, 5),scale:random(0.95, 1.1),opacity:random(0.5, 1)},
        ease: SlowMo.ease.config(0.9, 2, false),
        onComplete:bgGlitch
        
      }, 2);
    return bg0
    }



  function randomGlich0(){
    var g0=TweenMax.to([thed1,thed2,thed3,o1,ox,o2], 0.3,{x: random(-2, 2)+'px',y: random(-2, 2)+'px',
        //ease: Power0.easeNone,
        ease: SlowMo.ease.config(0.3, 2, false),
        skewX:random(0, 25),
        onComplete:randomGlich0
      }, 1);
    return g0
    }


function randomGlich1(){
var g1=TweenMax.to(sectionBefore, 0.05, {
    cssRule: {skewX:0,x: random(-4, 4)+'px',y: random(-4, 4)+'px',zIndex:random(-1, 1)},
    //ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize:  true, clamp: false}),
    ease: SlowMo.ease.config(0.9, 2, false),
    onComplete:randomGlich1
  }, 2);
return g1
}


function randomGlich2(){
  var g2=TweenMax.to(sectionAfter, random(0.01, 0.5), {
    cssRule: {scaleY:random(0.2, 1),x: random(-4, 4)+'px',y: random(-4, 4)+'px',zIndex:random(-1, 1)},
  //  ease: RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize:  true, clamp: false}),
  ease: SlowMo.ease.config(0.9, 2, false),  
  onComplete:randomGlich2
  }, 3);
 return g2
}



function randomshadowGlich(){
var rsg=TweenMax.fromTo(sectionBefore, random(0.2, 0.5), {cssRule: {textShadow: "3px 5px 6px #FF0000"}}, {cssRule: {textShadow: "-2px -2px 6px #008000;"}, delay:0.05,onComplete:randomshadowGlich})
return rsg
}


function randomshadowGlich0(){
  var rsg0=TweenMax.fromTo(sectionAfter, random(0.2, 0.5), {cssRule: {textShadow: "-3px -3px 2px #002EFF"}}, {cssRule: {textShadow: "3px 5px 2px #008000"},delay:0.05,onComplete:randomshadowGlich0})
 return rsg0
}


function randomshadowGlich1(){
  var rsg0=TweenMax.fromTo(headline, random(0.2, 0.5), {cssRule: {textShadow: "-3px -3px 2px #008000"}}, {cssRule: {textShadow: "3px 5px 2px #FF0000"}, delay:0.02,onComplete:randomshadowGlich1})
 return rsg0
}



masterTL.add( bgGlitch() )
masterTL.add( randomGlich(),'-=1' )
masterTL.add( randomshadowGlich1(),'-=1'  )
masterTL.add( randomGlich0() )
masterTL.add( randomshadowGlich() )
masterTL.add( randomGlich1())
masterTL.add( randomGlich2() )
masterTL.add( randomshadowGlich0() )


masterTL.stop()
masterTL.play()


function endanime() {
  playing=false;
  TweenMax.killAll();
 

}

setTimeout(endanime, 15000)

}

document.addEventListener("mouseenter", function( event ){

})

document.addEventListener("mouseleave", function( event ){


})


