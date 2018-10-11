onload = function(){
	
	class Car{
		constructor(options){
			this.url = options.url;
			this.count = options.count;
			this.box = options.box;
			this.span = options.span;
			this.load();
		}
		load(){
			var that = this;
			$.ajax({
				type:"get",
				url:this.url,
				success:function(res){
//					console.log(res.list)
					that.res = res.list;
					that.getCookie();
				}
			});
		}
		getCookie(){
			this.goods = JSON.parse($.cookie("goods"));
//			console.log(this.goods)
			this.display();
			
		}
		display(){
			var str = "";
			this.sum=0;
			for(var i = 0; i <this.goods.length; i++){
				for(var j = 0; j < this.res.length; j++){
					if(this.goods[i].id === this.res[j].goodid){
						var Int = parseInt(this.goods[i].num)
						var sting =this.res[j].price
						sting =parseInt(sting.slice(1))
						this.sum += (Int*sting)
						
						str += `<ul class="order-list clear" index="${this.res[j].goodid}">
									<li class="selecter">
			                            <i class="iconfont icon-zhengque active"></i>
			                        </li>
			                        <li class="img-box">
			                        	<a href="javascript:void(0)">
			                        		<img src="${this.res[j].src}">
			                        	</a>
			                        </li>
			                        <li class="product">
			                            <a href="#">
			                                <span class="product-title">${this.res[j].name}</span>
			                            </a>
			                        </li>
			
			                        <li class="market-price">
			                            <span class="price-sign">¥</span>
			                            <span class="price-num">
			                            255
			                            </span>
			                        </li>
			                        <li class="order-price">
			                            <span class="price-num">${this.res[j].price}</span>
			                        </li>
			                        <li class="num">
			                            <div class="input-num">
			                                <a href="javascript:void(0);" class="btn btn-default1">
			                                	-
			                                </a>
			                                <input type="text" class="form-control input-sm" name="cpsl" value="${this.goods[i].num}" maxlength="3">
			                                <a href="javascript:void(0)" class="btn btn-default2">
			                                	+
			                                </a>
			                            </div>
			                        </li>
			                        <li class="operate">
			                        	<i class="delBtn">删除</i><br />
			                        	<a href="javascript:void(0)" class="collectBtn">移到我的收藏</a>
			                        </li>
		                     	</ul>`
						
					}
				}
			}
			this.span.html(this.sum)
			this.count.html(str);
			this.changNum();
			this.remove();
			this.Price();
		}
		Price(){
			
		}

		changNum(){
			var that = this;
			this.count.on("input","input",function(){			
				that.changeId = $(this).parent().parent().parent().attr("index");
				that.num = $(this).val();
				that.changeCookie();
			})
		
		  	this.count.on("click",".btn-default1",function(){
			  	that.changeId = $(this).parent().parent().parent().attr("index");
				that.num = parseInt($(this).next(".form-control").val())
				if(that.num == 1){
					that.num =1
				}else{
					
					that.num = that.num - 1;
				}
				$(this).next(".form-control").val(that.num)
	//			console.log(parseInt($(this).next(".form-control").val()))
				that.changeCookie();
				
			  })
			
			this.count.on("click",".btn-default2",function(){
			  	that.changeId = $(this).parent().parent().parent().attr("index");
				that.num = parseInt($(this).prev(".form-control").val())
				that.num = that.num + 1;
				$(this).prev(".form-control").val(that.num)
//		//			console.log(parseInt($(this).next(".form-control").val()))
				that.changeCookie();
				console.log($(this).prev(".form-control").val())
			  })

			
		}
		remove(){
			var that = this;
			this.count.on("click","i",function(){
				that.removeId = $(this).parent().parent().attr("index");
				$(this).parent().parent().remove()
				that.removeCookie();
				console.log(that.removeId)
			})
		}
		changeCookie(){
				for(var i=0;i<this.goods.length;i++){
					if(this.goods[i].id === this.changeId){
						this.goods[i].num = this.num;
					}
				}
				
				
				
				
				
				
				
				
				
				
				
				
				
			$.cookie("goods",JSON.stringify(this.goods))
		}
		removeCookie(){
			for(var i=0;i<this.goods.length;i++){
					if(this.goods[i].id === this.removeId){
						this.goods.splice(i,1)
					}
				}
			$.cookie("goods",JSON.stringify(this.goods))
		}
		
		
		
	}
	
	
	new Car({
		url:"http://localhost/Flower/data/data.json",
		count:$(".db"),
		box:$(".cart-panel"),
		span:$(".set-info").children("p").children("#priceP")
	})
	
//	console.log($(".set-info").children("p").children("#priceP"))
	
}
