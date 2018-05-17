





// --------------------------------------------------------------------------

function showButtons(name){
        var btn = document.querySelector('#'+name);
        // console.log(btn);
        var buttonWrapper = document.querySelectorAll('.'+name);
        if(btn.classList.contains('animation')) {
          btn.classList.remove('animation');
        } else {
          btn.classList.add('animation');
        }
    
        for (i = 0; i < buttonWrapper.length; i++ ) {
          if(buttonWrapper[i].classList.contains('animation')){
            buttonWrapper[i].classList.remove('animation');   
          } else {
            buttonWrapper[i].classList.add('animation');
          }  
        }
      };

let prism = document.querySelector(".rec-prism");

function showSignup(){
  prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
}
function showLogin(){
  prism.style.transform = "translateZ(-100px)";
}
function showForgotPassword(){
  prism.style.transform = "translateZ(-100px) rotateY( -180deg)";
}

function showSubscribe(){
  prism.style.transform = "translateZ(-100px) rotateX( -90deg)";
}

function showContactUs(){
  prism.style.transform = "translateZ(-100px) rotateY( 90deg)";
}

function showThankYou(){
  prism.style.transform = "translateZ(-100px) rotateX( 90deg)";
}

(function () {
    'use strict';
    var strideAI = angular.module('strideAI', []);
    window.onload = function () {
      // body...
    }
  
    strideAI.controller('navbarTab',function($scope){
        // console.log($scope.white); 
    });

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            // document.getElementById("headingTag").style.background = "linear-gradient(to right, #ffffff -50%,  #BA25FF 50%)";
            // document.getElementById("white").src = "img/logo-color.png";
        } else {
            // document.getElementById("headingTag").style.background = "linear-gradient(to right, #2570ff -50%,  #BA25FF 50%)";
            // document.getElementById("white").src = "img/logo-white.png";
        }
    }
})();