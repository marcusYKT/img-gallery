(function($){
	'use strict';

	var $img__wrap 	= $('img__wrap');
	var $artwork 		= $('[data-artwork]');
	var $modal 			= $('.modal');
	var activeClass = "js--active";
	var $close 			= $('.svg-close');

	// click event listner
	function artwork (){
		$artwork.on('click', function(){
			$(this)
				.closest('.img__wrap')
				.find($modal)
				.show(200);
		});
	}

	function hide(){
		$modal.hide(200);
	}

	function closeButton(){
		// close event listner
		$close.on('click', function(){
			hide();
		});
	}

	function escapeKey(){
		// escape key event listner
		$('body').on('keyup',function(e) {
			if (e.keyCode === 27) {
				hide();
			}
		});
	}

	artwork();
	escapeKey();
	closeButton();

})(jQuery);
	