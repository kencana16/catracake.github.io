//hamburger menu
function myFunction(x) {
    x.classList.toggle("change");

}

//drop header
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("header").style.top = "0";
        document.getElementById("toTop").style.bottom = "40px";
        document.getElementById("menu").style.display = "block";
    }
    else {
        document.getElementById("header").style.top = "-80px";
        document.getElementById("toTop").style.bottom = "-100px";
        document.getElementById("menu").style.display = "none";
    }

}

