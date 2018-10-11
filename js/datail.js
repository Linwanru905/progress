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
	
	$(".goodSum").children("h3").hover(function(){
		$(this).parent().children(".DownCate").stop().slideDown()
	},function(){
		$(this).parent().children(".DownCate").stop().slideUp()
	})
	
	
	$(".DownCate").hover(function(){
		$(this).stop().slideDown()
	},function(){
		$(this).stop().slideUp()
	})
	
//	主体
    $(".pro-someImg").children().on("click",function(){
    	$(".pro-bigImg").children().hide();
    	 $(".pro-bigImg").children().eq($(this).index()).show();
    })
	
	var id = window.location.search
	id = id.slice(1)
//	console.log(id)
	
//	class mydata{
//		constructor(){
//			
//		}
//	}
//	
//	new mydata({
//		url:"http://http://localhost/Flower/data/data.json"
//	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function Hot(options){
		this.url = options.url;
		this.count1 = options.count1;
		this.id = options.id;
		this.count2 = options.count2;
		console.log(this.count2)
		this.load();
	}
	Hot.prototype = {
		constructor:Hot,
		load:function(){
			var that = this;
			$.ajax({
				type:"get",
				url:this.url,
				success:function(res){
//					console.log(res)
					that.res = res;
					that.display();
				}
			});
		},
		display:function(){
//			console.log(this.res.list)
			var str = "";
			for(var j = 0; j < this.res.list.length; j++){
				if(this.id == this.res.list[j].goodid){
//					console.log(this.res.list[j])
					str +=`<h3 class="product-title">${this.res.list[j].name}</h3>
			              <p class="product-subtitle">浪漫唯美 女神挚爱</p>`
				}
			}
			
			this.count2.html(str);
			this.count1.html(Data(this.res.hot))
		}
	}
	
	
	function Data(data){
		let str = "";
		for(var i = 0; i < data.length; i++){
			str +=`<li>
						<a href="#">
							<img src="${data[i].src}"/>
							<p>${data[i].name}</p>
							<span>${data[i].price}</span>
						</a>
					</li>`
		}
		return str;	
	}
	
	new Hot({
		url:"http://localhost/Flower/data/data.json",
		count1:$(".panel-body").children("ul"),
		count2:$(".product-r").children(".title"),
		id:id
		
		
		
		
		
	})
//	console.log($(".product-r").children(".title").children(".product-title"))
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	$(".price-wrap").children("a").children(".imgBox").on("click",function(){
		$(this).parent().siblings().children(".imgBox").css("border","2px solid #d9d9d9")
		$(this).css("border","2px solid #f60")
	})
	
	
	
	
	
	
	
	
	
}
