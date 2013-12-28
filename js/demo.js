(function() {
  $('.showme').click(function() {
    var done, show, that;
    show = $(this).data('show');
    $(show).show();
    that = this;
    done = function() {
      $(that).hide();
      $('#main').css('margin-top', '0');
      return $("html, body").animate({
        "scrollTop": 0
      }, 0);
    };
    return setTimeout(done, 2000);
  });

}).call(this);
