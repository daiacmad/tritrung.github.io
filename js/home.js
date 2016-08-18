//loading
$(document).ready(function () {
    setTimeout(function(){
        $('body').imagesLoaded(function(){
            hide_loading();

            if(typeof show_animation === 'function'){
                show_animation();
            }

        });
    }, 2000);
});
function show_loading(){
    $(this).show();
    $('.loading_content').fadeIn(300);
}
function hide_loading(){
    $('.loading_content').fadeOut(300, function(){
        $(this).hide(1);        
    });
}
// menu

$(document).ready(function(){
    //cau hoi1
	$('#nav-icon').click(function(){
		if( !$('#cauhoi_slidedown1').is(":visible") )
		{
			$('#cauhoi_slidedown1').slideDown(400, function(){
				
			});
			$('.menu2').css({'width':'300px'});
		}
		else{ 
			if($('#cauhoi_slidedown1').is(":visible") )
			{
            	$('#cauhoi_slidedown1').slideUp(400, function(){					
				});
				$('.menu2').css({'width':'50px'});
			}			
		}
	});	
});

$(document).ready(function(){
	
	$('#header_container .navbar-nav > li > a').hover(function(){	
				
		if( $(this).attr('id') == 'menu_sanpham' ){
			$('.sub_menu').removeClass('active');	
			$('#sub_menu_sanpham').addClass('active');
			$('.sub_menu_container').show().stop().animate({'opacity':'1.0'},300);
		}
		
	}, function(){			
		$('.sub_menu_container').stop().animate({'opacity':'0'},300, function(){
			$(this).hide();				
			//$('#sub_menu_sanpham').removeClass('active');
			$('.sub_menu').removeClass('active');				
		});	
					
	});
	
	$('.sub_menu_container').hover(function(){			
		if( $('#sub_menu_sanpham').hasClass('active') ){
			$('#menu_sanpham').parent().addClass('hover_active');
		}	
		$('.sub_menu_container').show().stop().animate({'opacity':'1.0'},300);		
	}, function(){		
		$('.sub_menu_container').stop().animate({'opacity':'0'},300, function(){
			$(this).hide();			
		});	
		$('.navbar-nav li').removeClass('hover_active');
								
	});
	
});
$( document ).ready(function() {      
    var isMobile = window.matchMedia("only screen and (max-width: 760px)");

    if (isMobile.matches) {
        //Conditional script here
		$('.navbar-nav > li > a').click(function()
			{
				$('.navbar-nav > li').removeClass('active');
				$(this).parent().addClass('active');
				$(this).next().slideToggle();
			});
		$('.submenu_m > li > a').click(function()
			{
				$('.navbar-nav .submenu_m > li').removeClass('active');
				$('.navbar-nav .submenu_m > li').removeClass('active');
				$(this).parent().addClass('active');
				$(this).next().slideToggle();
			});
		$('.submenu_m_item > li > a').click(function()
			{
				$('.navbar-nav .submenu_m_item > li').removeClass('active');
				$('.submenu_m > li').removeClass('active');
				$(this).parent().addClass('active');
				$(this).parent().parent().parent().addClass('active');
			});
		//
		$('.submenu_m_item > li > a').click(function()
			{
				$('.navbar-nav .submenu_m_item > li').removeClass('active');
				$('.navbar-nav .submenu_m_item2 > li').removeClass('active');
				$(this).parent().addClass('active');
				$(this).next().slideToggle();
			});
		$('.submenu_m_item2 > li > a').click(function()
			{
				$('.navbar-nav .submenu_m_item2 > li').removeClass('active');
				$('.submenu_m_item > li').removeClass('active');
				$(this).parent().addClass('active');
				$(this).parent().parent().parent().addClass('active');
			});
    }
 });

 //end menu

$(document).ready(function() {
	$('#fullpage').fullpage({
		'verticalCentered': false,
		'css3': true,
		'sectionsColor': ['', '#fff', '#fff', '#fff'],
		'navigation': true,
		'navigationPosition': 'left',
		'navigationTooltips': ['', '', '', '']
	});
	//slide banner about page
	$('.slide').owlCarousel({
	loop:true,
	nav:false,
	dots: true,
	smartSpeed:1000,
	autoplay: false,
	items:1,
	});
	//slide banner about page
	$('.slide-icon').owlCarousel({
		loop:true,
		nav:false,
		dots: false,
		smartSpeed:1000,
		autoplay: true,
		autoplayTimeout:2000,
		navText: [ '', '' ],
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:3,
			},
			1000:{
				items:5,
			}
		}
	});
	//slide banner about page
	$('.slider2').owlCarousel({
		loop:true,
		nav:false,
		dots: true,
		smartSpeed:1000,
		autoplay: true,
		autoplayTimeout:3000,
		items:1,
	});
	//slide banner about page
	$('.slider3').owlCarousel({
		loop:true,
		nav:false,
		dots: false,
		smartSpeed:1000,
		autoplay: false,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:2,
			},
			1000:{
				items:4,
			}
		}
	});
	// pre next product about page
	$('.pre').click(function(){
		$('.section5-hom3 .owl-prev').click();
	});
	$('.next').click(function(){
		$('.section5-hom3 .owl-next').click();
	});
	//slide hom4
	$('.slider-hom4').owlCarousel({
		loop:true,
		nav:false,
		dots: false,
		smartSpeed:1000,
		autoplay: false,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:2,
			},
			1000:{
				items:3,
			}
		}
	});
	// pre next product about page
	$('.pre').click(function(){
		$('.section3-hom4 .owl-prev').click();
	});
	$('.next').click(function(){
		$('.section3-hom4 .owl-next').click();
	});
	//slide2 hom4
	$('.slider-section5-hom4').owlCarousel({
		loop:true,
		nav:false,
		dots: false,
		smartSpeed:1000,
		autoplay: false,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:1,
			},
			1000:{
				items:1,
			}
		}
	});
	// pre next product about page
	$('.pre').click(function(){
		$('.section5-hom4 .owl-prev').click();
	});
	$('.next').click(function(){
		$('.section5-hom4 .owl-next').click();
	});
	
	
	//slide hom5
	$('.slider-hom5').owlCarousel({
		loop:true,
		nav:false,
		dots: false,
		smartSpeed:1000,
		autoplay: false,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:2,
			},
			1000:{
				items:4,
			}
		}
	});
	// pre next product about page
	$('.pre').click(function(){
		$('.section3-hom5 .owl-prev').click();
	});
	$('.next').click(function(){
		$('.section3-hom5 .owl-next').click();
	});
	
	
	//scroll
	$('.scroll').click(function(){
		$('html, body').animate({
			scrollTop: 0
		}, 2000);
	});
	
	//
	 $(window).scroll(function() 
	  {
		if ($(window).width() >= 992) 
		{
		  // var topNav = $(".header_pc .menu").offset().top+0;
		  var topNav = 50;
		  if($(window).scrollTop() > topNav) 
		  {
			$('.menu').css({'border-bottom':'none','background':'rgba(250, 250, 250, 1)','height':'70px','padding-top':'15px'});
			$('.menu_fixed').css({'top':'0px'});
			$('#header_container .nav > li > a').css({'color':'#034f84'});
		  } else{
				$('.menu').css({'background':'none','border-bottom':'solid 1px rgba(250, 250, 250, 0.6)','height':'95px','padding-top':'40px'});
				$('.menu_fixed').css({'top':'50px'});
				$('#header_container .nav > li > a').css({'color':'#034f84'});
			}
		  }
	  });
	
});

function show_animation(){	
	//animation phôt gallery home 2
	$('.photo-item').addClass('animated zoomIn').removeClass('animated-start');
	//end animation phôt gallery home 2

}

// map
var myCenter=new google.maps.LatLng(10.802945,106.689628);

function initialize()
{
	var mapProp = {
		center:myCenter,
		zoom:16,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};

	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

	var marker=new google.maps.Marker({
		position:myCenter,
		icon:'../assets/images/user/map_marker.png',
	});

	marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);












