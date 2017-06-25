<?php
require_once('Connections/graph.php');

$select_sql = "SELECT `passing_time` FROM `timerecord` WHERE `tId`=3";
$select_query = mysql_query($select_sql) or die(mysql_error());
$result = mysql_fetch_array($select_query);
// echo $result[0];

if($result[0] <= 1){
	header("Content-Type: application/json");
	$response = array();
	$response["mindwave"] = 1;
	echo @$_GET['callback'] . '(' . "{'mindwave' : '1'}" . ')';
}else{
	header("Content-Type: application/json");
	$response = array();
	$response["mindwave"] = 2;
	echo @$_GET['callback'] . '(' . "{'mindwave' : '2'}" . ')';
}

?>