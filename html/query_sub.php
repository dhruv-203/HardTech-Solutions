<?php
date_default_timezone_set('Asia/Kolkata');
$date=date('Y-m-d');
$time=date('h:i:s');
if(!$connect = mysqli_connect("localhost","root","","ADMIN")){
    echo mysqli_connect_error();
}
$que = 'INSERT INTO QUERIES(NAME,PHONE_NO,QUERY,EMAIL,Date,Time) VALUES(?,?,?,?,?,?)';
$prep=mysqli_prepare($connect,$que);
if(!mysqli_stmt_bind_param($prep,'sissss',$_REQUEST['NAME'],$_REQUEST['PHONE'],$_REQUEST['PROBLEM'],$_REQUEST['EMAIL'],$date,$time)){
    echo mysqli_stmt_error($prep);
}
if(!mysqli_stmt_execute($prep)){
    echo mysqli_stmt_error($prep);
}
else{
         echo 'Your Query Has been successfully submitted...';
    
}?>