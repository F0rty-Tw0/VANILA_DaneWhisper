document.addEventListener('DOMContentLoaded', function(event) {
	let head = document.querySelector('head');

	let loadJS = function(src) {
		let jsLink = document.createElement('script');
		jsLink.src = src;
		head.appendChild(jsLink);
	};
	loadJS('./JS/iso.js');
	loadJS('./JS/iframes.js');
	ready = false;
});

$(window).on('load', function() {
	$('.inner').fadeOut(500, function() {
		$('#loading').fadeOut(750);
	});
	$('.items').isotope({
		filter: '.singles',
		animationOptions: {
			duration: 1500,
			easing: 'linear'
		}
	});
	$('#filters a').click(function() {
		$('#filters .current').removeClass('current');
		$(this).addClass('current');

		var selector = $(this).attr('data-filter');

		$('.items').isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});
		return false;
	});
});

$(document).ready(() => {
	$('#slides').superslides({
		animation: 'fade',
		play: 4000,
		pagination: false
	});

	$('[data-fancybox]').fancybox();

	$('#video1').html('<source src="Videos/video1.mp4" type="video/mp4"></source>');
	$('#video2').html('<source src="Videos/video2.mp4" type="video/mp4"></source>');

	var typed = new Typed('.typed', {
		strings: [ 'The ^100own^150er of "North^50ern Synth" ^200label^1000', 'Synth^100wave Pro^50du^100cer^5000 ' ],
		typeSpeed: 60,
		smartBackspace: true,
		backSpeed: 30,
		loop: true,
		startDelay: 2500,
		showCursor: false
	});

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

	$('#owl-two').owlCarousel({
		loop: true,
		margin: 10,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 2
			}
		}
	});

	var infoTopOffset = $('.info-section').offset().top;
	var statsTopOffset = $('.stats-section').offset().top;
	var TopOffset = $('#about').offset().top;
	var coutnUpFinished = false;
	$('#section-card ').css('opacity', '0');
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
			$('#section-card ').css('opacity', '1');
			$('.arrow').css('opacity', '0');
		} else {
			$('#section-card').css('opacity', '0');
			$('.arrow').css('opacity', '1');
		}

		if (!coutnUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
			$('.counter').each(function() {
				var element = $(this);
				var endVal = parseInt(element.text());
				element.countup(endVal);
			});
			coutnUpFinished = true;
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
