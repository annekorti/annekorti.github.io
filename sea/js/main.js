$(document).ready(function() {

  var toggle = document.querySelector('.main__nav__toggle');
  var menu = document.querySelector('.site__list');

  var link = document.querySelector('.only-desk');
  var popup = document.querySelector('.modal');
  var podl = document.querySelector('.podl');
  var close = document.querySelector('.modal-close');
  

  toggle.addEventListener('click', function() {
    toggle.classList.toggle('open');
    if (toggle.classList.contains('open')) {
      menu.classList.remove('hide');
      menu.classList.add('show');
    }
    else {
      menu.classList.add('hide');
      menu.classList.remove('show');
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
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  podl.classList.remove('podl-1');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) { 
    if (popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
      podl.classList.remove('podl-1');
    }
   }
});
})