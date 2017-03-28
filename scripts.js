$(document).ready(function () {

    $("h1,h3").fadeIn(1200);


   
});


function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }