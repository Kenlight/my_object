window.onload=function(){
		var mySwiper = new Swiper('.swiper-container',{
		pagination : '.swiper-pagination',
		loop : true,
	  	autoplay: 3000,//可选选项，自动滑动
	  	autoplayDisableOnInteraction : false,
		slidesPerView : 'auto',
		loopedSlides :8,
		//pagination : '#swiper-pagination1',
		});
		
		function view_height(){
//		控制商品品类中左边的div高度与右边ul高度一样高
console.log($("#classification_r").css("height"))
		$(".classification_left").css("height",$("#classification_r").css("height"));
//		控制礼遇新年中的li高度
		var C_height=$(".Commodity_list ul li").css("width");
		$(".Commodity_list ul li").css("height",parseFloat(C_height)*0.8+"px")
		//		控制商品品类中的li高度
		$("ul.classification-right  li").css("height",$(".ul.classification-right li").css("width"));

		//		控制新品上架左边的div高度与右边div高度一样高
		$(".New_arrivals_left").css("height",$(".New_arrivals_right").css("height"));
				//		控制精品推荐的ul下li宽高度一样
		$("ul.Boutique_recommendation li").css("height",$("ul.Boutique_recommendation li").css("width"));
		
				//	热卖商品的ul下li宽高度一样
		$("ul.Commodity_hot li img").css("height",$("ul.Commodity_hot li img").css("width"));
		}
		view_height();

}
