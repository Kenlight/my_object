$(window).ready(function(){
	
var mySwiper = new Swiper('.swiper-container',{
		pagination : '.swiper-pagination',
		paginationType : 'fraction',
		loop : true,
	  	autoplay: 3000,//可选选项，自动滑动
	  	autoplayDisableOnInteraction : false,
		slidesPerView : 'auto',
		loopedSlides :8,
		//pagination : '#swiper-pagination1',
		});
		
		$(window).scroll(function(){
			if($(window).scrollTop()>100){
			$(".flexd_top").css({
				background:"rgba(0,0,0,0.3)",
				borderRadius:"50px"
		
			})
			}else{
			$(".flexd_top").css({
				background:"none",
				borderRadius:"50px"
		
			})	
			}
		});
	// 加入购物车fly动画

$(function() { 
    var offset = $("#end").offset(); 
    $(".addcar").click(function(event){ 
    mui('#detail_sheet').popover('hide');
        var addcar = $(this); 
 		var img = $(".swiper-wrapper li:first").find('img').attr('src'); 
        var flyer = $('<img class="u-flyer" src="'+img+'">'); 
        flyer.attr("width","500px");
        flyer.fly({ 
            start: { 
                left:-500, //开始位置（必填）#fly元素会被设置成position: fixed 
                top:-1000//开始位置（必填）
            }, 
            end: { 
                left: offset.left, //结束位置（必填） 
                top: offset.top, //结束位置（必填） 
                width: 0, //结束时宽度 
                height: 0 //结束时高度 
            },
            onEnd: function(){ //结束回调 
            	
              var i=$(".gouwu_munber").html(); //提示信息 
               i++;
                $(".gouwu_munber").html(i);
                 mui.toast('加入成功',{ duration:'2000ms', type:'div' }) ;
                
            } 
        }); 
    }); 
}); 

// 加入购物车fly动画结束
	//购物车点击规格按钮时所需要的颜色样式

	$(".specifications>li:first").on("click","ol>li",function(e){
	specifications(e);
});
//购物车点击规格按钮时所需要的颜色样式和规格样式
	$(".specifications>li:nth-child(2)").on("click","ol>li",function(e){
	specifications(e);
});
function specifications(e){
	if(e.target.nodeName=="SPAN"){
		e.target=e.target.parentNode;
	}
	var $li=$(e.target);
		$li.addClass("gradient").siblings().removeClass("gradient");

}

//			点击详情图放大效果
			$("#Top_ditail").on("click","img",function(e){
				$(e.target).toggleClass('min');
				$(e.target).toggleClass('max');
			});
//			点击收藏
function collect(){
			var isTrue=true;
			$(".red_i").click(function(){
				if(isTrue){
				$(this).addClass("red");
				mui.toast('收藏成功');
				isTrue=false;
				}else{
						$(this).removeClass("red");
					mui.toast('取消收藏');
					isTrue=true;
				}
				})
			}
	collect();
})	//DOM树加载完成结束符
	