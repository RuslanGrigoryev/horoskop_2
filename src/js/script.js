


// slider
(function($){

htmSlider = function() {
	this._init = function(element, options) {
		var defaults = {
		slideWrap : $(element),
		nextLink : $('.next-slide'),
		prevLink : $('.prev-slide')        
		},
		settings = $.extend(defaults, options); 


		var slideWidth = settings.slideWrap.find('.slide-item').outerWidth(),
			newLeftPos = settings.slideWrap.position().left - slideWidth;
   
		settings.nextLink.click(function(){
			if( settings.nextLink.attr('name') == 'next' ) {
			
				settings.nextLink.removeAttr('name');
				
				settings.slideWrap.animate({left: newLeftPos}, 500, function(){
					settings.slideWrap
						.find('.slide-item:first')
						.appendTo(settings.slideWrap)
						.parent()
						.css({'left': 0});
				});
				
				setTimeout(function(){ settings.nextLink.attr('name','next') }, 600);
			}
		});

		settings.prevLink.click(function(){
			if( settings.prevLink.attr('name') == 'prev' ) {
			
				settings.prevLink.removeAttr('name');
			
				settings.slideWrap
					.css({'left': newLeftPos})
					.find('.slide-item:last')
					.prependTo(settings.slideWrap)
					.parent()
					.animate({left: 0}, 500);

				setTimeout(function(){ settings.prevLink.attr('name','prev') }, 600);
			}
		}); 

		function autoplay(){
			settings.slideWrap.animate({left: newLeftPos}, 600, function(){
				settings.slideWrap
					.find('.slide-item:first')
					.appendTo(settings.slideWrap)
					.parent()
					.css({'left': 0});
			});
		}

		if(settings.slideWrap.hasClass('play')){
			setInterval(autoplay(), 500);
		}  
	};
};
// Launch plugin
$.fn.htmSlider = function( options ){
  return this.each(function(){
       $( this ).data( "htmSlider", new htmSlider()._init( this, options ) );
   });
};
})(jQuery);
// end slider
	$('.slide-wrap').htmSlider();