<?php
session_start();
require_once('Connections/graph.php');

$name = $_POST['name'];
$gender = $_POST['gender'];
$age = $_POST['age'];
$department = $_POST['department'];
$prgrambackground = $_POST['prgrambackground'];
$prgramstarttime = $_POST['prgramstarttime'];
$prgramconfident = $_POST['prgramconfident'];
$language = $_POST['language'];

$sql = "'".$name."', '".$gender."', '".$age."', '".$department."', '".$prgrambackground."', '".$prgramstarttime."', '".$prgramconfident."', '".$language."'";
 //echo $sql;
$insert_sql = "INSERT INTO member(`name`, `gender`, `age`, `department`, `background`, `starttime`, `confidence`, `language`) VALUES(".$sql.")";
echo $insert_sql;
$insert_query = mysql_query($insert_sql) or die("errors at insert!");

$_SESSION['name']=$name;

$select_sql = "SELECT * FROM member WHERE `name`='".$_SESSION['name']."'";
// echo $select_sql;
$select_query = mysql_query($select_sql) or die("errors at select!");
$select_result = mysql_fetch_array($select_query);

$_SESSION['mid']=$select_result['mId'];
// echo $_SESSION['unique_mid'];

header ("Location:http://localhost/xys/Level_0.html?mId=".$_SESSION['mid']);

?>
