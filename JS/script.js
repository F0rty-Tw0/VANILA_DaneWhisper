$(document).ready(() => {
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
		startDelay: 1000,
		showCursor: false
	});
});
