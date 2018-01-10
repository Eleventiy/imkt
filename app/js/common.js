'use strict';

$(function() {

	// PageScrollToId init
	$(window).on("load", function() {
		$('a[rel="m_PageScroll2id"]').mPageScroll2id();
	});

	// JqueryUI accordions
	// $('#whyUsAccordion').accordion();

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
		},

		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					draggable: true
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	// Slick slider init on Section "Technologies"
	$('#techSlider').not('.slick-initialized').slick({
		draggable: false,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1500,
		pauseOnFocus: false,
		slidesToShow: 5,
		slidesToScroll: 1,

		responsive: [
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					draggable: true,
					dots: true,
					autoplay: false
				}
			}
		]
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	});

	$('#testimonialSlider').not('.slick-initialized').slick({
		draggable: false,
		arrows: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 1500,
		pauseOnFocus: false,
		slidesToShow: 5,
		slidesToScroll: 1
	});

	// Jquery Validation form
	var requestForm = $('#requestForm');

	requestForm.validate();


	// *** Scripts for mobile ***
	// ==========================

	// Mobile burger
	var mSandwich = $('#mSandwich'),
		mTopNav = $('#mTopNav'),
		mNavLink = $('.top-nav__link'),
		mNavLogo = $('.top-nav__logo');

	mSandwich.click(function(e) {
		e.preventDefault();

		$(this).toggleClass('active');
		mTopNav.toggleClass('active');
	});

	mNavLink.click(function() {
		mTopNav.removeClass('active');
		mSandwich.removeClass('active');
	});

	mNavLogo.click(function() {
		mTopNav.removeClass('active');
		mSandwich.removeClass('active');
	});

	// Mobile accordions
	var servAccordBtn1 = $('#servAccordBtn1'),
			servContent1 = $('#servContent1');

	servAccordBtn1.click(function(e) {
		e.preventDefault();

		$(this).toggleClass('active');
		servContent1.toggleClass('active');
	});


	// *** Functions ***
	// =================
	// function custom_accordion(id) {
	// 	var elm = document.getElementById(id);
	// 	if (elm.className.indexOf("show") == -1) {
	// 		elm.className += " show";
	// 	} else {
	// 		elm.className = elm.className.replace(" show", "");
	// 	}
	//
	// }

});



// *** Map ***
// ===========

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
