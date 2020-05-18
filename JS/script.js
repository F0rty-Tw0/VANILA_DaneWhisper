$(document).ready(() => {
	$('#slides').superslides({
		animation: 'fade',
		play: 4000,
		pagination: false
	});

	var typed = new Typed('.typed', {
		strings: [ 'The ^100own^150er of "North^50ern Synth" ^200label.', 'Synth^100wave Pro^50du^100cer.' ],
		typeSpeed: 50,
		smartBackspace: true,
		backSpeed: 30
	});
});
