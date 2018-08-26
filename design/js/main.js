 $(document).ready(function() {
  $('.slider-menu').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	dots: true,
  	autoplay: true,
  	autoplaySpeed: 3000,
  	arrows : false,
  	responsive: [
  	{
  		breakpoint: 1169,
  		settings: "unslick"
  	}]
})
});

 var navMain = document.querySelector('.main-nav');
 var navToggle = document.querySelector('.main-nav__toggle');

  navToggle.addEventListener('click', function() {
 	if (navMain.classList.contains('main-nav--closed')) {
 		navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });


	