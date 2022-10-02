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

function back(innerhtmlstr,IDs){
    console.log("hello");
document.getElementById(IDs).innerHTML=innerhtmlstr;
}


function mobile(){
    var elem = document.getElementById("mob");
    var str = elem.innerHTML;
    console.log(str);
    elem.innerHTML ="<button id='mobile' class='back' ></button> <form action='query_sub.php' method='POST' class='Form-Mobile'> <table cellpadding='4' style='height:100%;width:100%;'> <tr> <td> <label for='name'>Enter Your Name: </label> </td> <td style='text-align:center' > <input type='text' name='NAME' id='name'> </td> </tr> <tr> <td> <label for='email'>Enter Your Mail: </label> </td> <td style='text-align:center' ><input type='email' name='EMAIL' id='email'></td></tr><tr><td><label for='phone'>Enter Your Phone No: </label></td><td style='text-align:center' ><input type='tel'></td></tr><tr><td><label for='query'>Enter Problem With Your Device: </label></td><td style='text-align:center' ><textarea name='PROBLEM' id='query' cols='30' rows='6'></textarea></td></tr><tr><td colspan='2' style='text-align:center;' ><input type='submit' name='submit' value='Submit'></td></tr></table></form>";
    // document.getElementById('mobile').onclick(back(str,"mob"));
}

function laptop(){
    var elem = document.getElementById("lap");
    var str = elem.innerHTML;
    elem.innerHTML ="<button id='laptop' class='back' ></button><form action='query_sub.php' method='POST'class='Form-Mobile'><table cellpadding='4' style='height:100%;width:100%'><tr><td><label for='name'>Enter Your Name: </label></td><td style='text-align:center' ><input type='text' name='NAME' id='name'></td></tr><tr><td><label for='email'>Enter Your Mail: </label></td><td style='text-align:center' ><input type='email' name='EMAIL' id='email'></td></tr><tr><td><label for='phone'>Enter Your Phone No: </label></td><td style='text-align:center' ><input type='tel'></td></tr><tr><td><label for='query'>Enter Problem With Your Device: </label></td><td style='text-align:center' ><textarea name='PROBLEM' id='query' cols='30' rows='6'></textarea></td></tr><tr><td colspan='2' style='text-align:center;' ><input type='submit' name='submit' value='Submit'></td></tr></table></form>";
    // document.getElementById('laptop').onclick(back(str,"lap"));
}
function computer(){
    var elem = document.getElementById("com");
    var str = elem.innerHTML;
    elem.innerHTML ="<button id='computer' class='back' ></button><form action='query_sub.php' method='POST' class='Form-Mobile'><table cellpadding='4' style='height:100%;width:100%'><tr><td><label for='name'>Enter Your Name: </label></td><td style='text-align:center' ><input type='text' name='NAME' id='name'></td></tr><tr><td><label for='email'>Enter Your Mail: </label></td><td style='text-align:center' ><input type='email' name='EMAIL' id='email'></td></tr><tr><td><label for='phone'>Enter Your Phone No: </label></td><td style='text-align:center' ><input type='tel'></td></tr><tr><td><label for='query'>Enter Problem With Your Device: </label></td><td style='text-align:center' ><textarea name='PROBLEM' id='query' cols='30' rows='6'></textarea></td></tr><tr><td colspan='2' style='text-align:center;' ><input type='submit' name='submit' value='Submit'></td></tr></table></form>";
    // document.getElementById('computer').onclick(back(str,"com"));
}
