$(document).ready(function(){

	/* 欢迎首页 - 图片墙 */
	function photoWallCenter() {
		var windowWidth = $(window).width();
		$("#photo-wall").css("left",windowWidth/2 - 800);
		$("#photo-wall").css("width",windowWidth - (windowWidth/2 - 800));
	}
	$(window).resize(photoWallCenter).trigger("resize");

	/* 欢迎首页 - 注册 */
	$("#signup").click(function(){
		$("#toggle-signup-box").fadeToggle(250);
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

	/* SideBar - 自定义分组菜单 */
	$(".popup-custom-button").mouseenter(function(){
		$("#popup-user-list-custom").removeClass("animated fadeOutLeft");
		$("#popup-user-list-custom").addClass("animated fadeInLeft");
		$(".popup-custom-button").addClass("current-button");
		$("#popup-user-list-custom").fadeIn(1000);
	});
	$(".popup-custom").mouseleave(function(){
		$("#popup-user-list-custom").removeClass("animated fadeInLeft");
		$(".popup-custom-button").removeClass("current-button");
		$("#popup-user-list-custom").addClass("animated fadeOutLeft");
		$("#popup-user-list-custom").fadeOut(1000);
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