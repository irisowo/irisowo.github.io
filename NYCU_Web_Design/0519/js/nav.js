//JavaScriptDocument

$(document).ready(function(){
	$(".navbox").hover(function(){	
		var _index = $(this).index();	
		$(this).addClass("nav_ch_bg").siblings().removeClass("nav_ch_bg");
		$(".navcontent").eq(_index).show().siblings().hide();			
	});
	
	$(".navcontent").mouseleave(function(){
		var _index = $(this).index();		
		$(this).hide();    	
		$(".navbox").eq(_index).removeClass("nav_ch_bg");			
	});
	

	$("body").mouseleave(function(){
		$(".navcontent").hide();
		$(".navbox").removeClass("nav_ch_bg");
	});
});




