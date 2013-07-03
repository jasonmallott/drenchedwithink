$(function(){

	Site.init();

});

var Site = {
	one: 1,
	
	init: function(){
		$('#mainContent').fadeTo(500, 1);
		$('#homeNav').on('click', 'a', function(e){
			console.log('cool');
			e.preventDefault();
		});
	},
	
};