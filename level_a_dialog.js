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
var res2 = res1[1].split("A");
var whichlevel = res2[0];
var nextlevel = parseInt(whichlevel) + 1;

$("#dialog").dialog({
		autoOpen: false,
		height: 200,
		width: 500,
		modal: true,
		resizable: false,
		closeOnEscape: false,
		dialogClass: "no-titlebar",
		buttons: {
				'下一關': function() {
						$(this).dialog('close');
						$.getJSON('./start_record.php?callback=?', "starttime=" + getDateTimeFormate() + "&group=1&level=" +  nextlevel  + "&mid=" + mid,  function(res){});
						location.href = "./Level_" + nextlevel + "A.html";
				}
		},
		open: function() {
			var showtime = getDateTimeFormate();
			$.getJSON('./show_record.php?callback=?', "showtime=" + showtime + "&group=1&level=" +  nextlevel  + "&mid=" + mid,  function(res){});
		}
});
$("#dialog1").dialog({
		autoOpen: false,
		height: 250,
		width: 500,
		modal: true,
		resizable: false,
		closeOnEscape: false,
		dialogClass: "no-titlebar",
		buttons: {
				'關閉': function() {
						$(this).dialog('close');
						$.getJSON('./start_record.php?callback=?', "starttime=" + getDateTimeFormate() + "&group=1&level=" +  whichlevel  + "&mid=" + mid,  function(res){});
						location.reload();
				}
		},
		open: function() {
			var showtime = getDateTimeFormate();
			$.getJSON('./show_record.php?callback=?', "showtime=" + showtime + "&group=1&level=" +  nextlevel  + "&mid=" + mid,  function(res){});
		}
});
$("#dialog2").dialog({
		autoOpen: false,
		height: 250,
		width: 500,
		modal: true,
		resizable: false,
		closeOnEscape: false,
		dialogClass: "no-titlebar",
		buttons: {
				'關閉': function() {
						$(this).dialog('close');
						$.getJSON('./start_record.php?callback=?', "starttime=" + getDateTimeFormate() + "&group=1&level=" +  whichlevel  + "&mid=" + mid,  function(res){});
						location.reload();
				}
		},
		open: function() {
			var showtime = getDateTimeFormate();
			$.getJSON('./show_record.php?callback=?', "showtime=" + showtime + "&group=1&level=" +  nextlevel  + "&mid=" + mid,  function(res){});
		}
});
$("#dialog3").dialog({
		autoOpen: false,
		//height: 250,
		width: 350,
		modal: true,
		resizable: false,
		closeOnEscape: false,
		dialogClass: "no-titlebar",
		buttons: {
				'關閉': function() {
						$(this).dialog('close');
						$.getJSON('./start_record.php?callback=?', "starttime=" + getDateTimeFormate() + "&group=1&level=" +  whichlevel  + "&mid=" + mid,  function(res){});
						location.reload();
				}
		},
		open: function() {
			var showtime = getDateTimeFormate();
			$.getJSON('./show_record.php?callback=?', "showtime=" + showtime + "&mid=" + mid,  function(res){});
		}
});
$(".ui-dialog-titlebar").hide();
$(".ui-dialog-content").css({"font-size": +24+"px"});
$.ui.dialog.prototype._focusTabbable = $.noop;
