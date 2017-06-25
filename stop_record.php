<?php
require_once('Connections/graph.php');
date_default_timezone_set("Asia/Taipei");

$stop_time = $_GET['stoptime'];
$mid = $_GET['mid'];
$fail = $_GET['fail'];
$blocks = $_GET['blocks'];

$select_sql = "SELECT * FROM timerecord WHERE mId=".$mid." ORDER BY timerecord.tId DESC LIMIT 1";
$select_query = mysql_query($select_sql) or die("errors at select_query!");
$select_result = mysql_fetch_array($select_query);

$start_time = $select_result['start_time'];
$start_time_cal = strtotime($start_time);
$stop_time_cal = strtotime($stop_time);
$pass_time_cal = $stop_time_cal - $start_time_cal;


$select_sql_bw = "SELECT * FROM mindwaverecord WHERE mId=".$mid." ORDER BY mwId";
$select_query_bw = mysql_query($select_sql_bw) or die("errors at select_sql_bw!");

$total_att = -10;
while($select_result_bw = mysql_fetch_array($select_query_bw)){
	$time_bw = $select_result_bw['time'];
	$time_bw_cal = strtotime($time_bw);
	if($time_bw_cal >= $start_time_cal && $time_bw_cal <= $stop_time_cal){
		$total_att = $total_att + $select_result_bw['attentionarea'];
	}
}

header("Content-Type: application/json");
echo @$_GET['callback'] . '(' . "{'total_att' : ".$total_att."}" . ')';


$insert_sql = "UPDATE timerecord SET stop_time='".$stop_time."' WHERE tId='".$select_result['tId']."'";
$insert_query = mysql_query($insert_sql) or die("errors at stop_time!");

$insert_sql2 = "UPDATE timerecord SET pass_time='".$pass_time_cal."' WHERE tId='".$select_result['tId']."'";
$insert_query2 = mysql_query($insert_sql2) or die("errors at pass_time!");

$insert_sql3 = "UPDATE timerecord SET fail='".$fail."' WHERE tId='".$select_result['tId']."'";
$insert_query3 = mysql_query($insert_sql3) or die("errors at fail!");

$insert_sql4 = "UPDATE timerecord SET attentionlevel='".$total_att."' WHERE tId='".$select_result['tId']."'";
$insert_query4 = mysql_query($insert_sql4) or die("errors at attentionlevel!");

$insert_sql5 = "UPDATE timerecord SET blocks='".$blocks."' WHERE tId='".$select_result['tId']."'";
$insert_query5 = mysql_query($insert_sql5) or die("errors at blocks!");
?>
