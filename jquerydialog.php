<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>dialog demo</title>
  <link rel="stylesheet" href="http://code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
  <script src="http://code.jquery.com/jquery-1.10.2.js"></script>
  <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
  <style>
	 #targetElement {
	    height: 500px;
	    background: #9cf;
	  }
	.dlg-no-close .ui-dialog-titlebar-close {
		display: none;
	}

  </style>
</head>

<body>
	<!-- <div id="targetElement">	
	</div> -->

	<button id="opener">open the dialog</button>
	<div id="dialog" title="Dialog Title"></div>

	<script>
			$("#dialog").dialog({
				autoOpen: false,
				width: 300,
				position: { my: 'center center', at: 'center center', of: '#targetElement'},
				modal: true,
				resizable: false,
				closeOnEscape: false
			});

			$("#dialog").dialog({
				dialogClass: "dlg-no-close"
			});

			$( "#opener" ).click(function() {
				$("#dialog").dialog("open");
			});					
	</script>
	<script>
	$("#dialog").ready(function(){		     
		$.getJSON('http://127.0.0.1/3310/test.php?callback=?', function(res){
		  if (res.mindwave==1)
		  {
		    $('#dialog').html('<img src="pic/001.jpg" /><h4 style="text-align:center">xyuan I <label style="color:red">love</label> U</h4><br><div style="float:right"><button style="background:-webkit-linear-gradient(top, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);border-radius:8px">open</button></div>');
		  }
		  else if (res.mindwave==2)
		  {
		    $('#dialog').html('2');
		  }
		});
	});
	</script>
</body>

</html>