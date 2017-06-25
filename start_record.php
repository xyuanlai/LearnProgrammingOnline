<?php
require_once('Connections/graph.php');
date_default_timezone_set("Asia/Taipei");

$start_time = $_GET['starttime'];
$level = $_GET['level'];
$group = $_GET['group'];
$mid = $_GET['mid'];

$select_sql = "SELECT * FROM timerecord WHERE mId=".$mid." ORDER BY tId DESC LIMIT 1";
$select_query = mysql_query($select_sql) or die("errors at select_query!");
$select_result = mysql_fetch_array($select_query);

$show_time = $select_result['show_time'];
$show_time_cal = strtotime($show_time);
$start_time_cal = strtotime($start_time);
$prompt_time_cal = $start_time_cal - $show_time_cal;

$insert_sql2 = "UPDATE timerecord SET `prompt_time`='".$prompt_time_cal."' WHERE `tId`='".$select_result['tId']."'";
$insert_query2 = mysql_query($insert_sql2) or die("errors at pass_time!");


$insert_sql = "INSERT INTO timerecord(`mId`, `start_time`, `level`, `group`) VALUES('".$mid."', '".$start_time."', '".$level."', '".$group."')";
$insert_query = mysql_query($insert_sql) or die("errors at start_time!");

?>
