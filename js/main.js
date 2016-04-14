// Closing Door
(function($){
	$(function(){
	  
	
        
        
        $('body').click(function(e){
            
        e.preventDefault();
			var menu = $('.menu');

			if (menu.hasClass('in')) {
				menu.toggleClass('in');
                $('.navbar').show();
                $('.home-content').show();
			}
			

        });
        
        

	}); // end of document ready
})(jQuery); // end of jQuery name space