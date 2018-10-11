onload = function(){
	//aside
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
	
//	console.log($(".topLeft").find(".hover"))
	
	$(".menuOne").hover(function(){
		$(this).parent().css({
			"border":"3px solid #ff6a00"
		})
		$(".rightMenu").css({
			"display":"block",
			"border-left":"0"
		})
	},function(){
		$(".rightMenu").css("display","none").parent().parent().css({
			"border":"3px solid #fff",
			"border-bottom":"3px solid #ff6a00"
			
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
	
	
	$(".menuTwo").hover(function(){
		$(this).parent().css({
			"border":"3px solid #ff6a00"
		})
		$(".Twomenu").css({
			"display":"block",
			"border-left":"0"
		})
	},function(){
		$(".Twomenu").css("display","none").parent().parent().css({
			"border":"3px solid #fff",
			"border-bottom":"3px solid #ff6a00"
		})
	})
	
//	轮播图
	
	class Banner{
		constructor(options){
			this.url = options.url;
			this.count = options.count;
			
			this.load();
		}
		load(){
			var that = this;
			$.ajax({
				type:"get",
				url:this.url,
				success:function(res){
//					console.log(res.banner)
					that.res = res;
					
					that.display();
					that.clickie();
				}
			});
		}
		clickie(){
			this.count.onclick = function(){
				location.href="http://localhost/Flower/play.html";
			}
		}
		display(){
			let str = "";
			for(var i =0; i < this.res.banner.length;i++){
//				console.log(this.res.banner[i].url)
				str +=`<div class="banner00" style="background:url(${this.res.banner[i].url}) 50% 0 no-repeat;">
					<a></a>
				</div>`
			}
			this.count.innerHTML = str;
			this.banner();
		}
		banner(){	
			$("#banner").banner({
				items:$("#banner").children(".count").children(),
				left:$("#banner").find("#prev"),
				right:$("#banner").find("#next"),	
				list:$("#banner").children(".list").children(),
				autoPlay:true,				//可选，不传为自动，true为自动，false为不动
				moveTime:300,				//可选，一张图片运动的时间，不传为，300
				delayTime:3000		
			})
		}
	}
	new Banner({
		url:"http://localhost/Flower/data/data.json",
		count:document.getElementById("banner").children[0],
	})


//console.log(document.getElementById("banner").children[0])


















// bannerLink
    function BannerRight(options){
//  	console.log(options.db)
		this.url = options.url;
		this.db = options.db;
		
		this.load();
    }
    
    BannerRight.prototype.load = function(){
    	var that = this;
    	$.ajax({
    		type:"get",
				url:this.url,
				success:function(res){
//					console.log(res.bannerlink)
				that.res = res;
					
				that.display();
			}
    	})
    }
    
    BannerRight.prototype.display = function(){
    	let str = "";
		for(var i =0; i < this.res.bannerlink.length;i++){
//			console.log(this.res.bannerlink[i].url)
			str +=`<a href="http://localhost/Flower/detail.html">
					<img src="${this.res.bannerlink[i].url}"/>
				</a>`
			}
			this.db.html(str);
			this.play();
    }
    BannerRight.prototype.play = function(){
	     	$("#banner .db a").hover(function(){
			$(this).stop().animate({
				"left": "-5px"
			}).siblings().stop().animate({
				"left": "0"
			});
		},function(){
			$("#banner .db a").stop().animate({
				"left": "0"
			});
		})

    }
    
	new BannerRight({
		url:"http://localhost/Flower/data/data.json",
		db:$("#banner").children(".db"),
	})
	
	
	
	
	
	
	class product{
		constructor(options){
			this.url = options.url;
			this.count = options.count;
//			console.log(this.count)
			this.load();
		}
		load(){
			var that = this;
			$.ajax({
				type:"get",
				url:this.url,
				success:function(res){
//					console.log(res.product)
					that.res = res;
					that.display();
				}
			});
		}
		display(){
			let str = "";
			for(var i =0; i < this.res.product.length;i++){
//				console.log(this.res.product[i].url)
				str +=`<li>
							<a href="#">
								<img src="${this.res.product[i].url}"/>
							</a>
						</li>`
			}
			this.count.html(str);
		}
	}
	new product({
		url:"http://localhost/Flower/data/data.json",
		count:$(".product-list"),
	})

	
	
	
	
	
	
	
	
	//获取楼层 的大框
	class floor1{
		constructor(options){
			this.url = options.url;
			this.count1 = options.count1;
			this.count2 = options.count2;
			this.count3 = options.count3;
			this.count4 = options.count4;
			
//			console.log(this.count)
			this.load();
		}
		load(){
			var that = this;
			$.ajax({
				type:"get",
				url:this.url,
				success:function(res){
//					console.log(res.floor1)
					that.res = res;
					that.display();
				}
			});
		}
		display(){
//			console.log(this.res.floor1)
			this.count1.html(floor(this.res.floor1));
			this.count2.html(floor(this.res.floor2));
			this.count3.html(floor(this.res.floor3));
			this.count4.html(floor(this.res.floor4));
		}
	}
	
	new floor1({
		url:"http://localhost/Flower/data/data.json",
		count1:$(".list1"),
		count2:$(".list2"),
		count3:$(".list3"),
		count4:$(".list4")
	})

function floor(data){
		let str = "";
		for(var i =0; i < data.length; i++){
		str +=`<li>
					<a href="detail.html">
						<span class="img-box">
							<img src="${data[i].src}"/>
						</span>
						<span>${data[i].name}</span>
						<b>${data[i].price}</b>
					</a>
				</li>`
		}
		return str;
	}

}
