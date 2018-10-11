onload = function(){
	
	
	
	
	$(".sub1").on("click",function(){
		var name = JSON.parse($.cookie("User"))
				console.log(name)
				if(name == null){
					$(".load").html("请先注册");
					setTimeout(()=>{
							location.href="zhuce.html";
						},1000)
				}else{
					
					for(var i = 0; i < name.length; i++){
						if($("#user").val() != name[i].userName){
							$(".load").html("登录失败!请先注册~");
							setTimeout(()=>{
								location.href="http://localhost/Flower/zhuce.html";
							},1000)
						}
						if($("#user").val() === name[i].userName && $("#pwd").val() === name[i].pass){
							$(".load").html("登录成功！");
							setTimeout(()=>{
								location.href="http://localhost/Flower/index.html";
							},1000)
						}else if($("#user").val() === name[i].userName && $("#pwd").val() != name[i].pass){
							$(".load").html("密码错误！");
						}
					}
				}
				
//	
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//	
	function classNan() {
		for(var j = 0; j < ali.length; j++) {
			ali[j].className = '';
		}
		ali[index].className = 'active';
//		oTxt1.value = aLi[index].innerHTML;
	}
	
	
	
	
	function setCookie(key, value, n) {
		if(n != undefined) {
			var d = new Date()
			d.setDate(d.getDate() + n);
			document.cookie = key + "=" + value + ";expires=" + d;
		} else {
			document.cookie = key + "=" + value;
		}
	}
	//读取cookie
	function getCookie(key) {
		var str = document.cookie;
		arr = str.split("; ")
		for(var i = 0; i < arr.length; i++) {
			if(arr[i].split("=")[0] == key) {
				return arr[i].split("=")[1];
			}
		}
		return "";
	}
	
	
	
	
	
	
	
	
	
	
	
}
