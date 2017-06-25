function getDateTimeFormate() {
	now = new Date();
	year = "" + now.getFullYear();
	month = "" + (now.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
	day = "" + now.getDate(); if (day.length == 1) { day = "0" + day; }
	hour = "" + now.getHours(); if (hour.length == 1) { hour = "0" + hour; }
	minute = "" + now.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
	second = "" + now.getSeconds(); if (second.length == 1) { second = "0" + second; }
	return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}

var mid = sessionStorage.getItem("mId");
var url = location.href;
var res1 = url.split("_");
var res2 = res1[1].split("B");
var whichlevel = res2[0];
var nextlevel = parseInt(whichlevel) + 1;
var requirechecknum_prompt1 = [0, 2, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 3, 3];
var requirechecknum_prompt2 = [0, 2, 3, 4, 4, 3, 3, 2, 2, 3, 2, 2, 3, 5];


var dropnum = 0;
var level_prompt1 = [0, 2, 3, 2, 3, 2, 3, 2, 3, 3, 2, 3, 3, 3];
var level_prompt2 = [0, 2, 3, 4, 4, 3, 3, 2, 2, 3, 2, 2, 3, 5];
var funcs = [];

for(var i = 1; i <= level_prompt1[whichlevel]; i++){
	funcs.push( function() {
		$( eval('"#drag1-1-" + i')).draggable();
		$( '"#drop1-1-" + i' ).droppable({
			accept: '"#drag1-1-" + i',
			tolerance: "pointer",
			drop: function( event, ui ) {
				$( '"#drag1-1-" + i').draggable( "disable" );
				$( '"#drag1-1-" + i' ).position({
					my: "center",
					at: "center",
					of: '"#drop1-1-" + i'
				});
				$( this ).addClass( "ui-state-highlight" ).html( "" );
				dropnum++;
			}
		});
	});

	funcs.push( function() {
		$( '"#drag2-1-" + i').draggable();
		$( '"#drop2-1-" + i' ).droppable({
			accept: '"#drag2-1-" + i',
			tolerance: "pointer",
			drop: function( event, ui ) {
				$( '"#drag2-1-" + i').draggable( "disable" );
				$( '"#drag2-1-" + i' ).position({
					my: "center",
					at: "center",
					of: '"#drop2-1-" + i'
				});
				$( this ).addClass( "ui-state-highlight" ).html( "" );
				dropnum++;
			}
		});
	});

	funcs.push( function() {
		$( '"#drag1-2-" + i').draggable();
		$( '"#drop1-2-" + i' ).droppable({
			accept: '"#drag1-2-" + i',
			tolerance: "pointer",
			drop: function( event, ui ) {
				$( '"#drag1-2-" + i').draggable( "disable" );
				$( '"#drag1-2-" + i' ).position({
					my: "center",
					at: "center",
					of: '"#drop1-2-" + i'
				});
				$( this ).addClass( "ui-state-highlight" ).html( "" );
				dropnum++;
			}
		});
	});

	funcs.push( function() {
		$( '"#drag2-2-" + i').draggable();
		$( '"#drop2-2-" + i' ).droppable({
			accept: '"#drag2-2-" + i',
			tolerance: "pointer",
			drop: function( event, ui ) {
				$( '"#drag2-2-" + i').draggable( "disable" );
				$( '"#drag2-2-" + i' ).position({
					my: "center",
					at: "center",
					of: '"#drop2-2-" + i'
				});
				$( this ).addClass( "ui-state-highlight" ).html( "" );
				dropnum++;
			}
		});
	});
}

for(var j = 0; j < funcs.length; j++){
	funcs[j]();
}
//
// $(function() {
//
// 	$( "#drag1" ).draggable();
// 	$( "#drag2" ).draggable();
//
// 	$( "#drop1" ).droppable({
// 		accept: "#drag1",
// 		tolerance: "pointer",
// 		drop: function( event, ui ) {
// 			$( "#drag1" ).draggable( "disable" );
// 			$( "#drag1" ).position({
// 				my: "center",
// 				at: "center",
// 				of: "#drop1"
// 			});
// 			$( this ).addClass( "ui-state-highlight" ).html( "" );
// 			dropnum++;
// 		}
// 	});
// 	$( "#drop2" ).droppable({
// 		accept: "#drag2",
// 		tolerance: "pointer",
// 		drop: function( event, ui ) {
// 			$( "#drag2" ).draggable( "disable" );
// 			$( "#drag2" ).position({
// 				my: "center",
// 				at: "center",
// 				of: "#drop2"
// 			});
// 			$( this ).addClass( "ui-state-highlight" ).html( "" );
// 			dropnum++;
// 		}
// 	});
//
// });


$("#dialog").dialog({
		autoOpen: false,
		height: 200,
		width: 500,
		modal: true,
		resizable: false,
		closeOnEscape: false,
		buttons: {
				'下一關': function() {
						$(this).dialog('close');
						$.getJSON('./start_record.php?callback=?', "starttime=" + getDateTimeFormate() + "&group=2&level=" +  nextlevel  + "&mid=" + mid,  function(res){});
						location.href = "./Level_" +  nextlevel  + "B.html";
				}
		}
});
$("#dialog1-1").dialog({
		autoOpen: false,
		width: 500,
		modal: true,
		resizable: false,
		closeOnEscape: false,
		buttons: {
				'關閉': function() {
						var checkboxs = document.getElementsByName("promptCheck1");
						var checknum = 0;
						for(var i=0 ; i<checkboxs.length ; i++){
							if(checkboxs[i].checked == true){
								checknum ++;
							}
						}
						if(checknum == requirechecknum_prompt1[whichlevel]){
							$(this).dialog('close');
							$.getJSON('./start_record.php?callback=?', "starttime=" + getDateTimeFormate() + "&group=2&level=" +  whichlevel  + "&mid=" + mid,  function(res){});
							location.reload();
						}else{
							$("#dialog1-1").append( "<br/><span style='color:red;  font-size:16px;'>請勾選所有方塊</span>" );
						}
				}
		}
});
$("#dialog2-1").dialog({
		autoOpen: false,
		width: 500,
		modal: true,
		resizable: false,
		closeOnEscape: false,
		buttons: {
				'關閉': function() {
						var checkboxs = document.getElementsByName("promptCheck2");
						var checknum = 0;
						for(var i=0 ; i<checkboxs.length ; i++){
							if(checkboxs[i].checked == true){
								checknum ++;
							}
						}
						if(checknum == requirechecknum_prompt2[whichlevel]){
							$(this).dialog('close');
							$.getJSON('./start_record.php?callback=?', "starttime=" + getDateTimeFormate() + "&group=2&level=" +  whichlevel  + "&mid=" + mid,  function(res){});
							location.reload();
						}else{
							$("#dialog2-1").append( "<br/><span style='color:red;  font-size:16px;'>請勾選所有方塊</span>" );
						}
				}
		}
});
$("#dialog3-1").dialog({
		autoOpen: false,
		width: 500,
		modal: true,
		resizable: false,
		closeOnEscape: false,
		buttons: {
				'關閉': function() {
						$(this).dialog('close');
						$.getJSON('./start_record.php?callback=?', "starttime=" + getDateTimeFormate() + "&group=2&level=" +  whichlevel  + "&mid=" + mid,  function(res){});
						location.reload();
				}
		}
});

$("#dialog1-2").dialog({
		autoOpen: false,
		width: 690,
		modal: true,
		resizable: false,
		closeOnEscape: false,
		buttons: {
				'關閉': function() {
						var checkboxs = document.getElementsByName("promptCheck3");
						var checknum = 0;
						for(var i=0 ; i<checkboxs.length ; i++){
							if(checkboxs[i].checked == true){
								checknum ++;
							}
						}
						if(checknum == requirechecknum_prompt1[whichlevel]){
							$(this).dialog('close');
							$.getJSON('./start_record.php?callback=?', "starttime=" + getDateTimeFormate() + "&group=2&level=" +  whichlevel  + "&mid=" + mid,  function(res){});
							location.reload();
						}else{
							$("#dialog1-2").append( "<br/><span style='color:red; font-size:16px;'>請勾選所有方塊</span>" );
						}
				}
		}
});
$("#dialog2-2").dialog({
		autoOpen: false,
		width: 690,
		modal: true,
		resizable: false,
		closeOnEscape: false,
		buttons: {
				'關閉': function() {
						var checkboxs = document.getElementsByName("promptCheck4");
						var checknum = 0;
						for(var i=0 ; i<checkboxs.length ; i++){
							if(checkboxs[i].checked == true){
								checknum ++;
							}
						}
						if(checknum == requirechecknum_prompt2[whichlevel]){
							$(this).dialog('close');
							$.getJSON('./start_record.php?callback=?', "starttime=" + getDateTimeFormate() + "&group=2&level=" +  whichlevel  + "&mid=" + mid,  function(res){});
							location.reload();
						}else{
							$("#dialog2-2").append( "<br/><span style='color:red;  font-size:16px;'>請勾選所有方塊</span>" );
						}
				}
		}
});
$("#dialog3-2").dialog({
		autoOpen: false,
		width: 500,
		modal: true,
		resizable: false,
		closeOnEscape: false,
		buttons: {
				'關閉': function() {
						$(this).dialog('close');
						$.getJSON('./start_record.php?callback=?', "starttime=" + getDateTimeFormate() + "&group=2&level=" +  whichlevel  + "&mid=" + mid,  function(res){});
						location.reload();
				}
		}
});

$(".ui-dialog-titlebar").hide();
$(".ui-dialog-content").css({"font-size": +24+"px"});
$.ui.dialog.prototype._focusTabbable = $.noop;
