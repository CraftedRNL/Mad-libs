var count = 1;

document.getElementById("summer").addEventListener("click", function(){
    count = 1;
    localStorage.setItem("count", count);
    navigateToMadlib();
});
document.getElementById("winter").addEventListener("click", function(){
    count = 2;
    localStorage.setItem("count", count);
    navigateToMadlib();
});
document.getElementById("spring").addEventListener("click", function(){
    count = 3;
    localStorage.setItem("count", count);
    navigateToMadlib();
});
document.getElementById("fall").addEventListener("click", function(){
    count = 4;
    localStorage.setItem("count", count);
    navigateToMadlib();
});

function navigateToMadlib() {
    window.location.href = 'madlib.html';
}

