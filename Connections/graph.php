<?php
# FileName="Connection_php_mysql.htm"
# Type="MYSQL"
# HTTP="true"
$hostname_graph = "localhost";
$database_graph = "thesis";
$username_graph = "root"; //帳號
$password_graph = "3310"; //密碼
// $graph = mysql_pconnect($hostname_graph, $username_graph, $password_graph) or trigger_error(mysql_error(),E_USER_ERROR);
// mysql_query("SET NAMES UTF8");

if ( ! @mysql_connect($hostname_graph,  $username_graph, $password_graph) )
	  die("無法連線資料庫伺服器");

//設定連線的文字集與校對為 UTF8 編碼
	  mysql_query("SET NAMES utf8");

//選擇資料庫
	  if ( ! @mysql_select_db($database_graph) )
		    die("無法使用資料庫");
?>
