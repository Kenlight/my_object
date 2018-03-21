$(function(){
	$(".stwichTap").on("click","p",function(){
		$(this).addClass("on").siblings().removeClass("on");
		var index=$(this).index();
		$(".list").eq(index).show().siblings().hide();
	});
	
	$(".list_left").on("click","li",function(){
		$(this).addClass("hover").siblings().removeClass("hover");
		var index=$(this).index();
		$(".classTab").eq(index).show().siblings().hide();
	})
})
