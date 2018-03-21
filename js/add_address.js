mui('.mui-switch').each(function() { //循环所有toggle
				//toggle.classList.contains('mui-active') 可识别该toggle的开关状态
				this.parentNode.querySelector('span').innerText = '设置默认地址';
				/**
				 * toggle 事件监听
				 */
				this.addEventListener('toggle', function(event) {
					//event.detail.isActive 可直接获取当前状态
					this.parentNode.querySelector('span').innerText = (event.detail.isActive ? '默认地址' : '设置默认地址');
				});
			});