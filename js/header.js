//header
$(document).ready(function() {	
	//
	 $(window).scroll(function() 
	  {
		if ($(window).width() >= 992) 
		{
		  // var topNav = $(".header_pc .menu").offset().top+0;
		  var topNav = 50;
		  if($(window).scrollTop() > topNav) 
		  {
			$('.menu').css({'border-bottom':'none','background':'#fff','height':'70px','padding-top':'15px','box-shadow':'0px 3px 5px 0px rgba(50, 50, 50, 0.2)'});
			$('.menu_fixed').css({'top':'0px'});
		  } else{
			$('.menu').css({'background':'#fff','border-bottom':'solid 1px rgba(250, 250, 250, 0.6)','height':'95px','padding-top':'40px','box-shadow':'0px 3px 5px 0px rgba(50, 50, 50, 0.2)'});
			$('.menu_fixed').css({'top':'50px'});
			}
		  }
	  });
	
});