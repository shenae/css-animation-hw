$(window).on('scroll', function () {
	// Step 1: Google $(window).scrollTop();
	var distanceScrolled = $(window).scrollTop();

	console.log('The distance scrolled is: ' + distanceScrolled);
let stickyNav = document.querySelector('.main-nav');
	// Step 2: Write Rest of JS here

if(distanceScrolled > 540) {
	stickyNav.style.position = "fixed";
} else if(distanceScrolled < 540) {
	stickyNav.style.position = "static";
}
});
//notes from da interwebs
//$("li.test").offset().top how far down the menu is
//.scrollTop() will always be 0 on mobile phones.
//Use $(element).offset().top and add height of existing fixed elements on the page to it to make it more accurate.

// $('div#something').scroll(function () {
//     if ($(this).scrollTop() > 200) {
//         $(this).addClass('foo');
//     } else {
//         $(this).removeClass('foo');
//     }
// });