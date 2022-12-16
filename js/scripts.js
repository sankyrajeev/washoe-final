$(document).ready(function(){
	/*
	 * ************
	 * Toggle class 
	 * ************
	 *
	 * When a certain element is clicked, a class is toggled (either added removed) on the <body> tag.
	 * This function works well for a button that triggers a mobile menu to appear.
	*/
	
	/* Click function to add a class */
	$('.js-menu-trigger').click( function() {
		$('body').toggleClass('show-menu');
	});

	/*
	Explanation of what the code above does:
	* When an element with the class 'js-menu-trigger' is clicked...
	* ...Toggle (either add or remove) the class 'show-menu' on the element 'body'
	*/

});