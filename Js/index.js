document.addEventListener("scroll", (scroll)=>{
    var navbarBg = document.getElementsByClassName("background")[0];
    if(scrollY>120){
        navbarBg.setAttribute("style","background-color: #E1E9EA;");
        document.querySelectorAll(".nav-links>a").forEach(function(element){
            element.style.color="black";
            element.style.opacity="1";
        });
        document.querySelector(".brand-logo>a>img").style.opacity="1";
    }
    else{
        navbarBg.setAttribute("style","background-color: transparent;");
        document.querySelectorAll(".nav-links>a").forEach(function(element){
            element.style.color="white";
        });
    }
});
function popup(){
    document.getElementsByClassName("mobile")[0].innerHTML ="";
}

