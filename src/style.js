$('document').ready(function() {

	$('header').mouseenter(function() {

			$('#logo').fadeIn(1000);		
		$('header').css('justify-content', 'space-between').animate({
			height: '100%'
		}, 1000).animate({
			width: '100%',
			'border-bottom-left-radius': 0,
			'border-bottom-right-radius': 0
		}, 1000, function() {
			$('#search').fadeIn(1000);
		});
	});
});
