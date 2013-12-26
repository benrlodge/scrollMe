(function() {
  var scrollMe;

  (scrollMe = function() {
    return $('.scrollme').click(function(e) {
      var goto, speed;
      goto = $(this).data('scroll-y') + 'px';
      speed = $(this).data('scroll-speed');
      $("html, body").animate({
        "scrollTop": goto
      }, speed);
      return false;
    });
  })();

}).call(this);
