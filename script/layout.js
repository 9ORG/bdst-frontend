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

	$(".popup-check").focusout(function(){
		var id = $(this).attr("id");
		// $("#"+id+"-check").removeClass("animated fadeInLeft");
		// $("#"+id+"-check").addClass("animated fadeInLeft");
		$("#"+id+"-check").removeClass("hidden");
	});

	$(".popup-tips").focusin(function(){
		var id = $(this).attr("id");
		$("#"+id+"-tips").removeClass("animated fadeOutLeft");
		$("#"+id+"-tips").addClass("animated fadeInLeft");
		$("#"+id+"-tips").removeClass("hidden");
	});
	$(".popup-tips").focusout(function(){
		var id = $(this).attr("id");
		$("#"+id+"-tips").removeClass("animated fadeInLeft");
		$("#"+id+"-tips").addClass("animated fadeOutLeft",function(){
			$("#"+id+"-tips").addClass("hidden");
		});
	});

	$(".popup-custom-button").mouseenter(function(){
		$("#popup-user-list-custom").removeClass("animated fadeOutLeft");
		$("#popup-user-list-custom").addClass("animated fadeInLeft");
		$(".popup-custom-button").addClass("current-button");
		$("#popup-user-list-custom").removeClass("hidden");
	});
	$(".popup-custom").mouseleave(function(){
		$("#popup-user-list-custom").removeClass("animated fadeInLeft");
		$(".popup-custom-button").removeClass("current-button");
		$("#popup-user-list-custom").addClass("animated fadeOutLeft",function(){
			$("#popup-user-list-custom").addClass("hidden");
		});
	});

});