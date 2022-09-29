$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__burger').toggleClass('burger-active');
    $('.header-mobile-navbar').toggleClass('menu-active');
  });
});