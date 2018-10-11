onload = function(){
	
	$("#myLoad").validate()
	$(".sub2").on("click",function(){
		
		if($("#pwd1").val() == $("#pwd2").val()){
			if($.cookie("User")){
				User = JSON.parse($.cookie("User"))
				var onOff = true;
				for(var i = 0; i < User.length; i++){
					if(User.userName === User[i].userName){
						alert("用户名已存在")
						onOff = false;
					}
				}
				
				if(onOff){
					User.push({
						userName:$("#txt1").val(),
						pass:$("#pwd1").val()
					})
				}
				
			}else{
					User = [{
					userName:$("#txt1").val(),
					pass:$("#pwd1").val()
				}]
			}
			
			

			$.cookie("User",JSON.stringify(User))
			
			console.log(User)
//			$("#login").children().css("display","none")
			$(".login-box").html("LOAD..........")
			setTimeout(()=>{
				location.href="login.html";
			},3000)
		}
	})
	
	
	
	
	
}
