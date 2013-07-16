$(function(){

	Site.init();
	Site.getWidth();
});

var Site = {
	one: 1,
	
	init: function(){
		$('#mainContent').fadeTo(500, 1);
		$('#homeNav').on('click', 'a', function(e){
			console.log('cool');
			e.preventDefault();
		});
		
		$(window).on('resize', function(){
			Site.getWidth();
		});
	},
	
	getWidth: function(){
		var width= $(window).width();
		$('#width').html(width);
	}
	
};