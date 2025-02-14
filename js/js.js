document.getElementById("btn").addEventListener("click", function() {
    var content = document.querySelectorAll(".content");
    for (var i = 0; i < content.length; i++) {
        content[i].style.filter = "blur(0px)";
    }
});

var count = localStorage.getItem("count");

function setColorBasedOnCount(count) {
    var lib = document.querySelectorAll(".input");
    var color;
    var textColor;
    var sum = document.getElementById("summer");
    var win = document.getElementById("winter");
    var spr = document.getElementById("spring"); 
    var fal = document.getElementById("fall");
    if (count == 1) {
        color = "linear-gradient(0deg, rgba(255,250,78,0.8015581232492998) 0%, rgba(252,176,105,0.8855917366946778) 43%, rgba(255,25,25,0.6727065826330532) 100%)"; 
        textColor = "rgb(247, 255, 130)";
        sum.style.display = "flex";
        win.style.display = "none";
        spr.style.display = "none";
        fal.style.display = "none";
    } else if (count == 2) {
        color = "linear-gradient(0deg, rgba(139,139,139,0.8015581232492998) 0%, rgba(140,140,204,0.7483368347338936) 43%, rgba(0,212,255,0.6727065826330532) 100%)"; 
        textColor = "rgb(255, 255, 255)";
        sum.style.display = "none";
        win.style.display = "flex";
        spr.style.display = "none";
        fal.style.display = "none";
    } else if (count == 3) {
        color = "linear-gradient(0deg, rgba(255,189,248,0.6755077030812324) 0%, rgba(136,238,228,0.7147233893557423) 43%, rgba(71,255,61,0.6727065826330532) 100%)"; 
        textColor = "rgb(0, 53, 9)";
        document.getElementById("summer").style.display = "none";
        win.style.display = "none";
        spr.style.display = "flex";
        fal.style.display = "none";
    } else if (count == 4) {
        color = "linear-gradient(0deg, rgba(255,123,123,0.6755077030812324) 0%, rgba(236,238,136,0.7147233893557423) 43%, rgba(255,162,67,0.6727065826330532) 100%)"; 
        textColor = "rgb(236, 173, 0)";
        document.getElementById("summer").style.display = "none";
        win.style.display = "none";
        spr.style.display = "none";
        fal.style.display = "flex";
    } else {
        color = "white"; 
        textColor = "black";
        document.getElementById("summer").style.display = "none";
        win.style.display = "none";
        spr.style.display = "none";
        fal.style.display = "none";
    }
    document.getElementById("encasing").style.background = color;
    for (var i = 0; i < lib.length; i++) {
        lib[i].style.color = textColor;
    }
}

setColorBasedOnCount(count);
