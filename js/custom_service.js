window.onload=function(){
	var win_height=$(window).height();//网页高度
	var top_height=$(".mui-bar-nav").height();//头部高度
	var botton_height=$(".vid_footer").height();//底部高度
	var vid_bottom_height=win_height-top_height-botton_height-23;//聊天内容.vid_bottom_show1的宽度
	$(".vid_bottom_show1").css({
//		设置自适应聊天内容的高度
		height:vid_bottom_height+"px"
	})
	
		$("#btn").click(function(){
		//点击发送触发事件	
			up_say();
		})
		function up_say(){
//			获取发送信息内容
			var $text = $(".write_box").val();
//			如果不为空时执行
			if($text !==""){
//				动态生成绑定到页面
				var html="";
				html=`
					<li class="question">
		    			<div class="heard_img right">
		    				<img src="images/img_kefu2.png"/>
		    			</div>
		    			<div class="question_text">
		    				
		    				<p>${$text}</p>
		    				
		    				<i></i>
		    			</div>
		    		</li>
					`;
			$(".speak_box").append(html);//绑定到页面
			$(".write_box").val("");//清空input文字
			$(".write_box input").blur();//清空之后，自动获取焦点
			
			}
//			点击发送信息之后,调用函数，实现信息不断往上滚动
			for_bottom();
		}
		
//	每发一次信息,必须调用该函数,信息滚动效果
	function for_bottom() {
     var speak_height = ($('.speak_box').height());
     console.log(speak_height);
     console.log($('.vid_bottom_show1').scrollTop())
     $('.vid_bottom_show1').animate({
         scrollTop: speak_height
     }, 500);

	 }
		
		
}
