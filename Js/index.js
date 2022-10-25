var phone;
var lap;
var PC;

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



function backMobile() {
    document.getElementById('mob').innerHTML = phone;
}
function backLaptop(){
    document.getElementById('lap').innerHTML = lap;
}
function backPC(){
    document.getElementById('com').innerHTML = PC;
}

function mobile(){
    var elem = document.getElementById("mob");
    phone = elem.innerHTML;
    // console.log(str);
    elem.innerHTML ="<button id='mobile' class='back' onclick='backMobile()'></button> <form  method='POST' class='Form-Mobile'> <table cellpadding='4' style='height:100%;width:100%;'> <tr> <td> <label for='name'>Enter Your Name: </label> </td> <td style='text-align:center' > <input type='text' name='NAME' id='name'> </td> </tr> <tr> <td> <label for='email'>Enter Your Mail: </label> </td> <td style='text-align:center' ><input type='email' name='EMAIL' id='email'></td></tr><tr><td><label for='phone'>Enter Your Phone No: </label></td><td style='text-align:center' ><input type='tel' name='PHONE' id='phone'></td></tr><tr><td><label for='query'>Enter Problem With Your Device: </label></td><td style='text-align:center' ><textarea name='PROBLEM' id='query' cols='30' rows='6'></textarea></td></tr><tr><td colspan='2' style='text-align:center;' ><input type='submit' name='submit' onclick='query_sub(); return false;' value='Submit'></td></tr></table></form>";
    run();
}

function laptop(){
    var elem = document.getElementById("lap");
    lap = elem.innerHTML;
    elem.innerHTML ="<button id='laptop' class='back' onclick='backLaptop()' ></button><form  method='POST'class='Form-Mobile'><table cellpadding='4' style='height:100%;width:100%'><tr><td><label for='name'>Enter Your Name: </label></td><td style='text-align:center' ><input type='text' name='NAME' id='name'></td></tr><tr><td><label for='email'>Enter Your Mail: </label></td><td style='text-align:center' ><input type='email' name='EMAIL' id='email'></td></tr><tr><td><label for='phone'>Enter Your Phone No: </label></td><td style='text-align:center' ><input type='tel' name='PHONE' id='phone'></td></tr><tr><td><label for='query'>Enter Problem With Your Device: </label></td><td style='text-align:center' ><textarea name='PROBLEM' id='query' cols='30' rows='6'></textarea></td></tr><tr><td colspan='2' style='text-align:center;' ><input type='submit' name='submit' onclick='query_sub(); return false;' value='Submit'></td></tr></table></form>";
    // document.getElementById('laptop').onclick(back(str,"lap"));
}
function computer(){
    var elem = document.getElementById("com");
    PC = elem.innerHTML;
    elem.innerHTML ="<button id='computer' class='back' onclick='backPC()' ></button><form  method='POST' class='Form-Mobile'><table cellpadding='4' style='height:100%;width:100%'><tr><td><label for='name'>Enter Your Name: </label></td><td style='text-align:center' ><input type='text' name='NAME' id='name'></td></tr><tr><td><label for='email'>Enter Your Mail: </label></td><td style='text-align:center' ><input type='email' name='EMAIL' id='email'></td></tr><tr><td><label for='phone'>Enter Your Phone No: </label></td><td style='text-align:center' ><input type='tel' name='PHONE' id='phone'></td></tr><tr><td><label for='query'>Enter Problem With Your Device: </label></td><td style='text-align:center' ><textarea name='PROBLEM' id='query' cols='30' rows='6'></textarea></td></tr><tr><td colspan='2' style='text-align:center;' ><input type='submit' name='submit' onclick='query_sub(); return false;' value='Submit'></td></tr></table></form>";
    // document.getElementById('computer').onclick(back(str,"com"));
}
function query_sub(){
var name = document.getElementById('name').value;
var mail= document.getElementById('email').value;
var phone= document.getElementById('phone').value;
var query = document.getElementById('query').value;
var obj = new XMLHttpRequest();
obj.onreadystatechange = function (){
    if(this.readyState==4&&this.status==200){
        alert(this.responseText);
        document.getElementById('name').value='';
        document.getElementById('email').value='';
        document.getElementById('phone').value='';
        document.getElementById('query').value='';
    }
}
if(name==''||name==null||name==undefined||!name.match('[a-zA-Z ]')){
alert('Please Enter Your Name Properly...');
}
else if(mail==""||mail==null||!mail.match('^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$')){
    alert('Enter Your Email Properly..');
}
else if(phone==""||phone==null||!phone.match(/^\d{10}$/)){
    alert("Please Enter Phone Number Properly.. ");
}
else if(query==""||query==null||query.length>300){
    alert('Please Enter Query Properly....');
}
else{
    obj.open('GET','../html/query_sub.php?NAME='+name+'&PHONE='+phone+'&PROBLEM='+query+'&EMAIL='+mail);
    obj.send();
}
}