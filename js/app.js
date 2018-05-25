// Document whole code properly

$(function () {
    $("#navbarToggle").blur(function (event){
        var screenWidth = window.innerWidth;
        if(screenWidth <768){
            $("#collapsable-nav").collapse('hide');
            $('.content').css("margin-top",90);
        }
    });
    
    $("#navbarToggle").click(function (event){
        $('.content').css("margin-top",350);
    });

    // $('.dropdown').hover(
    //     function () {
    //         $(this).toggleClass('open');
    //     },
    //     function() {
    //         $(this).toggleClass('open');
    //     }
    // );
});

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("headingTag").style.background = "linear-gradient(to right, #ffffff -50%,  #BA25FF 50%)";
        // document.getElementById("headingTag").style.background = "black";
        document.getElementById("logo-white").style.display = "none";
        document.getElementById("logo-color").style.display = "block";
    } else {
        document.getElementById("headingTag").style.background = "linear-gradient(to right, #2570ff -50%,  #BA25FF 50%)";
        document.getElementById("logo-white").style.display = "block";
        document.getElementById("logo-color").style.display = "none";
    }
}


// --------- Platform Animation

var nluTool = document.getElementById('nluTool');
nluTool.addEventListener('click',showNLU);
var utilityTool = document.getElementById('utilityTool');
utilityTool.addEventListener('click',showUtility);
var iptTool = document.getElementById('iptTool');
iptTool.addEventListener('click',showIPT);

function showTool(){
    iptTool.style.transform = "scale(0.5)";
    nluTool.style.transform = "scale(0.5)";
    utilityTool.style.transform = "scale(0.5)";

    iptTool.style.left = "0";
    nluTool.style.left = "0";
    utilityTool.style.left = "0";

    iptTool.style.top = "30px";
    nluTool.style.top = "200px";
    utilityTool.style.top = "380px";
}

function showNLU(){
    showTool();
    var tool = document.getElementById('nlu');
    tool.style.display = "block";
    document.getElementById('detailnlu').style.display = "block";
    this.style.boxShadow = "4px 4px 25px #000"
    this.style.transform = "scale(0.6)";
    this.style.opacity = "1";
    document.getElementById('utility').style.display = "none";
    utilityTool.style.boxShadow = "unset"
    utilityTool.style.transform = "scale(0.5)";
    utilityTool.style.opacity = "0.5";
    document.getElementById('ipt').style.display = "none";
    iptTool.style.boxShadow = "unset"
    iptTool.style.transform = "scale(0.5)";
    iptTool.style.opacity = "0.5";
}

function showUtility(){
    showTool();
    var tool = document.getElementById('utility');
    tool.style.display = "block";
    this.style.boxShadow = "4px 4px 25px #000"
    this.style.transform = "scale(0.6)";
    this.style.opacity = "1";
    document.getElementById('nlu').style.display = "none";
    document.getElementById('detailnlu').style.display = "none";
    nluTool.style.boxShadow = "unset"
    nluTool.style.transform = "scale(0.5)";
    nluTool.style.opacity = "0.5";
    document.getElementById('ipt').style.display = "none";
    iptTool.style.boxShadow = "unset"
    iptTool.style.transform = "scale(0.5)";
    iptTool.style.opacity = "0.5";
}

function showIPT(){
    showTool();
    var tool = document.getElementById('ipt');
    // tool.style.display = "block";
    this.style.boxShadow = "4px 4px 25px #000"
    this.style.transform = "scale(0.6)";
    this.style.opacity = "1";
    document.getElementById('nlu').style.display = "none";
    document.getElementById('detailnlu').style.display = "none";
    nluTool.style.boxShadow = "unset"
    nluTool.style.transform = "scale(0.5)";
    nluTool.style.opacity = "0.5";
    document.getElementById('utility').style.display = "none";
    utilityTool.style.boxShadow = "unset"
    utilityTool.style.transform = "scale(0.5)";
    utilityTool.style.opacity = "0.5";
}

// nluTool.addEventListener('blur',hideTools);
// utilityTool.addEventListener('blur',hideTools);
// iptTool.addEventListener('blur',hideTools);

function hideTools(){
    nluTool.style.boxShadow = "unset"
    nluTool.style.fontSize = "1em";
    nluTool.style.transform = "scale(1)";
    nluTool.style.opacity = "1";
    document.getElementById('nlu').style.display = "none";

    document.getElementById('utility').style.display = "none";
    utilityTool.style.boxShadow = "unset"
    utilityTool.style.fontSize = "1em";
    utilityTool.style.transform = "scale(1)";
    utilityTool.style.opacity = "1";
    
    document.getElementById('ipt').style.display = "none";
    iptTool.style.boxShadow = "unset"
    iptTool.style.fontSize = "1em";
    iptTool.style.transform = "scale(1)";
    iptTool.style.opacity = "1";
} 

// ---------- Animation for the NLU Prism

let prism = document.querySelector(".recPrism");
console.log(prism);

function showSubjectiveSA(){
    prism.style.transform = "translateZ(-150px) rotateY( -90deg)";
}
function showSentimentAnalysis(){
    prism.style.transform = "translateZ(-150px)";
}
function showTextSummarization(){
    prism.style.transform = "translateZ(-150px) rotateY( -180deg)";
}

function showKeywordExtraction(){
    prism.style.transform = "translateZ(-150px) rotateX( -90deg)";
}

function showSemanticSimilarity(){
    prism.style.transform = "translateZ(-150px) rotateY( 90deg)";
}

function showBottomSide(){
    prism.style.transform = "translateZ(-150px) rotateX( 90deg)";
}


// ---------- Animation js code for contact coming out from pic

// document.querySelector("#vj").addEventListener('click', showButtons);
// document.querySelector("#sandy").addEventListener('click', showButtons);
// document.querySelector("#prat").addEventListener('click', showButtons);
// document.querySelector("#sagar").addEventListener('click', showButtons);
// document.querySelector("#colin").addEventListener('click', showButtons);
// document.querySelector("#iain").addEventListener('click', showButtons);


// document.querySelector("#vj").addEventListener('blur', hideButtons);
// document.querySelector("#sandy").addEventListener('blur', hideButtons);
// document.querySelector("#prat").addEventListener('blur', hideButtons);
// document.querySelector("#sagar").addEventListener('blur', hideButtons);
// document.querySelector("#colin").addEventListener('blur', showButtons);
// document.querySelector("#iain").addEventListener('blur', showButtons);

// function showButtons(){
//     var btnWrapper = this.parentElement.querySelectorAll('.button-inside');
//     // console.log(this);
    
//     if(this.classList.contains('animation')) {
//         this.classList.remove('animation');
//     } else {
//         this.classList.add('animation');
//     }

//     for (i = 0; i < btnWrapper.length; i++ ) {
//         if(btnWrapper[i].classList.contains('animation')){
//             btnWrapper[i].classList.remove('animation');   
//         } else {
//             btnWrapper[i].classList.add('animation');
//         } 
//     }
// }

// function hideButtons(){
//     var btnWrapper = this.parentElement.querySelectorAll('.button-inside');
//     this.classList.remove('animation');

//     for (i = 0; i < btnWrapper.length; i++ ) {
//         btnWrapper[i].classList.remove('animation'); 
//     }
// }

// (function(){
//     'use strict';
//     var app = angular.module('strideApp',[]);
//     app.controller('name',function($scope){         //ng-controller='name' in html

//     });
// })();

