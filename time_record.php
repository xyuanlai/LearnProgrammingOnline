<?php
require_once('Connections/graph.php');
date_default_timezone_set("Asia/Taipei");

session_start();
switch ($_POST['submit']) {
	case 'start':
		unset($_SESSION['start']);
		unset($_SESSION['stop']);
		$_SESSION['start'] = microtime(true);
		echo 'start: ' . $_SESSION['start'];
		$start_time = date('Y-m-d H:i:s', $_SESSION['start']);
		$insert_sql1 = "INSERT INTO timerecord(`start_time`) VALUES('".$start_time."')";
		$insert_query1 = mysql_query($insert_sql1) or die("errors at start_time!");
		break;
	case 'stop':
		$start_time = date('Y-m-d H:i:s', $_SESSION['start']);
		$_SESSION['stop'] = microtime(true);
		$stop_time = date('Y-m-d H:i:s', $_SESSION['stop']);
		$insert_sql2 = "UPDATE timerecord SET `end_time`='".$stop_time."' WHERE `start_time`='".$start_time."'";
		$insert_query2 = mysql_query($insert_sql2) or die("errors at stop_time!");
		echo 'start: ' . $_SESSION['start'] . '<br />';
		echo 'stop: ' . $_SESSION['stop'] . '<br />';
		break;
	default:
		break;
}
if($_SESSION['start'] && $_SESSION['stop']){
	$rs = $_SESSION['stop'] - $_SESSION['start'];
	$insert_sql3 = "UPDATE timerecord SET `passing_time`='".$rs."' WHERE `start_time`='".$start_time."'";
	$insert_query3 = mysql_query($insert_sql3) or die("errors at stop_time!");
	echo 'total: ' . $rs;
}
?>
<form method="post" action="">
  <input type="submit" name="submit" value="start"/>
  <input type="submit" name="submit" value="stop"/>
</form>