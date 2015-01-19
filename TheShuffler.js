$(function(){
	$.fn.shuffle = function() {
		var allElems = this.get(),
	  getRandom = function(max) {
	    return Math.floor(Math.random() * max);
	  },
	
	shuffled = $.map(allElems, function(){
		var random = getRandom(allElems.length),
		randEl = $(allElems[random]).clone(true)[0];
		allElems.splice(random, 1);
	 	return randEl;
	});
	 
	this.each(function(i){
		$(this).replaceWith($(shuffled[i]));
	});
	 	return $(shuffled);
	 	};
});
	        
$(function(){
	$('#enter').click(function(){
		var input = $('.input').val();
		$('#only').append('<li>' + input + '</li>');
				
		$('button.shuffle').click(function(){
		$('ul#only li').shuffle();
		});
			
	});	
});