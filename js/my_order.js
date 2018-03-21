$(function(){
	$('.stwichTap p').click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index=$(this).index();
		$('.list').eq(index).show().siblings().hide();
	});
	
	/*给单选框或复选框添加样式*/
	function checkbox($this){
		if($this.attr('type')=="checkbox"){
			   if ($this.attr('checked')=="checked") {
			   	$this.removeAttr("checked");
			   	 $this.next('img').attr("src","images/c_checkbox_off.png");
			   }else{
			   	 $this.attr("checked","checked");
			   	$this.next('img').attr("src","images/c_checkbox_on.png");
			   }
			}
	}
	/*给单选框或复选框添加样式*/
	/*子项全选*/
	$('.list input[type=checkbox]').change(function(){
		var $list_input=$(this).parents('.list').next('ul').find('input[type=checkbox]');
			if ($(this).attr("checked")==undefined) {
				$list_input.attr("checked","checked");
				$list_input.next('img').attr("src","images/c_checkbox_on.png");
			}else{
				$list_input.removeAttr("checked");
				$list_input.next('img').attr("src","images/c_checkbox_off.png");
			} 
			checkbox($(this));
	})
	/*子项全选*/
	
	//移除商品
	$('#del').on('tap',function(){
		var btnArray = ['否', '是'];
		mui.confirm('删除之后可以从电脑端订单回收站恢复','确认删除订单？',btnArray, function(e) {
			if (e.index == 1) {
				$('.remove').remove();
			} else {
				return;
			}
		})
	})
})
