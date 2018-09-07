

jQuery(document).ready(function(){

        "use strict"
        $('.slider').ripples({
            dropRadius: 15,
            perturbance: 0.01,
            
        });

     
    $(".text").typed({
        strings:["<strong>i love </strong><strong class='primary'>coding.</strong>","<strong>and to </strong><strong class='primary'>share !!.</strong>"],
        typespeed:0,
        loop:true

    });    
  
	$(window).scroll(function(){

	var top = $(window).scrollTop();
		if (top>=60){
			$("nav").addClass('secondary');
		}
		else 
			if($("nav").hasClass('secondary')){
				$("nav").removeClass('secondary');
			}
			
    });
    
    $('a').smoothScroll();

});