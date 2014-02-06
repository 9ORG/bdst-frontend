$(document).ready(function(){

	/* 欢迎首页 - 照片墙 */
	function photoWallCenter() {
		var windowWidth = $(window).width();
		$("#photo-wall").css("left",windowWidth/2 - 800);
		$("#photo-wall").css("width",windowWidth - (windowWidth/2 - 800));
	}
	$(window).resize(photoWallCenter).trigger("resize");
	/* 欢迎首页 - 注册 */
	$("#signup").click(function(){
		// $("#toggle-signup-box").fadeToggle(250);
		if ($("#toggle-signup-box").css("display") == "none") {
			$("#toggle-signup-box").fadeIn(250);
		} else {
			$("#toggle-signup-box").fadeOut(250);
		}
	});
	$("#next-to-2").click(function(){
		$("#signup-step1").hide();
		$("#signup-step2").fadeIn(250);
	});
	$("#back-to-1").click(function(){
		$("#signup-step1").fadeIn(250);
		$("#signup-step2").hide();
	});
	$("#next-to-3").click(function(){
		$("#signup-step2").hide();
		$("#signup-step3").fadeIn(250);
	});
	$("#back-to-2").click(function(){
		$("#signup-step3").hide();
		$("#signup-step2").fadeIn(250);
	});
	/* 欢迎首页 - 忘记密码 */
	$("#forget-password").click(function(){
		// $("#toggle-forget-password-box").fadeToggle(250);
		if ($("#toggle-forget-password-box").css("display") == "none") {
			$("#toggle-forget-password-box").fadeIn(250);
		} else {
			$("#toggle-forget-password-box").fadeOut(250);
		}
	});

	/* Header - 用户菜单 */
	var w = $("#username").width();
	$("#top-user-menu").css("width",220+w);
	$("#username").mouseenter(function(){
		$("#popup-user-menu").removeClass("animated fadeOutLeft");
		$("#popup-user-menu").addClass("animated fadeInLeft");
		$("#popup-user-menu").fadeIn(1000);
	});
	$("#top-user-menu").mouseleave(function(){
		$("#popup-user-menu").removeClass("animated fadeInLeft");
		$("#popup-user-menu").addClass("animated fadeOutLeft");
		$("#popup-user-menu").fadeOut(1000);
	});

	/* 编辑信息 - 信息提示 */
	$(".popup-tips").focusin(function(){
		var id = $(this).attr("id");
		$("#"+id+"-tips").removeClass("animated fadeOutLeft");
		$("#"+id+"-tips").addClass("animated fadeInLeft");
		$("#"+id+"-tips").fadeIn(1000);
	});
	$(".popup-tips").focusout(function(){
		var id = $(this).attr("id");
		$("#"+id+"-tips").removeClass("animated fadeInLeft");
		$("#"+id+"-tips").addClass("animated fadeOutLeft");
		$("#"+id+"-tips").fadeOut(1000);
	});

	/* 用户 - 编辑信息 - 更改手机号码 更改密码 更改邮箱 */
	$("#change-phone-num").click(function(){
		// $("#toggle-change-phone-num-box").fadeToggle(250);
		if ($("#toggle-change-phone-num-box").css("display") == "none") {
			$("#toggle-change-phone-num-box").fadeIn(250);
			$("#toggle-change-password-box").hide();
			$("#toggle-change-email-box").hide();
		} else {
			$("#toggle-change-phone-num-box").fadeOut(250);
		}
	});
	$("#change-password").click(function(){
		// $("#toggle-change-password-box").fadeToggle(250);
		if ($("#toggle-change-password-box").css("display") == "none") {
			$("#toggle-change-password-box").fadeIn(250);
			$("#toggle-change-phone-num-box").hide();
			$("#toggle-change-email-box").hide();
		} else {
			$("#toggle-change-password-box").fadeOut(250);
		}
	});
	$("#change-email").click(function(){
		// $("#toggle-email-box").fadeToggle(250);
		if ($("#toggle-change-email-box").css("display") == "none") {
			$("#toggle-change-email-box").fadeIn(250);
			$("#toggle-change-phone-num-box").hide();
			$("#toggle-change-password-box").hide();
		} else {
			$("#toggle-change-email-box").fadeOut(250);
		}
	});

	/* 社团后台 - SideBar - 自定义分组菜单 */
	// $(".popup-custom-button").mouseenter(function(){
	// 	$("#popup-user-list-custom").removeClass("animated fadeOutLeft");
	// 	$("#popup-user-list-custom").addClass("animated fadeInLeft");
	// 	$(".popup-custom-button").addClass("current-button");
	// 	$("#popup-user-list-custom").fadeIn(1000);
	// });
	// $(".popup-custom").mouseleave(function(){
	// 	$("#popup-user-list-custom").removeClass("animated fadeInLeft");
	// 	$(".popup-custom-button").removeClass("current-button");
	// 	$("#popup-user-list-custom").addClass("animated fadeOutLeft");
	// 	$("#popup-user-list-custom").fadeOut(1000);
	// });
	$(".popup-custom").mouseenter(function(){
		$(".popup-custom-button").addClass("current-button");
		// $("#popup-user-list-custom").fadeIn(250);
		$("#popup-user-list-custom").slideDown(250);
	});
	$(".popup-custom").mouseleave(function(){
		$(".popup-custom-button").removeClass("current-button");
		// $("#popup-user-list-custom").fadeOut(250);
		$("#popup-user-list-custom").slideUp(250);
	});
	/* 社团后台 - 增加管理员 增加分组 */
	$("#cancel-stage").click(function(){
		$(".popup-stage").hide();
	});
	$("#add-admin").click(function(){
		if ($("#popup-stage-add-admin").css("display") == "none") {
			$("#popup-stage-add-admin").show();
		} else {
			$("#popup-stage-add-admin").hide();
		}
	});
	$("#add-custom-group").click(function(){
		if ($("#popup-stage-add-custom-group").css("display") == "none") {
			$("#popup-stage-add-custom-group").show();
		} else {
			$("#popup-stage-add-custom-group").hide();
		}
	});

	/* 活动首页 - Tab切换 */
	$("#activity-detail-tab-button").click(function(){
		$(this).addClass("current");
		$("#activity-library-tab-button").removeClass("current");
		$("#activity-detail-tab").removeClass("hidden");
		$("#activity-library-tab").addClass("hidden");
	});
	$("#activity-library-tab-button").click(function(){
		$(this).addClass("current");
		$("#activity-detail-tab-button").removeClass("current");
		$("#activity-library-tab").removeClass("hidden");
		$("#activity-detail-tab").addClass("hidden");
	});
	/* 社团 - 编辑信息 - 上传封面 */
	$("#club-change-cover").click(function(){
		// $("#toggle-club-change-cover-box").fadeToggle(250);
		if ($("#toggle-club-change-cover-box").css("display") == "none") {
			$("#toggle-club-change-cover-box").fadeIn(250);
		} else {
			$("#toggle-club-change-cover-box").fadeOut(250);
		}
	});

	/* 社团首页 - 申请入会 */
	$("#apply").click(function(){
		$("#popup-stage-apply-for-club").show();
	});
	$("#submit-regulation").click(function(){
		$("#apply-step1").hide();
		$("#apply-step2").fadeIn(250);
	});
	$("#submit-group").click(function(){
		$("#apply-step2").hide();
		$("#apply-step3").fadeIn(250);
	});
	$(".cancel-stage").click(function(){
		$(".popup-stage").hide();
		$("#apply-step1").show();
		$("#apply-step2").hide();
		$("#apply-step3").hide();
	});
	/* 社团首页 - 全屏背景 */
	var theWindow = $(window),
		$cover = $("#club-cover"),
		aspectRatio = $cover.width() / $cover.height();
	function resizeCover() {
		if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
			$cover
				.removeClass()
				.addClass("cover-height")
				.css("top",$(window).height()/2 - $cover.height()/2);
		} else {
			$cover
				.removeClass()
				.addClass("cover-width")
				.css("top",$(window).height()/2 - $cover.height()/2);
		}
	}
	theWindow.resize(resizeCover).trigger("resize");
	/* 社团首页 - 封面图集 */
	$(".club-cover-img1").click(function(){
		$("#club-cover").attr("src","../img/club-id001/club-id001-cover1.jpg");
		$(".club-cover-img1").addClass("current");
		$(".club-cover-img2").removeClass("current");
		$(".club-cover-img3").removeClass("current");
		$(".club-cover-img4").removeClass("current");
		$(".club-cover-img5").removeClass("current");
		$(".club-cover-img6").removeClass("current");
	});
	$(".club-cover-img2").click(function(){
		$("#club-cover").attr("src","../img/club-id001/club-id001-cover2.jpg");
		$(".club-cover-img1").removeClass("current");
		$(".club-cover-img2").addClass("current");
		$(".club-cover-img3").removeClass("current");
		$(".club-cover-img4").removeClass("current");
		$(".club-cover-img5").removeClass("current");
		$(".club-cover-img6").removeClass("current");
	});
	$(".club-cover-img3").click(function(){
		$("#club-cover").attr("src","../img/club-id001/club-id001-cover3.jpg");
		$(".club-cover-img1").removeClass("current");
		$(".club-cover-img2").removeClass("current");
		$(".club-cover-img3").addClass("current");
		$(".club-cover-img4").removeClass("current");
		$(".club-cover-img5").removeClass("current");
		$(".club-cover-img6").removeClass("current");
	});
	$(".club-cover-img4").click(function(){
		$("#club-cover").attr("src","../img/club-id001/club-id001-cover4.jpg");
		$(".club-cover-img1").removeClass("current");
		$(".club-cover-img2").removeClass("current");
		$(".club-cover-img3").removeClass("current");
		$(".club-cover-img4").addClass("current");
		$(".club-cover-img5").removeClass("current");
		$(".club-cover-img6").removeClass("current");
	});
	$(".club-cover-img5").click(function(){
		$("#club-cover").attr("src","../img/club-id001/club-id001-cover5.jpg");
		$(".club-cover-img1").removeClass("current");
		$(".club-cover-img2").removeClass("current");
		$(".club-cover-img3").removeClass("current");
		$(".club-cover-img4").removeClass("current");
		$(".club-cover-img5").addClass("current");
		$(".club-cover-img6").removeClass("current");
	});
	$(".club-cover-img6").click(function(){
		$("#club-cover").attr("src","../img/club-id001/club-id001-cover6.jpg");
		$(".club-cover-img1").removeClass("current");
		$(".club-cover-img2").removeClass("current");
		$(".club-cover-img3").removeClass("current");
		$(".club-cover-img4").removeClass("current");
		$(".club-cover-img5").removeClass("current");
		$(".club-cover-img6").addClass("current");
	});

});