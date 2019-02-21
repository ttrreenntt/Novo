
// Use the sqs-core module to access core Squarespace
// functionality, like Lifecycle and ImageLoader. For
// full documentation, go to:
//
// http://github.com/squarespace/squarespace-core


//Included Modules
const core = require('@squarespace/core');
const controller = require('@squarespace/controller');
const tilt = require('vanilla-tilt/dist/vanilla-tilt-custom.js');


// Action Animations
function hideControls(player) {
    $(player).addClass('hide-controls');
}

function toggleFeatured() {
    $('aside').toggleClass('show-featured');
}

function toggleNav() {
    $('body').toggleClass('show-nav');
}

function toggleBtn(btn) {
	$(btn).toggleClass('close-btn');
	$(btn).toggleClass('icon-arrow-right');
	$(btn).toggleClass('icon-close');
}
 
function addArrows() {
    $('.form-button-wrapper').addClass('icon-arrow-right');
}


// Pick Blog Post
function pickBlog() {
    const blog = Math.ceil(Math.random() * 3);
    
    switch(blog) {
	    case 1:
		// Keep the Discipleship Blog visible
	    break;
	    case 2:
	    $('.discipleship').toggleClass('show');
	    $('.mission').toggleClass('show');
	    // Switch to Mission Blog
	    break;
	    case 3:
	    $('.discipleship').toggleClass('show');
	    $('.action').toggleClass('show');
	    // Switch to Action Blog 
    }
}


$(document).ready(function () {
	
	// Hide Video Controls
	$('.sqs-video-wrapper').click(function(){ hideControls(this); });
	
	// Show / Hide Featured Content
	$('.featured-button').click(function(){ toggleFeatured(); });
	
	// Show / Hide Mobile Nae
	$('.open-nav').click(function(){ toggleNav(); });
	$('.close-nav').click(function(){ toggleNav(); });
	
	// Replace Button Text
	$('.featured-button').click(function(){ toggleBtn(this); });
	
	// Add Arrows to Form Buttons 
	$('.sqs-editable-button').click(function(){ addArrows(); });
	
});


// Loading Animations
document.body.classList.add('js-loading');

window.addEventListener("load", showPage);

function showPage() {
  document.body.classList.remove('js-loading');
  
  $('header').addClass('show');
  
  // Fix Footer Buttons
  $('span.sqs-editable-button').addClass('icon-arrow-right');
  $('.subscribe-content .sqs-editable-button').html("<strong>Sign Up</strong>"); 
  $('.contact-content .sqs-editable-button').html("Send an <strong>Email</strong>");
  
  // Pick Blog Post
  pickBlog();
  
  
}


// SQSP Functions
window.addEventListener('DOMContentLoaded', function() {

  const images = document.querySelectorAll('img[data-src]');

  for (let i = 0; i < images.length; i++) {
    core.ImageLoader.load(images[i], {
      load: true
    });
  } 

});

