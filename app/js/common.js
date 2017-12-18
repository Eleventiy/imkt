$(function() {

	// PageScrollToId init
	$(window).on("load", function() {
		$('a[rel="m_PageScroll2id"]').mPageScroll2id();
	});

	// Toggle tabs on Section "Why us"
	$('#tab1').click(function() {
		$('#tabThumb1').addClass('active');

		$('#tabThumb2').removeClass('active');
		$('#tabThumb3').removeClass('active');
		$('#tabThumb4').removeClass('active');
		$('#tabThumb5').removeClass('active');
	});

	$('#tab2').click(function() {
		$('#tabThumb2').addClass('active');

		$('#tabThumb1').removeClass('active');
		$('#tabThumb3').removeClass('active');
		$('#tabThumb4').removeClass('active');
		$('#tabThumb5').removeClass('active');
	});

	$('#tab3').click(function() {
		$('#tabThumb3').addClass('active');

		$('#tabThumb1').removeClass('active');
		$('#tabThumb2').removeClass('active');
		$('#tabThumb4').removeClass('active');
		$('#tabThumb5').removeClass('active');
	});

	$('#tab4').click(function() {
		$('#tabThumb4').addClass('active');

		$('#tabThumb1').removeClass('active');
		$('#tabThumb2').removeClass('active');
		$('#tabThumb3').removeClass('active');
		$('#tabThumb5').removeClass('active');
	});

	$('#tab5').click(function() {
		$('#tabThumb5').addClass('active');

		$('#tabThumb1').removeClass('active');
		$('#tabThumb2').removeClass('active');
		$('#tabThumb3').removeClass('active');
		$('#tabThumb4').removeClass('active');
	});

	// Slick slider init on Section "Portfolio"
	$('#portfolioSlider').not('.slick-initialized').slick({
		draggable: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2500,

		customPaging : function(slider, i) {
			var title = $(slider.$slides[i]).data('title');
			return '<a class="portfolio-slider__pager"> '+title+' </a>';
		}
	});

});


/////////////////////////////////////////////////////////////////
// Map
/////////////////////////////////////////////////////////////////

// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
	// Basic options for a simple Google Map
	// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	var mapOptions = {
		// How zoomed in you want the map to start at (always required)
		zoom: 15,

		// The latitude and longitude to center the map (always required)
		center: new google.maps.LatLng(50.3991845, 30.6501579), // Kiev

		scrollwheel: false,


		// How you would like to style the map.
		// This is where you would paste any style found on Snazzy Maps.
		styles: [
			{"featureType":"water", "elementType":"geometry", "stylers":[{"color":"#afafaf"},{"lightness":1}]},
			{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#dddddd"},{"lightness":1}]},
			{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":1}]},
			{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#aaaaaa"},{"lightness":1},{"weight":1}]},
			{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":1}]},
			{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":1}]},
			{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":1}]},
			{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":1}]},
			{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":1}]},
			{"elementType":"labels.text.fill","stylers":[{"color":"#333333"},{"lightness":1}]},
			// {"elementType":"labels.icon","stylers":[{"color":"#333333"}]},
			{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":1}]},
			{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#bebebe"},{"lightness":1}]},
			{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#bebebe"},{"lightness":1},{"weight":1.2}]}]
	};

	// Get the HTML DOM element that will contain your map
	// We are using a div with id="map" seen below in the <body>
	var mapElement = document.getElementById('map');

	// Create the Google Map using our element and options defined above
	var map = new google.maps.Map(mapElement, mapOptions);

	var image = './img/google-map/marker.png';
	// Let's also add a marker while we're at it
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(50.3991845, 30.6501579),
		map: map,
		icon: image,
		draggable: true,
		animation: google.maps.Animation.DROP
	});
	marker.addListener('click', toggleBounce);

	function toggleBounce() {
		if (marker.getAnimation() !== null) {
			marker.setAnimation(null);
		} else {
			marker.setAnimation(google.maps.Animation.BOUNCE);
		}
	}
}
