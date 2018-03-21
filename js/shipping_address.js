$(function(){
	$('.del').on('tap',function(){
		var msg = ['取消','确认'];
		mui.confirm("确认删除订单？",function(e){
		    if(e.index==1){
		    	for(var i=0;i<$('.comments').length;i++){
		    		 $('.comments')[i].remove();
		    	}
		       
		    }
		})
	});
	
	//关闭
	$('#cancel').on('tap',function(){
		$('pay_choose').remove();
		var a = this,
		parent;
		//根据点击按钮，反推当前是哪个actionsheet
		for (parent = a.parentNode; parent != document.body; parent = parent.parentNode) {
			if (parent.classList.contains('mui-popover-action')) {
				break;
			}
		}
		//关闭actionsheet
		mui('#' + parent.id).popover('toggle');
	})
	
})

//点击改变字体颜色
$(function(){
	$('.mui-radio').on('tap',function(){
		$(this).find('label').addClass('on').parents('.comments').siblings('.comments').find("label").removeClass('on');
	})			
})