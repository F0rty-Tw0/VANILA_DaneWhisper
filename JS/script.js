let head = document.querySelector('head');
let loadJS = function(src) {
	let jsLink = document.createElement('script');
	jsLink.src = src;
	head.appendChild(jsLink);
};

document.addEventListener('DOMContentLoaded', function(event) {
	loadJS('./JS/iso.js');
	ready = false;
});

$(window).on('load', function() {
	loadJS('./JS/iframes1.js');
	loadJS('./JS/iframes2.js');
	loadJS('./JS/iframes3.js');
	$('.items').isotope({
		filter: '.singles',
		animationOptions: {
			duration: 1500,
			easing: 'linear'
		}
	});
	$('.filters a').click(function() {
		$('.filters .current').removeClass('current');
		$(this).addClass('current');

		var selector = $(this).attr('data-filter');

		$('.items').isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear'
			}
		});
		return false;
	});
	$('#albums').css('opacity', '1');
});

$(document).ready(() => {
	$('.inner').fadeOut(500, function() {
		$('#loading').fadeOut(750);
	});

	$('#slides').superslides({
		animation: 'fade',
		play: 4000,
		pagination: false
	});

	$('[data-fancybox]').fancybox();

	$('#owl-one').owlCarousel({
		loop: true,
		margin: 10,
		nav: true,
		navText: [ "<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>" ],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 4
			}
		}
	});

	var infoTopOffset = $('.info-section').offset().top;
	var TopOffset = $('#about').offset().top;
	$(window).scroll(function() {
		if (window.pageYOffset > infoTopOffset - $(window).height() + 400) {
			$('.chart').easyPieChart({
				easing: 'easeInOut',
				barColor: '#fff',
				trackColor: false,
				scaleColor: false,
				lineWidth: 4,
				size: 200,
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent * 22.5));
				}
			});
			$('.nav-btn').css('opacity', '1');
		}

		if (window.pageYOffset > TopOffset - $(window).height()) {
			$('#about .container').css('opacity', '1');
			$('.arrow').css('opacity', '0');
		} else {
			$('#about .container').css('opacity', '0');
			$('.arrow').css('opacity', '1');
		}
	});

	jQuery(function($) {
		$('.sidebar-dropdown > a').click(function() {
			$('.sidebar-submenu').slideUp(200);
			if ($(this).parent().hasClass('active')) {
				$('.sidebar-dropdown').removeClass('active');
				$(this).parent().removeClass('active');
			} else {
				$('.sidebar-dropdown').removeClass('active');
				$(this).next('.sidebar-submenu').slideDown(200);
				$(this).parent().addClass('active');
			}
		});

		$('#close-sidebar').click(function() {
			$('.page-wrapper').removeClass('toggled');
		});
		$('#show-sidebar').click(function() {
			$('.page-wrapper').addClass('toggled');
		});
	});
});
