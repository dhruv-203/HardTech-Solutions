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
    elem.innerHTML ="<button id='mobile' class='back' onclick='backMobile()'></button> <form  method='POST' class='Form-Mobile'> <table cellpadding='4' style='height:100%;width:95%;'> <tr> <td> <label for='namemob'>Enter Your Name: </label> </td> <td style='text-align:center' > <input type='text' name='NAME' id='namemob'> </td> </tr> <tr> <td> <label for='emailmob'>Enter Your Mail: </label> </td> <td style='text-align:center' ><input type='email' name='EMAIL' id='emailmob'></td></tr><tr><td><label for='phonemob'>Enter Your Phone No: </label></td><td style='text-align:center' ><input type='tel' name='PHONE' id='phonemob'></td></tr><tr><td><label for='querymob'>Enter Problem With Your Device: </label></td><td style='text-align:center' ><textarea name='PROBLEM' id='querymob' cols='30' rows='6'></textarea></td></tr><tr><td colspan='2' style='text-align:center;' ><input type='submit' name='submit' onclick='query_sub_mob(); return false;' value='Submit'></td></tr></table></form>";
    //run();
}

function laptop(){
    var elem = document.getElementById("lap");
    lap = elem.innerHTML;
    elem.innerHTML ="<button id='laptop' class='back' onclick='backLaptop()' ></button><form  method='POST'class='Form-Mobile'><table cellpadding='4' style='height:100%;width:95%'><tr><td><label for='namelap'>Enter Your Name: </label></td><td style='text-align:center' ><input type='text' name='NAME' id='namelap'></td></tr><tr><td><label for='emaillap'>Enter Your Mail: </label></td><td style='text-align:center' ><input type='email' name='EMAIL' id='emaillap'></td></tr><tr><td><label for='phonelap'>Enter Your Phone No: </label></td><td style='text-align:center' ><input type='tel' name='PHONE' id='phonelap'></td></tr><tr><td><label for='querylap'>Enter Problem With Your Device: </label></td><td style='text-align:center' ><textarea name='PROBLEM' id='querylap' cols='30' rows='6'></textarea></td></tr><tr><td colspan='2' style='text-align:center;' ><input type='submit' name='submit' onclick='query_sub_lap(); return false;' value='Submit'></td></tr></table></form>";
    // document.getElementById('laptop').onclick(back(str,"lap"));
}
function computer(){
    var elem = document.getElementById("com");
    PC = elem.innerHTML;
    elem.innerHTML ="<button id='computer' class='back' onclick='backPC()' ></button><form  method='POST' class='Form-Mobile'><table cellpadding='4' style='height:100%;width:100%'><tr><td><label for='namepc'>Enter Your Name: </label></td><td style='text-align:center' ><input type='text' name='NAME' id='namepc'></td></tr><tr><td><label for='emailpc'>Enter Your Mail: </label></td><td style='text-align:center' ><input type='email' name='EMAIL' id='emailpc'></td></tr><tr><td><label for='phonepc'>Enter Your Phone No: </label></td><td style='text-align:center' ><input type='tel' name='PHONE' id='phonepc'></td></tr><tr><td><label for='querypc'>Enter Problem With Your Device: </label></td><td style='text-align:center' ><textarea name='PROBLEM' id='querypc' cols='30' rows='6'></textarea></td></tr><tr><td colspan='2' style='text-align:center;' ><input type='submit' name='submit' onclick='query_sub_pc(); return false;' value='Submit'></td></tr></table></form>";
    // document.getElementById('computer').onclick(back(str,"com"));
}
function query_sub_mob(){
var name = document.getElementById('namemob').value;
var mail= document.getElementById('emailmob').value;
var phone= document.getElementById('phonemob').value;
var query = document.getElementById('querymob').value;
var obj = new XMLHttpRequest();
obj.onreadystatechange = function (){
    if(this.readyState==4&&this.status==200){
        alert(this.responseText);
        document.getElementById('namemob').value='';
        document.getElementById('emailmob').value='';
        document.getElementById('phonemob').value='';
        document.getElementById('querymob').value='';
    }
}
if(name==''||name==null||name==undefined||!name.match('[a-zA-Z ]')){
alert('Please Enter Your Name Properly...',name);
}
else if(mail==""||mail==null||!mail.match('^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$')){
    alert('Enter Your Email Properly..');
}
else if(phone=="" || phone==null || !phone.match("^[0-9]{10}$")){
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
function query_sub_lap(){
var name = document.getElementById('namelap').value;
var mail= document.getElementById('emaillap').value;
var phone= document.getElementById('phonelap').value;
var query = document.getElementById('querylap').value;
var obj = new XMLHttpRequest();
obj.onreadystatechange = function (){
    if(this.readyState==4&&this.status==200){
        alert(this.responseText);
        document.getElementById('namelap').value='';
        document.getElementById('emaillap').value='';
        document.getElementById('phonelap').value='';
        document.getElementById('querylap').value='';
    }
}
if(name==''||name==null||name==undefined||!name.match('[a-zA-Z ]')){
alert('Please Enter Your Name Properly...');
}
else if(mail==""||mail==null||!mail.match('^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$')){
    alert('Enter Your Email Properly..');
}
else if(phone=="" || phone==null || !phone.match("^[0-9]{10}$")){
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
function query_sub_pc(){
var name = document.getElementById('namepc').value;
var mail= document.getElementById('emailpc').value;
var phone= document.getElementById('phonepc').value;
var query = document.getElementById('querypc').value;
var obj = new XMLHttpRequest();
obj.onreadystatechange = function (){
    if(this.readyState==4&&this.status==200){
        alert(this.responseText);
        document.getElementById('namepc').value='';
        document.getElementById('emailpc').value='';
        document.getElementById('phonepc').value='';
        document.getElementById('querypc').value='';
    }
}
if(name==''||name==null||name==undefined||!name.match('[a-zA-Z ]')){
alert('Please Enter Your Name Properly...');
}
else if(mail==""||mail==null||!mail.match('^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$')){
    alert('Enter Your Email Properly..');
}
else if(phone=="" || phone==null || !phone.match("^[0-9]{10}$")){
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