document.getElementById("btn").addEventListener("click", function() {
    var content = document.querySelectorAll(".content");
    for (var i = 0; i < content.length; i++) {
        content[i].style.filter = "blur(0px)";
    }
});