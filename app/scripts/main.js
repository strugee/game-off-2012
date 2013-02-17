//bind the event handler
$('#puzzlelaunch').click(function () {
	$('#gamemenu').hide();
	$('footer').hide();
	Crafty.init();	
	var floor = Crafty.e('2D, DOM, Color, Floor')
		.color('green')
		.attr({w: 500, h: 25, y: 100});
	var mainChar = Crafty.e('2D, Gravity, Twoway, Color, DOM')
		.twoway(3, 5)
		.color('red')
		.attr({w: 50, h: 50})
		.gravity('Floor');
});
