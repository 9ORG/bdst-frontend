$(document).ready(function(){

	var w = $("#username").width();
	$("#top-user-menu").mouseenter(function(){
		// $("#top-logo-text").css("color","#fff");
		$("#top-user-menu").css("width",220+w);
		$("#popup-user-menu").removeClass("animated fadeOutLeft");
		$("#popup-user-menu").addClass("animated fadeInLeft");
		$("#popup-user-menu").removeClass("hidden");
	});
	$("#top-user-menu").mouseleave(function(){
		// $("#top-logo-text").css("color","#ff9900");
		$("#popup-user-menu").removeClass("animated fadeInLeft");
		$("#popup-user-menu").addClass("animated fadeOutLeft",function(){
			$("#popup-user-menu").addClass("hidden");
			$("#top-user-menu").css("width",w);
		});
	});

	$(".pupup-tips").focusin(function(){
		var id = $(this).attr("id");
		$("#"+id+"-tips").removeClass("animated fadeOutLeft");
		$("#"+id+"-tips").addClass("animated fadeInLeft");
		$("#"+id+"-tips").removeClass("hidden");
	});
	$(".pupup-tips").focusout(function(){
		var id = $(this).attr("id");
		$("#"+id+"-tips").removeClass("animated fadeInLeft");
		$("#"+id+"-tips").addClass("animated fadeOutLeft",function(){
			$("#"+id+"-tips").addClass("hidden");
		});
	});

});