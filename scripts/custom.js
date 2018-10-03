// Functions

// On Page Load
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