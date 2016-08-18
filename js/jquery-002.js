
//loading
(function() {
	var container = document.getElementById('container');

	TweenMax.set(['svg'], {
		
	})

	TweenMax.set([container], {
		
	})

	var tl = new TimelineMax({
		repeat: -1
	});

	tl.set('#outline', {
		drawSVG: '0% 0%'
	})
	.to('#outline', 0.2, {
		drawSVG: '11% 25%',
		ease: Linear.easeNone
	})
	.to('#outline', 0.5, {
		drawSVG: '35% 70%',
		ease: Linear.easeNone
	})
	.to('#outline', 0.9, {
		drawSVG: '99% 100%',
		ease: Linear.easeNone
	})
})();
// search
new UISearch( document.getElementById( 'sb-search' ) );

//menu click
$(document).ready(function(){
	$('#nav-icon').click(function(){
		$(this).toggleClass('open');
	});
});

$('#navlist').lavalamp({
	easing: 'easeOutBack'
});
// input placeholder


// slider
$(function() {	
	var Page = (function() {

		var $nav = $( '#nav-dots > span' ),
		slitslider = $( '#slider2' ).slitslider( {
			onBeforeChange : function( slide2, pos ) {
				$nav.removeClass( 'nav-dot-current' );
				$nav.eq( pos ).addClass( 'nav-dot-current' );
			}
		} ),
		init = function() {
			initEvents();			
		},
		initEvents = function() {
			$nav.each( function( i ) {		
				$( this ).on( 'click', function( event ) {					
					var $dot = $( this );					
					if( !slitslider.isActive() ) {
						$nav.removeClass( 'nav-dot-current' );
						$dot.addClass( 'nav-dot-current' );					
					}					
					slitslider.jump( i + 1 );
					return false;				
				} );				
			} );
		};
		return { init : init };
	})();
	Page.init();
});

// tab home 2 Photo Gallery
$(document).ready(function(){
	$('.photo-tag li a').click(function(){
		$('.photo-tag li').removeClass('active');
		$(this).parent('li').addClass('active');
	})

});

openCity("Events")
function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
}

// google map
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












