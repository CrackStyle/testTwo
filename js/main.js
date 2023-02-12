$(function () {

$('.reviews__sliders').slick({
  arrows: false,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  appendDots: $('.reviews__dots'),
  waitForAnimate: false,
})

$('.reviews__prev').on('click', function (i) {
  i.preventDefault()
  $('.reviews__sliders').slick('slickPrev')
})
$('.reviews__next').on('click', function (i) {
  i.preventDefault()
  $('.reviews__sliders').slick('slickNext')
})

$('.accordeon__questions').removeClass("accordeon__questions--active")
$('.accordeon__questions').on('click', function(e){
  e.preventDefault()
  if ($(this).hasClass('accordeon__questions--active')) {
    $(this).removeClass('accordeon__questions--active')
    $(this).children('.accordeon-content').slideUp()
  } else {
    $('.accordeon__questions').removeClass('accordeon__questions--active')
    $('.accordeon-content').slideUp()
    $(this).addClass('accordeon__questions--active')
    $(this).children('.accordeon-content').slideDown()
  }
})


$('.burger, .overlay').on('click', function (e) {
  e.preventDefault()
  $('.burger').toggleClass('opened')
  $('.header__top').toggleClass('header__top--open')
  $('.overlay').toggleClass('overlay--show')
})


})