<?php
if(!$connect = mysqli_connect("localhost","root","","ADMIN")){
    echo mysqli_connect_error();
}
$que = 'INSERT INTO QUERIES(NAME,PHONE_NO,QUERY,EMAIL) VALUES(?,?,?,?)';
$prep=mysqli_prepare($connect,$que);
if(!mysqli_stmt_bind_param($prep,'siss',$_REQUEST['NAME'],$_REQUEST['PHONE'],$_REQUEST['PROBLEM'],$_REQUEST['EMAIL'])){
    echo mysqli_stmt_error($prep);
}
if(!mysqli_stmt_execute($prep)){
    echo mysqli_stmt_error($prep);
}
else{?>
<script> var bol = alert("Query Submitted... we will contact you soon to confirm your Problem<br>");
    if(bol==false){
        <?php
         $res = mysqli_query($connect,'SELECT QUERY_NO from QUERIES WHERE PHONE_NO = "$_REQUEST[PHONE]"&& QUERY = "$_REQUEST[PROBLEM]"');
         $output=mysqli_fetch_all($res);
         print_r($output);
        ?>
    }
    else{
        <?php header("Location:http://localhost/HardTech-Solutions/html/");?>
    }
</script>
<?php }?>