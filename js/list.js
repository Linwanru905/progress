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
	//页面主体
	
	
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
	
	//插入hot数据
	function Hot(options){
		this.url = options.url;
		this.count1 = options.count1;
		this.count2 = options.count2;
		
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
//					console.log(res.hot)
					that.res = res;
					that.display();
				}
			});
		},
		display:function(){
			this.count1.html(Data(this.res.hot))
			this.count2.html(Data(this.res.just))
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
	
	//分页
	class Page{
		constructor(options){
			this.url = options.url;
			this.count = options.count;
			this.pagination = options.pagination;
			this.num = options.num;
			this.p = options.p;
			
			
			
			this.load();
			
		}
		load(){
			var that = this;
			$.ajax({
				type:"get",
				url:this.url,
				success:function(res){
					that.res = res.list;
//					console.log(that.res)
//					that.display();
//					创建页码
					that.pageNum();
//					委托
					that.Entrust();
					
					
				}
			});
		}
		display(){
			var str = "";
			this.Id=[];
			for(var i = this.num *this.index; i < this.num*this.index + this.num; i++){
				if(i < this.res.length){
						str +=`<li index="${this.res[i].goodid}">
			    					<a href="#" class="active">
			    						<img src="${this.res[i].src}"/>
			    						<span>${this.res[i].price}</span>
			    						<p class="over listName">${this.res[i].name}</p>
			    						<em>${this.res[i].em}</em>
			    					</a>
		    						<div class="opear clear">
		    							<a href="javascript:void(0)" class="btn1"><span class="iconfont icon-31guanzhu1"></span>收藏</a>
		    							<a href="javascript:void(0)" class="btn2"><span class="iconfont icon-gouwuche"></span>加入购物车</a>			
		    						</div>
			    				</li>`
						this.Id.push(this.res[i].goodid)
				}
				
//				console.log(url)
				this.count.html(str);
			}
			this.dianji();
			
			
			
		}
		pageNum(){
			var that = this;
			this.pagination.pagination(this.res.length,{
				items_per_page:this.num,
				current_page:this.index,
				prev_text:"< 上一页",
				next_text:"下一页 >",
				callback:function(index){
					that.index = index;
					that.p.html(that.index+1 +"/" + that.res.length);
					that.display();
					
				}
			})
		}
		Entrust(){
			var that = this;
				this.count.on("click",".btn2",function(){
					that.id = $(this).parent().parent().attr("index");
//					console.log(that.id)
					that.setCookie()
				})
				
		}
		
		
		
		
		
		
		dianji(){
//			console.log(this.Id.length)
			
			var that = this;
			this.count.on("click","li",function(){
				for(var i = 0; i < that.Id.length-1; i++){
					if($(this).attr("index") == that.Id[i]){
//					console.log(that.Id[i])
					location.href="http://localhost/Flower/detail.html?"+that.Id[i];
//					console.log(href)
					}
				}
			})
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		setCookie(){
			if($.cookie("goods")){
				this.goods = JSON.parse($.cookie("goods"))
				var onOff = true;
				for(var i = 0; i < this.goods.length; i++){
					if(this.id === this.goods[i].id){
						this.goods[i].num++;
						onOff = false;
					}
				}
				if(onOff){
					this.goods.push({
						id:this.id,
						num:1
					})
				}
				
			}else{
				this.goods = [{
					id:this.id,
					num:1
				}]
			}
			
			$.cookie("goods",JSON.stringify(this.goods));
//			console.log(this.goods)
		}
		
		
		
		
		
		
		
	}
	
	new Page({
		url:"http://localhost/Flower/data/data.json",
		count:$(".grid-list").children("ul"),
		p:$(".page-wraper").children("p"),
		pagination:$("#Pagination"),
		num:28
	})

	new Hot({
		url:"http://localhost/Flower/data/data.json",
		count1:$(".panel-body").children("ul"),
		count2:$(".panel-com").children("ul"),
	})
	
//	console.log($(".panel-body").children("ul"))
	
	
	
	
}
