$(function() {
  // при нажатии на кнопку scrollup
  $('.top').click(function() {
    // переместиться в верхнюю часть страницы
    $("html, body").animate({
      scrollTop:0
    },1000);
  })
})
// при прокрутке окна (window)
$(window).scroll(function() {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop()>400) {
    // то сделать кнопку scrollup видимой
    $('.top').fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $('.top').fadeOut();
  }
});

 $(document).ready(function() {
  $('.slick-slider').slick({
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

$(document).ready(function() {
  $('.slick-slider-3').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
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