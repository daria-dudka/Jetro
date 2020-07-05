$(function () {


  $('.slider__inner').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.png" alt=""></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    responsive: [
      {
        breakpoint: 960,
        settings: {
          arrows: false,
          autoplay: true
        }
      },
    ]
  });

  $('.slider__nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider__inner',
    focusOnSelect: true
  });

  $('.header__menu-btn').on('click', function () {
    $('.menu__list').slideToggle();
  });

});