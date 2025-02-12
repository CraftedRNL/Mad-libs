document.getElementById("btn").addEventListener("click", function() {
    var content = document.querySelectorAll(".content");
    var lib = document.querySelectorAll(".input");
    for (var i = 0; i < content.length; i++) {
        content[i].style.filter = "blur(0px)";
        lib[i].style.color = "rgb(247, 255, 130)";
    }

});