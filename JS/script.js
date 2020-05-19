$(document).ready(() => {
	$('.loading').fadeOut(1200);
	$('#loading').delay(1000).fadeOut(1000);

	$('#slides').superslides({
		animation: 'fade',
		play: 4000,
		pagination: false
	});

	var typed = new Typed('.typed', {
		strings: [ 'The ^100own^150er of "North^50ern Synth" ^200label^1000', 'Synth^100wave Pro^50du^100cer^5000 ' ],
		typeSpeed: 60,
		smartBackspace: true,
		backSpeed: 30,
		loop: true,
		startDelay: 2500,
		showCursor: false
	});

	$('.owl-carousel').owlCarousel({
		loop: true,
		items: 4,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			}
		}
	});

	var infoTopOffset = $('.info-section').offset().top;

	$(window).scroll(function() {
		if (window.pageYOffset > infoTopOffset - $(window).height() + 800) {
			$('.chart').easyPieChart({
				easing: 'easeInOut',
				barColor: '#fff',
				trackColor: false,
				scaleColor: false,
				lineWidth: 4,
				size: 200,
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent * 23));
				}
			});
		}
	});

	$('#section-card ').fadeOut(100);
	var infoTopOffset = $('#about').offset().top;

	$(window).scroll(function() {
		if (window.pageYOffset > infoTopOffset - $(window).height()) {
			$('#slides').css('z-index', 0);
			$('#section-card ').fadeIn(200);
		} else {
			$('#section-card ').fadeOut(200, function() {
				$('#slides').css('z-index', '0');
			});
		}
	});
});
