$('.flip-container').mouseenter(function(){
  $('body').addClass('body_m', 1000);
});
$('.flip-container').mouseleave(function(){
  $('body').stop().removeClass('body_m', 900);
});


