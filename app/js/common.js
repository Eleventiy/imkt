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
	$('.portfolio-slider').slick({});

});
