var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

var sitelist = document.querySelector('.site-list');;
var searchlist = document.querySelector('.search-list');


var link = document.querySelector('.top-product__button');
var popup = document.querySelector('.modal');
var podl = document.querySelector('.podl');

//var price = document.getElementsByTagName('.top-product__button');


navToggle.addEventListener('click', function() {
 	if (sitelist.classList.contains('main-nav--closed') || searchlist.classList.contains('main-nav--closed')) {
 			sitelist.classList.remove('main-nav--closed');
      sitelist.classList.add('main-nav--opened');
      searchlist.classList.remove('main-nav--closed');
      searchlist.classList.add('main-nav--opened');
      navMain.classList.remove('main-nav--close');
      navMain.classList.add('main-nav--open');
    } else {
      sitelist.classList.add('main-nav--closed');
      sitelist.classList.remove('main-nav--opened');
      searchlist.classList.add('main-nav--closed');
      searchlist.classList.remove('main-nav--opened');
      navMain.classList.add('main-nav--close');
      navMain.classList.remove('main-nav--open');
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

