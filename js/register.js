$(document).ready(function(){
    var ordertime=20,   //设置再次发送验证码等待时间
   		timeleft=ordertime,
        btn=$("#authCode"),
        phone=$("#phone"),
        psd=$('.en_password'),
        password_Boolean = false,
        confirm_Boolean = false,
        phone_Boolean=false,
        number_Boolean=false,
        reg = /^1[3|4|5|8][0-9]\d{8}$/i;  //电话号码的正则匹配式
        
	//手机号码
    phone.keyup(function(){
      if (reg.test(phone.val())){
        btn.removeAttr("disabled");//当号码符合规则后发送验证码按钮可点击
	    $('.phone_hint').html("✔").css("color","green");
	    phone_Boolean = true;
        }
      else{
        btn.attr("disabled",true);
        $('.phone_hint').html("×").css("color","orangered");
    	phone_Boolean = false;
      }
    })
    
    //验证码
    $('.code').keyup(function(){
      if ((/^[a-z0-9_-]{6,16}$/).test($(this).val())){
	    $('.number_hint').html("✔").css("color","green");
	    number_Boolean = true;
        }
      else{
        $('.number_hint').html("×").css("color","orangered");
    	number_Boolean = false;
      } 
    })
    
    //密码
    psd.keyup(function(){
      if ((/^[a-z0-9_-]{6,16}$/).test(psd.val())){
	    $('.password_hint').html("✔").css("color","green");
	    password_Boolean = true;
        }
      else{
        $('.password_hint').html("×").css("color","orangered");
    	password_Boolean = false;
      } 
    })
    

    //计时函数
    function timeCount(){
       timeleft-=1
       if (timeleft>0){
       btn.val(timeleft+" 秒后重发");
       setTimeout(timeCount,1000)
       }
       else {
        btn.val("重新发送");
        timeleft=ordertime   //重置等待时间
        btn.removeAttr("disabled");
       }
     }

    //事件处理函数
    btn.on("click",function(){
        $(this).attr("disabled",true); //防止多次点击
        //此处可添加 ajax请求 向后台发送 获取验证码请求
        timeCount(this);
        })
    

	//提交
	$('#btn').on('tap',function(){
	  if(phone_Boolean && password_Boolean && number_Boolean == true){
	    mui.alert("注册成功");
	  }else {
	    mui.alert("请完善信息");
	  }
	});

 })