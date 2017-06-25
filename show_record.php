<?php
require_once('Connections/graph.php');
date_default_timezone_set("Asia/Taipei");

$show_time = $_GET['showtime'];
$mid = $_GET['mid'];

$select_sql = "SELECT * FROM timerecord WHERE mId=".$mid." ORDER BY tId DESC LIMIT 1";
$select_query = mysql_query($select_sql) or die("errors at select_query!");
$select_result = mysql_fetch_array($select_query);

$stop_time = $select_result['stop_time'];
$stop_time_cal = strtotime($stop_time);
$show_time_cal = strtotime($show_time);
$animate_time_cal = $show_time_cal - $stop_time_cal;

$insert_sql = "UPDATE timerecord SET show_time='".$show_time."' WHERE tId='".$select_result['tId']."'";
$insert_query = mysql_query($insert_sql) or die("errors at show_time!");

$insert_sql2 = "UPDATE timerecord SET `animate_time`='".$animate_time_cal."' WHERE `tId`='".$select_result['tId']."'";
$insert_query2 = mysql_query($insert_sql2) or die("errors at animate_time!");

?>
