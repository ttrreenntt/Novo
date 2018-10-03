
/**
 * This script wrapped in a Immediately-Invoked Function Expression (IIFE) to
 * prevent variables from leaking onto the global scope. For more information
 * on IIFE visit the link below.
 * @see http://en.wikipedia.org/wiki/Immediately-invoked_function_expression
 */

(function() {
  'use strict';

  // Load all images via Squarespace's Responsive ImageLoader
  function loadAllImages() {
    var images = document.querySelectorAll('img[data-src]' );
    for (var i = 0; i < images.length; i++) {
      ImageLoader.load(images[i], {load: true});
    }
  }

  // The event subscription that loads images when the page is ready
  document.addEventListener('DOMContentLoaded', loadAllImages);

  // The event subscription that reloads images on resize
  window.addEventListener('resize', loadAllImages);

}());

$( document ).ready(function() {
	// Get the Sequence element
	var sequenceElement = document.getElementById("sequence");
	
	// Place your Sequence options here to override defaults
	// See: http://sequencejs.com/documentation/#options
	var options = {
		keyNavigation: true,
	  startingStepAnimatesIn: true,
	  autoPlay: true,
	  autoPlayInterval: 2000,
	  phaseThreshold: 250,
	  preloader: true,
	  reverseWhenNavigatingBackwards: true,
	  fadeStepWhenSkipped: false
	}
	
	// Launch Sequence on the element, and with the options we specified above
	var mySequence = sequence(sequenceElement, options);
}); 