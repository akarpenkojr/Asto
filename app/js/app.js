$(document).ready(function(){
	$("#scrollToServices").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#services").offset().top
		}, 2000);
	});
	$("#mouse2").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#services").offset().top
		}, 2000);
	});
	$("#mouse3").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#team").offset().top
		}, 2000);
	});
	$("#mouse4").click(function() {
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#team").offset().top
		}, 2000);
	});

	$(".owl-carousel-header").owlCarousel({
		nav: false,
		items: 1,
		center: true,
		loop: true,
		mouseDrag: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 5000,
		smartSpeed: 700,
		dots: true
	});
	$(".owl-carousel-services-d").owlCarousel({
		nav: false,
		items: 2,
		center: false,
		loop: true,
		mouseDrag: false,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 7000,
		smartSpeed: 700,
	});
	$(".owl-carousel-services-m").owlCarousel({
		nav: false,
		items: 1,
		center: true,
		loop: true,
		mouseDrag: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 7000,
		smartSpeed: 700,
	});
	$(".owl-carousel-team").owlCarousel({
		nav: false,
		items: 1,
		center: true,
		loop: true,
		mouseDrag: true,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayTimeout: 5000,
		smartSpeed: 700,
	});
});

document.addEventListener("DOMContentLoaded", function() {

	var vh = window.innerHeight * 0.01;
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', vh + 'px');

	// We listen to the resize event
	window.addEventListener('resize', () => {
		// We execute the same script as before
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	});


	console.log('123123123')
});
