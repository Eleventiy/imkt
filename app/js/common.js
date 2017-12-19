'use strict';

$(function() {

	// Mobile burger
	var mBurger = $('#mSandwich'),
			mHeader = $('#mHeader'),
			mNavLink = $('.top-nav__link'),
			mNavLogo = $('.top-nav__logo');

	mBurger.click(function(e) {
		e.preventDefault();

		$(this).toggleClass('active');
		mHeader.toggleClass('active');
	});

	mNavLink.click(function() {
		mHeader.removeClass('active');
		mBurger.removeClass('active');
	});

	mNavLogo.click(function() {
		mHeader.removeClass('active');
		mBurger.removeClass('active');
	});

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

	// Slick slider init on Section "Portfolio"
	$('#techSlider').not('.slick-initialized').slick({
		draggable: false,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnFocus: false,
		slidesToShow: 5,
		slidesToScroll: 1
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
		zoom: 16,

		// The latitude and longitude to center the map (always required)
		center: new google.maps.LatLng(50.3993646,30.6501465), // Kiev

		scrollwheel: false,


		// How you would like to style the map.
		// This is where you would paste any style found on Snazzy Maps.
		styles: [
			{
				"stylers": [
					{
						"saturation": -100
					}
				]
			},
			{
				"featureType": "landscape",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#f7f7f7"
					}
				]
			},
			{
				"featureType": "landscape.man_made",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#f7f7f7"
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "labels.icon",
				"stylers": [
					{
						"saturation": -100
					}
				]
			},
			{
				"featureType": "poi",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#333333"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry.stroke",
				"stylers": [
					{
						"color": "#e7e7e7"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#5f5f5f"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"weight": 1.5
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#afafaf"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#333333"
					}
				]
			}
		]
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
