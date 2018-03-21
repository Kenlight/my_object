
(function($, doc) {
				$.init();
				$.ready(function() {
					/**
					 * 获取对象属性的值
					 * 主要用于过滤三级联动中，可能出现的最低级的数据不存在的情况，实际开发中需要注意这一点；
					 * @param {Object} obj 对象
					 * @param {String} param 属性名
					 */
					//-----------------------------------------
					//					//级联示例
					var _getParam = function(obj, param) {
						return obj[param] || '';
					};
					var cityPicker3 = new $.PopPicker({
						layer: 3
					});
					cityPicker3.setData(cityData3);
					var cityResult3 = doc.getElementById('popicker');
					var pipcker=doc.getElementById('pipcker');
					var poppicker=doc.getElementsByClassName('.mui-poppicker');
					cityResult3.addEventListener('tap', function(event) {
//						poppicker.style.display="block";
						cityPicker3.show(function(items) {
							pipcker.innerText = _getParam(items[0], 'text') + ' ' +  _getParam(items[1], 'text') +  ' ' +  _getParam(items[2], 'text');
							//返回 false 可以阻止选择框的关闭
							//return false;
						});
					}, false);
				});
				
				document.getElementById("vip").addEventListener('tap', function() {
					mui.toast('会员ID作为登录名不可以修改~');
				});

			})(mui, document);
			
			$('.genderB>a').on('tap',function(){
				var index=$(".genderB>a");
				if(index==1){
					$('.genbox').html($(this).text());
					
				}else{
					$('.genbox').html($(this).text());
				}
				
			})
		