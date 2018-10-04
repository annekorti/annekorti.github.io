$(document).ready(function() {


var siteList = document.querySelector('.site__list');
var toggle = document.querySelector('.main__nav__toggle');
var navItem = document.querySelectorAll('.nav__item'); 

toggle.addEventListener('click', function() {
 	if (siteList.classList.contains('hide')) {
 			toggle.classList.add('open');
 			siteList.classList.remove('hide');
      siteList.classList.add('show');
    } else {
      siteList.classList.add('hide');
      siteList.classList.remove('show');
      toggle.classList.remove('open');
    }
  });


$('.nav__item').click(function(event){
  $('.nav__item').removeClass('nav__item--active');
  $(this).addClass('nav__item--active');
});

$('.site__list').on('click','a', function(event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
    top = $(id).offset().top;
     
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });

$('.top').click(function() {
    // переместиться в верхнюю часть страницы
    $('html, body').animate({
      scrollTop:0
    },1000);
  });

$(window).scroll(function() {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop()>1500) {
    // то сделать кнопку scrollup видимой
    $('.top').fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.top').fadeOut();
  }
});
});

var scroll = window.requestAnimationFrame ||
             // IE Fallback
             function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.show-on-scroll'); 

function loop() {

  elementsToShow.forEach(function (element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } 
  });

  scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0
      && rect.bottom >= 0)
    ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight))
    ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}

/*window.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) { 
		if (siteList.classList.contains('show')) {
			siteList.classList.remove('show');
			siteList.classList.add('hide');
		}
	}
});

window.addEventListener('keydown', function (evt) {
	if (evt.keyCode === 27) { 
		if (siteList.classList.contains('show')) {
			siteList.classList.remove('show');
			siteList.classList.add('hide');
		}
	}
});
*/
