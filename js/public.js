
onload = function(){
	
	$(".look").hover(function(){
		
		$(this).css({
		"background":"#f60"
		})
		$(this).children(".mp-toptip").css({
			"display":"block"
		}).stop().animate({
			"left":"-119px"
		})
	},function(){
		$(this).css({
			"background":"#595656"
		})
		$(this).children(".mp-toptip").css({
			"display":"none"
		}).stop().animate({
			"left":"-150px"
		})
	})
	
	$(".asideShow").children().children("#shopCat").on("click",function(){
		$(".asideMage").stop().animate({
			"right":"36px"
		})
	})

	
	$(".asideMage").children("span").on("click",function(){
		$(this).parent().stop().animate({
			"right":"-284px"
		})
	})
	
	
	
	//header
	$(".server").hover(function(){
		$(this).css({
			"border":"1px solid #d9d9d9",
			"background":"#fff",
			"color":"#f60"
			});
		$(this).children().children(".iconfont").css("color","#f60")
		$(this).children(".downService").css({
			"display":"block",
			"border":"1px solid #d9d9d9",
			"border-top":"0"
		})
	},function(){
		$(this).css({
			"border":"0",
			"background":"#f2f2f2"
		})
		$(this).children().children(".iconfont").css("color","#D9D9D9")
		$(this).children(".downService").css("display","none")
	})
	
	
	$(".downService").children("a").hover(function(){
		$(this).css({
			"color":"#FF6A00",
			"text-decoration": "underline"
		})
	},function(){
		$(this).css({
			"color":"#737373",
			"text-decoration":"none"
		})
	})
	
	
	//shop
	$(".shop").children("a").hover(function(){
		$(this).css({
			"border":"1px solid #d9d9d9",
			"background":"#fff",
			"color":"#f60"
		})
		$(this).children(".iconfont").css("color","#f60")
		$(this).parent().children(".downShop").css({
			"display":"block",
			"border":"1px solid #d9d9d9",
			"border-top":"0"
		})
	},function(){
			$(this).css({
				"border":"0",
				"background":"#f2f2f2",
				"color":"#d9d9d9d"
			})
			$(this).children(".iconfont").css("color","#d9d9d9")
			$(this).parent().children(".downShop").css({
				"display":"none"
			})
		})
}
