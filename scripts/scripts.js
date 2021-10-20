$(document).ready(function(){
    $('.menu__btn').on('click', function (){
        $('.menu__adaptive').removeClass('menu__adaptive--close')    
    });
    $('.adaptive__btn').on('click', function (){
        $('.menu__adaptive').addClass('menu__adaptive--close')    
    });
    $('.top__slider').slick({
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '5px',
                slidesToShow: 1
              }
            }
          ]
    });
    $('.center__slider').slick({
        dots: false,
        arrows: false,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 1,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '5px',
                slidesToShow: 1
              }
            }
          ]
    });
});



function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  })
}

var buttonBuy = document.querySelector('#btn__buy');
var platform = document.querySelector('.platform');
var goDown = document.querySelector('.header__content-godown');


goDown.addEventListener('click', () => {
  scrollTo(platform);
})

buttonBuy.addEventListener('click', () => {
  scrollTo(platform);
})
