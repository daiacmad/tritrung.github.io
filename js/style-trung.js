$(document).ready(function(){
	
	//slide banner about page
	$('.slide-about-banner').owlCarousel({
	loop:true,
	nav:false,
	dots: true,
	autoplay:true,
	autoplayTimeout: 3000,
	smartSpeed:1000,
	items:1,
	});
	//slide product about page
	$('.slide-product').owlCarousel({
	loop:true,
	nav:false,
	dots: false,
	mouseDrag:true,
	smartSpeed:1000,
	responsive:{
		0:{
		  items:1,
		},
		368:{
			items:1,
		},
		992:{
			items:2
		}
	}
	});
	// pre next product about page
	$('.pre').click(function(){
		$('.about-3 .owl-prev').click();
	});
	$('.next').click(function(){
		$('.about-3 .owl-next').click();
	});
	
	//slide other room villas-detail
	$('.slide-other-room').owlCarousel({
	mouseDrag:true,
	nav:false,
	dots: false,
	smartSpeed:1000,
	responsive:{
		0:{
		  items:1,
		},
		368:{
			items:1,
		},
		992:{
			items:2
		}
	}
	});
	$('.pre-villas-detail').click(function(){
		$('#villas-detail .other-room .owl-prev').click();
	});
	$('.next-villas-detail').click(function(){
		$('#villas-detail .other-room .owl-next').click();
	});
	
	//slide villas-detail 2
	$('.slide-villas-detail2').owlCarousel({
		mouseDrag:true,
		nav:false,
		dots: false,
		smartSpeed:1000,
		responsive:{
			0:{
			  items:1,
			},
			768:{
				items:2,
			},
			992:{
				items:3
			}
		}
	});
	
	
	//slide recommend tourist
	$('#booking-personalinfo .slide-recommend-tourist').owlCarousel({
		mouseDrag:true,
		nav:false,
		dots: false,
		margin:30,
		smartSpeed:1000,
		responsive:{
			0:{
			  items:1,
			},
			768:{
				items:2,
			},
			992:{
				items:3,
			},
			1200:{
				items:4
			}
		}
	});
	
	
	
	//booking calendar
	$("#arrival-date").datepicker();
	$("#departure-date").datepicker();
	
	//booking menu slide down
	$('.dropdown').click(function(event){
		if($(this).children('.sub-menu').css("display")=="block")
		{
			$(this).children('.sub-menu').slideUp(200);
			$(this).children(".fa-angle-up").switchClass("fa-angle-up","fa-angle-down");
			event.stopPropagation();
		}
		else{
			$(this).children('.sub-menu').slideDown(200);
			$(this).children(".fa-angle-down").switchClass("fa-angle-down","fa-angle-up");
			event.stopPropagation();
		}
	
	});
	//booking menu slide down click 
	$('.sub-menu').children('li').click(function(){
		$(this).parents('.btn-group').children('button').html($(this).html());
		$("body").trigger("click");
	});
	
	$('.sub-menu2').children('li').click(function(){
		$(this).parents('.btn-group').children('button').html($(this).html());
		$("body").trigger("click");
	});
	
	$('.sub-menu3').children('li').click(function(){
		$('.btn-default3').html($(this).html());
	});
	//pre next paging
	$('.product-paging .product-pre').mouseover(
		function(){
			var src = $(".product-paging .product-pre img").attr("src").replace("slide-icon-1.png","slide-icon-hover-1.png");
			$(".product-paging .product-pre img").attr("src", src);
		}
	);
	$('.product-paging .product-pre').mouseout(
		function(){
			var src = $(".product-paging .product-pre img").attr("src").replace("slide-icon-hover-1.png","slide-icon-1.png");
			$(".product-paging .product-pre img").attr("src", src);
		}
	);
	$('.product-paging .product-next').mouseover(
		function(){
			var src = $(".product-paging .product-next img").attr("src").replace("slide-icon.png","slide-icon-hover.png");
			$(".product-paging .product-next img").attr("src", src);
		}
	);
	$('.product-paging .product-next').mouseout(
		function(){
			var src = $(".product-paging .product-next img").attr("src").replace("slide-icon-hover.png","slide-icon.png");
			$(".product-paging .product-next img").attr("src", src);
		}
	);
	
	//booking personal info
	$(".rating").each(function() {
		var rating=$(this).text();
		var star=60-(rating*12);
		$(this).css({"background-position":star+"px 0px"});
	});
	$('#booking-personalinfo .recommend-tourist  .pre-recommend-tourist').click(function(){
		$('#booking-personalinfo .recommend-tourist .owl-prev').click();
	});
	$('#booking-personalinfo .recommend-tourist  .next-recommend-tourist').click(function(){
		$('#booking-personalinfo .recommend-tourist .owl-next').click();
	});
	
	
	//gallery
	$(function() {

		var $grid = $( '#tp-grid' ),
			$name = $( '#name' ),
			$close = $( '#close' ),
			$loader = $( '<div class="loader"><i></i><i></i><i></i><i></i><i></i><i></i><span>Loading...</span></div>' ).insertBefore( $grid ),
			stapel = $grid.stapel( {
				min_width : 280,
				pile_width : 370,
				pile_height : 370,
				pile_gutter : 30,
				element_width : 380,
				element_height : 270,
				element_gutter : 15,
				onLoad : function() {
					$loader.remove();
				},
				onBeforeOpen : function( pileName ) {
					$name.html( pileName );
				},
				onAfterOpen : function( pileName ) {
					$close.show();
				}
			} );

		$close.on( 'click', function() {
			$close.hide();
			$name.empty();
			stapel.closePile();
		} );

	});
	//fix gallery
	$('#close').click(function(){
		$( "li" ).each(function(index){
			$(this).css({"z-index":"9999"});
		});
	})
	//popup gallery 
	$('.wrapper-popup').click(function(e){
		e.stopPropagation();
		$('.popup').fadeOut("slow");
		setTimeout(function(){
			$('.popup .img-popup img').attr("src"," ");//.remove();
			},500);
	
	});
	$('.btn-close-popup').click(function(e){
		e.stopPropagation();
		$('.popup').fadeOut("slow");
		setTimeout(function(){
			$('.popup .img-popup img').attr("src"," ");//.remove();
			},500);
	
	});
	
	
	//restaurant tab begin 
	if($(window).width()<767)
	{
		$("#restaurant ul.restaurant-tabs-list li.restaurant-tab").css("cssText","display:block !important ; margin-bottom:30px");
		$("#restaurant div.restaurant-tabs-list").css("cssText","display:none !important");
		//$("#restaurant ul.restaurant-tabs-list").css("cssText","display:none !important");
		//$("#restaurant div.restaurant-tabs-list").css("display","table","important");
	}
	else
	{
		$("#restaurant ul.restaurant-tabs-list li.restaurant-tab").removeAttr("style");
		$("#restaurant div.restaurant-tabs-list").css("cssText","display:none !important");
		$("#restaurant ul.restaurant-tabs-list").css("display","table","important");
	}
	//restaurant tab resize
	$( window ).resize(function() {
		if($(window).width()<767)
		{
			$("#restaurant ul.restaurant-tabs-list li.restaurant-tab").css("cssText","display:block !important ; margin-bottom:30px");
			$("#restaurant div.restaurant-tabs-list").css("cssText","display:none !important");
			//$("#restaurant ul.restaurant-tabs-list").css("cssText","display:none !important");
			//$("#restaurant div.restaurant-tabs-list").css("display","table","important");
		}
		else
		{
			$("#restaurant ul.restaurant-tabs-list li.restaurant-tab").removeAttr("style");
			$("#restaurant div.restaurant-tabs-list").css("cssText","display:none !important");
			$("#restaurant ul.restaurant-tabs-list").css("display","table","important");
		}
	});
	//restaurant tab
	$('#restaurant .restaurant-tabs-list .restaurant-tab').click(function(){
		if($(this).hasClass('current'))
		{
			
		}
		else
		{
			var tab_id = $(this).attr('data-tab');
			$('#restaurant .restaurant-tabs-list .restaurant-tab').removeClass('current');
			$('#restaurant .tab-content').css({"opacity":"0","margin-left":"-100px"});
			setTimeout(function(){
				$('#restaurant .tab-content').removeClass('current');
			},400);
			$('#restaurant .restaurant-tabs-list .restaurant-tab').each(function(){
				if($(this).attr('data-tab')== tab_id)
				{
					$(this).addClass('current');
				}
			});
			setTimeout(function(){
				$("#restaurant #"+tab_id).addClass('current');
				$("#restaurant #"+tab_id).css({"opacity":"0","margin-left":"-100px"});
				setTimeout(function(){
					$("#restaurant #"+tab_id).css({"opacity":"1","margin-left":"0px"});
				},200)
			},400);
		}
	});
	
	
	//comming soon
	(function() {

	  (function($) {
		$.countdown = function(el, options) {
		  var getDateData,
			_this = this;
		  this.el = el;
		  this.$el = $(el);
		  this.$el.data("countdown", this);
		  this.init = function() {
			_this.options = $.extend({}, $.countdown.defaultOptions, options);
			if (_this.options.refresh) {
			  _this.interval = setInterval(function() {
				return _this.render();
			  }, _this.options.refresh);
			}
			_this.render();
			return _this;
		  };
		  getDateData = function(endDate) {
			var dateData, diff;
			endDate = Date.parse($.isPlainObject(_this.options.date) ? _this.options.date : new Date(_this.options.date));
			diff = (endDate - Date.parse(new Date)) / 1000;
			if (diff <= 0) {
			  diff = 0;
			  if (_this.interval) {
				_this.stop();
			  }
			  _this.options.onEnd.apply(_this);
			}
			dateData = {
			  years: 0,
			  days: 0,
			  hours: 0,
			  min: 0,
			  sec: 0,
			  millisec: 0
			};
			if (diff >= (365.25 * 86400)) {
			  dateData.years = Math.floor(diff / (365.25 * 86400));
			  diff -= dateData.years * 365.25 * 86400;
			}
			if (diff >= 86400) {
			  dateData.days = Math.floor(diff / 86400);
			  diff -= dateData.days * 86400;
			}
			if (diff >= 3600) {
			  dateData.hours = Math.floor(diff / 3600);
			  diff -= dateData.hours * 3600;
			}
			if (diff >= 60) {
			  dateData.min = Math.floor(diff / 60);
			  diff -= dateData.min * 60;
			}
			dateData.sec = diff;
			return dateData;
		  };
		  this.leadingZeros = function(num, length) {
			if (length == null) {
			  length = 2;
			}
			num = String(num);
			while (num.length < length) {
			  num = "0" + num;
			}
			return num;
		  };
		  this.update = function(newDate) {
			_this.options.date = newDate;
			return _this;
		  };
		  this.render = function() {
			_this.options.render.apply(_this, [getDateData(_this.options.date)]);
			return _this;
		  };
		  this.stop = function() {
			if (_this.interval) {
			  clearInterval(_this.interval);
			}
			_this.interval = null;
			return _this;
		  };
		  this.start = function(refresh) {
			if (refresh == null) {
			  refresh = _this.options.refresh || $.countdown.defaultOptions.refresh;
			}
			if (_this.interval) {
			  clearInterval(_this.interval);
			}
			_this.render();
			_this.options.refresh = refresh;
			_this.interval = setInterval(function() {
			  return _this.render();
			}, _this.options.refresh);
			return _this;
		  };
		  return this.init();
		};
		$.countdown.defaultOptions = {
		  date: "June 7, 2087 15:03:25",
		  refresh: 1000,
		  onEnd: $.noop,
		  render: function(date) {
			return $(this.el).html("" + date.years + " years, " + date.days + " days, " + (this.leadingZeros(date.hours)) + " hours, " + (this.leadingZeros(date.min)) + " min and " + (this.leadingZeros(date.sec)) + " sec");
		  }
		};
		$.fn.countdown = function(options) {
		  return $.each(this, function(i, el) {
			var $el;
			$el = $(el);
			if (!$el.data('countdown')) {
			  return $el.data('countdown', new $.countdown(el, options));
			}
		  });
		};
		return void 0;
	  })(jQuery);

	}).call(this);
	
	//show more
	$(".description-view-more").click(function(){
		if($(".content-show-more").css("display")=="none")
		{
			$(".content-show-more").slideDown(function(){
				$(".description-view-more").html("view less <i class='fa fa-angle-up' aria-hidden='true'></i>");
			});
		}
		else
		{
			$(".content-show-more").slideUp(function(){
				$(".description-view-more").html("view more <i class='fa fa-angle-down' aria-hidden='true'></i>");
			});
		}
	});
	

	//fix blog detail youtube
	$(".blog-detail-youtube").css("height", $(".blog-detail-youtube").width()/100*71.5);
	$(window).resize(function(){
		$(".blog-detail-youtube").css("height", $(".blog-detail-youtube").width()/100*70);
	});




});

	function open_popup(img)
	{
		$('.popup .img-popup img').attr( "src",img );//.append(img);
		$('.popup').fadeIn("slow");
	}
	
	function getPoint(c1,c2,radius,angle){
		return [c1+Math.cos(angle)*radius,c2+Math.sin(angle)*radius];
	}







$(window).on("load", function() {
	//-----------------------------------------draw 1-------------------------------------------
	
	var bool=true;
	var i_1=0;
	function drawcanvas1(sim_1)
	{
		var c=document.getElementById("myCanvas1")
		var phantram=$("#myCanvas1 .percent").html();
		var ctx = c.getContext("2d");
		if(i_1<=phantram)
		{
			ctx.clearRect(0,0,200,200);
		}
		var shadow=c.getContext("2d");
		// vẽ shadowBlur
		shadow.beginPath();
		shadow.lineWidth=8;
		shadow.strokeStyle = '#dddde0';
		shadow.arc(100, 90, 80, -1.5, 2 * Math.PI);
		shadow.stroke();
		// vẽ đường màu trắng
		ctx.beginPath();
		ctx.strokeStyle="white";
		ctx.lineWidth=6;
		ctx.arc(100, 90, 80, -1.5, 2 * Math.PI);
		ctx.stroke();
		// vẽ viền đỏ
		ctx.beginPath();
		ctx.strokeStyle="red";
		ctx.lineWidth=1;
		ctx.arc(100, 90, 89, -1.5, 2 * Math.PI);
		ctx.stroke();
		// graient
		ctx.beginPath();
		var my_gradient=ctx.createLinearGradient(0,0,170,0);
		my_gradient.addColorStop(1,"#044f84");
		my_gradient.addColorStop(0.2,"#ed5745");
		ctx.strokeStyle=my_gradient;
		// set witdh
		ctx.lineWidth=6;
		// thêm chữ
		ctx.clearRect(60,60,90,50);
		ctx.font = "48px roboto-thin";
		ctx.fillStyle="#034f84";
		ctx.fillText((phantram-(phantram-i_1))+"%",60,105);
		if(phantram<=0 || phantram>100){
			clearInterval(sim_1);
			return false;
		}
		// vẽ hình tròn
		ctx.arc(100, 90, 80, -1.5, (((phantram-(phantram-i_1))-24)/100)*2 * Math.PI);
		// vẽ
		ctx.stroke();
		//nut mau hong
		ctx.beginPath();
		ctx.strokeStyle = '#ebaba6';
		ctx.lineWidth=6;
		ctx.arc(getPoint(100,90,80,(((phantram-(phantram-i_1))-24)/100)*2 * Math.PI)[0], getPoint(100,90,80,(((phantram-(phantram-i_1))-24)/100)*2 * Math.PI)[1], 3, -1.5, 2 * Math.PI,false);
		ctx.stroke();
		if(i_1==phantram)
		{
			clearInterval(sim_1);
		}
		i_1++;
	}
	
	//--------------------------------------draw 2---------------------------------------------------
	var i_2=0;
	function drawcanvas2(sim_2)
	{
		var c=document.getElementById("myCanvas2")
		var phantram=$("#myCanvas2 .percent").html();
		var ctx = c.getContext("2d");
		if(i_2<=phantram)
		{
			ctx.clearRect(0,0,200,200);
		}
		var shadow=c.getContext("2d");
		// vẽ shadowBlur
		shadow.beginPath();
		shadow.lineWidth=8;
		shadow.strokeStyle = '#dddde0';
		shadow.arc(100, 90, 80, -1.5, 2 * Math.PI);
		shadow.stroke();
		// vẽ đường màu trắng
		ctx.beginPath();
		ctx.strokeStyle="white";
		ctx.lineWidth=6;
		ctx.arc(100, 90, 80, -1.5, 2 * Math.PI);
		ctx.stroke();
		// vẽ viền đỏ
		ctx.beginPath();
		ctx.strokeStyle="red";
		ctx.lineWidth=1;
		ctx.arc(100, 90, 89, -1.5, 2 * Math.PI);
		ctx.stroke();
		// graient
		ctx.beginPath();
		var my_gradient=ctx.createLinearGradient(0,0,170,0);
		my_gradient.addColorStop(1,"#044f84");
		my_gradient.addColorStop(0.2,"#ed5745");
		ctx.strokeStyle=my_gradient;
		// set witdh
		ctx.lineWidth=6;
		// thêm chữ
		ctx.clearRect(60,60,90,50);
		ctx.font = "48px roboto-thin";
		ctx.fillStyle="#034f84";
		ctx.fillText((phantram-(phantram-i_2))+"%",60,105);
		if(phantram<=0 || phantram>100){
			clearInterval(sim_2);
			return false;
		}
		// vẽ hình tròn
		ctx.arc(100, 90, 80, -1.5, (((phantram-(phantram-i_2))-24)/100)*2 * Math.PI);
		// vẽ
		ctx.stroke();
		//nut mau hong
		ctx.beginPath();
		ctx.strokeStyle = '#ebaba6';
		ctx.lineWidth=6;
		ctx.arc(getPoint(100,90,80,(((phantram-(phantram-i_2))-24)/100)*2 * Math.PI)[0], getPoint(100,90,80,(((phantram-(phantram-i_2))-24)/100)*2 * Math.PI)[1], 3, -1.5, 2 * Math.PI,false);
		ctx.stroke();
		if(i_2==phantram)
		{
			clearInterval(sim_2);
		}
		i_2++;
	}
	//---------------------------------------------draw 3-------------------------------------------
	var i_3=0;
	function drawcanvas3(sim_3)
	{
		var c=document.getElementById("myCanvas3")
		var phantram=$("#myCanvas3 .percent").html();
		var ctx = c.getContext("2d");
		if(i_3<=phantram)
		{
			ctx.clearRect(0,0,200,200);
		}
		var shadow=c.getContext("2d");
		// vẽ shadowBlur
		shadow.beginPath();
		shadow.lineWidth=8;
		shadow.strokeStyle = '#dddde0';
		shadow.arc(100, 90, 80, -1.5, 2 * Math.PI);
		shadow.stroke();
		// vẽ đường màu trắng
		ctx.beginPath();
		ctx.strokeStyle="white";
		ctx.lineWidth=6;
		ctx.arc(100, 90, 80, -1.5, 2 * Math.PI);
		ctx.stroke();
		// vẽ viền đỏ
		ctx.beginPath();
		ctx.strokeStyle="red";
		ctx.lineWidth=1;
		ctx.arc(100, 90, 89, -1.5, 2 * Math.PI);
		ctx.stroke();
		// graient
		ctx.beginPath();
		var my_gradient=ctx.createLinearGradient(0,0,170,0);
		my_gradient.addColorStop(1,"#044f84");
		my_gradient.addColorStop(0.2,"#ed5745");
		ctx.strokeStyle=my_gradient;
		// set witdh
		ctx.lineWidth=6;
		// thêm chữ
		ctx.clearRect(60,60,90,50);
		ctx.font = "48px roboto-thin";
		ctx.fillStyle="#034f84";
		ctx.fillText((phantram-(phantram-i_3))+"%",60,105);
		if(phantram<=0 || phantram>100){
			clearInterval(sim_3);
			return false;
		}
		// vẽ hình tròn
		ctx.arc(100, 90, 80, -1.5, (((phantram-(phantram-i_3))-24)/100)*2 * Math.PI);
		// vẽ
		ctx.stroke();
		//nut mau hong
		ctx.beginPath();
		ctx.strokeStyle = '#ebaba6';
		ctx.lineWidth=6;
		ctx.arc(getPoint(100,90,80,(((phantram-(phantram-i_3))-24)/100)*2 * Math.PI)[0], getPoint(100,90,80,(((phantram-(phantram-i_3))-24)/100)*2 * Math.PI)[1], 3, -1.5, 2 * Math.PI,false);
		ctx.stroke();
		if(i_3==phantram)
		{
			clearInterval(sim_3);
		}
		i_3++;
	}
	
	//-------------------------------------------------draw 4------------------------------------------
	var i_4=0;
	function drawcanvas4(sim_4)
	{
		
		var c=document.getElementById("myCanvas4")
		var phantram=$("#myCanvas4 .percent").html();
		var ctx = c.getContext("2d");
		if(i_4<=phantram)
		{
			ctx.clearRect(0,0,200,200);
		}
		var shadow=c.getContext("2d");
		// vẽ shadowBlur
		shadow.beginPath();
		shadow.lineWidth=8;
		shadow.strokeStyle = '#dddde0';
		shadow.arc(100, 90, 80, -1.5, 2 * Math.PI);
		shadow.stroke();
		// vẽ đường màu trắng
		ctx.beginPath();
		ctx.strokeStyle="white";
		ctx.lineWidth=6;
		ctx.arc(100, 90, 80, -1.5, 2 * Math.PI);
		ctx.stroke();
		// vẽ viền đỏ
		ctx.beginPath();
		ctx.strokeStyle="red";
		ctx.lineWidth=1;
		ctx.arc(100, 90,89, -1.5, 2 * Math.PI);
		ctx.stroke();
		// graient
		ctx.beginPath();
		var my_gradient=ctx.createLinearGradient(0,0,170,0);
		my_gradient.addColorStop(1,"#044f84");
		my_gradient.addColorStop(0.2,"#ed5745");
		ctx.strokeStyle=my_gradient;
		// set witdh
		ctx.lineWidth=6;
		// thêm chữ
		
		ctx.font = "48px roboto-thin";
		ctx.fillStyle="#034f84";
		ctx.fillText((phantram-(phantram-i_4))+"%",60,105);
		if(phantram<=0 || phantram>100){
			clearInterval(sim_4);
			return false;
		}
		// vẽ hình tròn
		ctx.arc(100, 90, 80, -1.5, (((phantram-(phantram-i_4))-24)/100)*2 * Math.PI);
		// vẽ
		ctx.stroke();
		
		
		//nut mau hong
		ctx.beginPath();
		ctx.strokeStyle = '#ebaba6';
		ctx.lineWidth=6;
		ctx.arc(getPoint(100,90,80,(((phantram-(phantram-i_4))-24)/100)*2 * Math.PI)[0], getPoint(100,90,80,(((phantram-(phantram-i_4))-24)/100)*2 * Math.PI)[1], 3, -1.5, 2 * Math.PI,false);
		ctx.stroke();
		
		
		if(i_4==phantram)
		{
			clearInterval(sim_4);
		}
		i_4++;
		
	}
	var $animation_elements = $('.animate');
	var $window = $(window);

	function check_if_in_view() {
	  var window_height = $window.height();
	  
	  var window_top_position = $window.scrollTop();
	  var window_bottom_position = (window_top_position + window_height);

	  $.each($animation_elements, function() {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = (element_top_position + element_height);

		// check to see if this current container is within viewport
		if ((element_bottom_position >= window_top_position) &&
		  (element_top_position <= window_bottom_position) && bool==true) {
			var sim_1=setInterval(function(){
				drawcanvas1(sim_1);
			}, 25);
			var sim_2=setInterval(function(){
				drawcanvas2(sim_2);
			}, 25);
			var sim_3=setInterval(function(){
				drawcanvas3(sim_3);
			}, 25);
		   var sim_4=setInterval(function(){
				drawcanvas4(sim_4);
			},25);
			bool=false;
		} else {
		}
	  });
	}
	$window.on('scroll resize load', check_if_in_view);
	$window.trigger('scroll');
	
	
});

