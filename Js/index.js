document.addEventListener("scroll", (scroll)=>{
    if(pageYOffset>120){
        document.getElementsByClassName("background")[0].style.backgroundColor = "white";
        document.querySelectorAll(".nav-links>a").forEach(function(element){
            element.style.color="black";
        });
    }
    else{
        document.getElementsByClassName("background")[0].style.backgroundColor = "transparent";
        document.querySelectorAll(".nav-links>a").forEach(function(element){
            element.style.color="white";
        });
    }
});
