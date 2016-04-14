$.fn.fadeAll = function (ops) {
  var o = $.extend({
    delay: 500,
    speed: 500,
    ease: 'swing' // Other requires easing plugin
  }, ops);
  var $el = this;
  for (var i=0, d=0, l=$el.length; i<l; i++, d+=o.delay) {
    $el.eq(i).delay(d).fadeIn(o.speed, o.ease);
  }
  return $el;
};

$('img').fadeAll();