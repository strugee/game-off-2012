window.onload = function () {
	//bind the event handler for game initialization
	$('#puzzlelaunch').click(function () {
		//hide menu
		$('#gamemenu').hide();
		$('footer').hide();

		//canvas init
		Crafty.init();

		//loading scene
		Crafty.scene('loading', function () {
			//load takes an array of assets and a callback when complete
			Crafty.load(['images/character.png', 'images/item.png'], function () {
				console.log('loaded');
				Crafty.scene('main'); //when everything is loaded, run the main scene
			});

			//not black background with some loading text
			Crafty.e('2D, DOM, Text').attr({ w: 100, h: 20, x: 150, y: 120 })
				.text('Loading')
				.css({ 'text-align': 'center' });
		});

		//main scene
		Crafty.scene('main', function () {
			var floor = Crafty.e('2D, DOM, Color, Floor')
				.color('green')
				.attr({w: 500, h: 25, y: 150});
			var mainChar = Crafty.e('2D, Gravity, Twoway, DOM, Image')
				.image('images/character.png')
				.twoway(3, 5)
				.attr({w: 50, h: 50})
				.gravity('Floor');
			/*var mapurl = 'level/test_level.json';
			var map = Crafty.e('2D, TiledLevel')
				.tiledLevel(mapurl);*/
		});

		//load init
		Crafty.scene('loading');
	});
};
