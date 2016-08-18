$(window).on("load resize",function(){
	$(".intro").css("min-height",$(window).height());
	$(".design").css("min-height",$(window).height());
});
var flag=true;
$(window).on("scroll",function(){
	
	if($(window).scrollTop()+$(window).height() >= $(".runtime-1").offset().top && flag==true && $(window).scrollTop()< $(".runtime-1").offset().top +$(".runtime-1").height())
	{
		flag=false;
		//runtime 1
		var data_runtime_1=0;
		var data_runtime_1_default=$(".runtime-1").html();
		var runtime_1=setInterval(function(){
			if(data_runtime_1> data_runtime_1_default)
			{
				clearInterval(runtime_1);
				return false;
			}
			$(".runtime-1").html(data_runtime_1++);
		},1000/($(".runtime-1").html()/3));
		//runtime 2
		var data_runtime_2=0;
		var data_runtime_2_default=$(".runtime-2").html();
		var runtime_2=setInterval(function(){
			if(data_runtime_2> data_runtime_2_default)
			{
				clearInterval(runtime_2);
				return false;
			}
			$(".runtime-2").html(data_runtime_2++);
		},1000/($(".runtime-2").html()/3));
		//runtime 3
		var data_runtime_3=0;
		var data_runtime_3_default=$(".runtime-3").html();
		var runtime_3=setInterval(function(){
			if(data_runtime_3> data_runtime_3_default)
			{
				clearInterval(runtime_3);
				return false;
			}
			$(".runtime-3").html(data_runtime_3++);
		},1000/($(".runtime-3").html()/3));
		//runtime 4
		var data_runtime_4=0;
		var data_runtime_4_default=$(".runtime-4").html();
		var runtime_4=setInterval(function(){
			if(data_runtime_4> data_runtime_4_default)
			{
				clearInterval(runtime_4);
				return false;
			}
			$(".runtime-4").html(data_runtime_4++);
		},1000/($(".runtime-4").html()/3));
		//runtime 5
		var data_runtime_5=0;
		var data_runtime_5_default=$(".runtime-5").html();
		var runtime_5=setInterval(function(){
			if(data_runtime_5> data_runtime_5_default)
			{
				clearInterval(runtime_5);
				return false;
			}
			$(".runtime-5").html(data_runtime_5++);
		},1000/($(".runtime-5").html()/3));
	}
	if($(window).scrollTop() >2){
		$(".header").css("background","rgba(231,131,131,0.8");
	}
	else
	{
		$(".header").css("background","transparent");
	}
});
$(document).ready(function(){
	$(".slide-small-logo").owlCarousel({
		items:6,
		loop:true,
		autoplay:true,
   		autoplayTimeout:3000,
   		smartSpeed:1000,
   		margin:50,
   		dots:false,
   		nav:false,
	});
	$('.slide-show').owlCarousel({
		margin:10,
   		loop:true,
   		autoplay:true,
   		autoplayTimeout:3000,
   		dots:false,
   		items:1,
   		lazyLoad:true,
   		smartSpeed:1000,
	});

	$(".slide .pre").click(function(){
		$(".owl-prev").click();
	});
	$(".slide .next").click(function(){
		$(".owl-next").click();
	});


	$(".icon-menu").click(function(){
		console.log($(".menu-responsive").width());
		if($(".menu-responsive").width()==0){
			$(".menu-responsive").width("100%");
			$(".line").addClass("active");
		}
		else
		{
			$(".menu-responsive").width("0px");
			$(".line").removeClass("active");
		}
	});

	$(".content-toggle div:nth-child(1)").click(function(){
		if($(this).next("div").css("display")=="block")
		{
			$(this).next("div").slideUp();
			$(this).children(".fa").css("transform","rotate(0deg)");
			return false;
		}
		$(".content-toggle").each(function(){
			$(this).children("div:nth-child(2)").slideUp();
			$(this).children("div:nth-child(1)").children(".fa").css("transform","rotate(0deg)");
		});
		$(this).next("div").slideDown();
		$(this).children(".fa").css("transform","rotate(180deg)");
	});
});