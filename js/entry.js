$(window).ready(function(){
	function fn(){

	var txtName=document.querySelectorAll(".mui-input-group input")[0];
var txtPwd=document.querySelectorAll(".mui-input-group input")[1];
 var form=document.forms[0];
		txtName.onblur=function(){
			var regs=RegExp("^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$");
			getBlur(this,regs,"请输入正确的号码");
		};
		txtPwd.onblur=function(){
			var regs=RegExp("^[a-z0-9_-]{6,18}$");
			getBlur(this,regs,"密码有误,请重新输入密码");
		};
		
		function getBlur(txt,reg,text1){
			if(reg.test(txt.value)){
				$(txt.parentNode.nextElementSibling).html("");
				return true;
					
			}else{
					$(txt.parentNode.nextElementSibling).html("<span style='color:red'><img src='images/err.png'/>"+text1+"<span>");
					return false;
			}
			
		}
		
  form.onsubmit=function(e){
       var reg1=RegExp("^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$"); 
       var reg2=RegExp("^[a-z0-9_-]{6,18}$");
  var rName=getBlur(txtName,reg1,"请输入正确的号码");
  var rPwd=getBlur(txtPwd,reg2,"密码有误,请重新输入密码");
  //只要姓名和密码的验证结果不都为true
  if(!(rName&&rPwd)){
    e.preventDefault();//取消提交！
   
  	}
	};
}
	fn();
	
})
