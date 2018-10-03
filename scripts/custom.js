// Functions
function navReveal() {
    	$('body').toggleClass('show-nav');
}

function portfolioReveal(gallery) {
	 
		switch (gallery) {

			case "hospitality":		 
				$('body').removeClass('show-clubs');
				$('body').removeClass('show-senior');
				$('body').removeClass('show-progress');
				break;
				 
			case "clubs": 		
				$('body').removeClass('show-hospitality');
				$('body').removeClass('show-senior');
				$('body').removeClass('show-progress');
				break;   
				
			case "senior":		
				$('body').removeClass('show-hospitality');
				$('body').removeClass('show-clubs');
				$('body').removeClass('show-progress'); 
				break;
				
			case "progress":		
				$('body').removeClass('show-hospitality');
				$('body').removeClass('show-clubs');
				$('body').removeClass('show-senior');   
		};
		
    	$('body').toggleClass('show-'+ gallery); 
    	$.smoothScroll({scrollTarget: '#work'});   
} 

function portfolioHide() {
	$('body').removeClass('show-hospitality');
	$('body').removeClass('show-senior');
	$('body').removeClass('show-clubs');
	$('body').removeClass('show-progress');
}
 
function titleHide() {
    	$('body').toggleClass('hide-title');
}

// On Page Load
$(document).ready(function () {

	// Hide and Reveal Sidebar 
	$('.toggle-nav').click(function(){ navReveal(); });
	
	$('.menu li a').click(function(){ navReveal(); });
	
	$('.close-gallery').click(function(){ portfolioHide(); });
	$('section').click(function(){ portfolioHide(); });
	$('header').click(function(){ portfolioHide(); });
	$('footer').click(function(){ portfolioHide(); });
	$('.toggle-nav').click(function(){ portfolioHide(); });
	
	$('.sqs-video-icon').click(function(){ titleHide(); });
	$('.sqs-video-opaque').click(function(){ titleHide(); });
	$('.target').click(function(){ titleHide(); });
	
	$('.hospitality').click(function(){ portfolioReveal('hospitality'); });
	$('.clubs').click(function(){ portfolioReveal('clubs'); }); 
	$('.senior').click(function(){ portfolioReveal('senior'); });
	$('.progress').click(function(){ portfolioReveal('progress'); });    
	
	// Smooth Scroll
	$('a').smoothScroll();   
	
});