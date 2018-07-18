var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

var link = document.querySelector('.top-product__button');
var popup = document.querySelector('.modal');
var podl = document.querySelector('.podl');


navToggle.addEventListener('click', function() {
 	if (navMain.classList.contains('main-nav--closed')) {
 		navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
});

link.addEventListener('click', function (evt) {
	evt.preventDefault();
	popup.classList.add('modal-show');
	podl.classList.add('podl-1');
});

podl.addEventListener('click', function (evt) {
	evt.preventDefault();
		if (popup.classList.contains('modal-show')) {
			popup.classList.remove('modal-show');
			podl.classList.remove('podl-1');
		}
});

window.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) { 
	  if (popup.classList.contains('modal-show')) {
	  	popup.classList.remove('modal-show');
	  	podl.classList.remove('podl-1');
	  }
	 }
});
