$(document).ready(function () {

    $("h1,h3").fadeIn(1200);


   
});

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "20px Arial"
ctx.fillText("Like us on Facebook!",10,50);

function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }