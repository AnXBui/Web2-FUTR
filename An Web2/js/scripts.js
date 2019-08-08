/* ==============================
Burger Animation
============================== */
var $topLine = $('#burger-icon div:nth-child(1)');
var $middleLine = $('#burger-icon div:nth-child(2)');
var $bottomLine = $('#burger-icon div:nth-child(3)');
var $burger= $('#burger-icon');
var animationSpeed = 0.25;
var ifClicked = false;

var $nav = $('nav[data-nav]');
var $navA = $('nav[data-nav] a');
var isVisible = false;

function burgerClick(){
    console.log("clicks");
    if(ifClicked === false){
        TweenMax.to($topLine,animationSpeed,{rotation:45, y:10});
        TweenMax.to($middleLine,animationSpeed,{alpha:0, scaleX:0});
        TweenMax.to($bottomLine,animationSpeed,{rotation:-45, y:-10});
        ifClicked = true;
    }else{
        TweenMax.to($topLine,animationSpeed,{rotation:0, y:0});
        TweenMax.to($middleLine,animationSpeed,{alpha:1, scaleX:1});
        TweenMax.to($bottomLine,animationSpeed,{rotation:0, y:0});
        ifClicked = false;
    }
}

$burger.on("click", burgerClick);
$navA.on("click", burgerClick);
/* ==============================
Burger Animation End
============================== */


function mouseClick(){

    console.log("click");
    if(isVisible === false){
        $nav.toggleClass('op faded');
        isVisible = true;
    }
    else{
        $nav.toggleClass('op faded');
        isVisible = false;
    }
}

$burger.on( "click", mouseClick);
// close the mobile menu when menu link is clicked
$navA.on( "click", mouseClick);
