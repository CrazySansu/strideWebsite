
(function () {
    'use strict';
    var strideAI = angular.module('strideAI', []);
    window.onload = function () {
      // body...

      function showButtons(){
        var btn = document.querySelector('.button');
        var buttonWrapper = document.querySelectorAll('.button-wrapper');
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
    }
  
    strideAI.controller('navbarTab',function($scope){
        console.log($scope.white); 
    });

    window.onscroll = function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("headingTag").style.background = "linear-gradient(to right, #ffffff -50%,  #BA25FF 50%)";
            document.getElementById("white").src = "img/logo-color.png";
        } else {
            document.getElementById("headingTag").style.background = "linear-gradient(to right, #2570ff -50%,  #BA25FF 50%)";
            document.getElementById("white").src = "img/logo-white.png";
        }
    }
})();