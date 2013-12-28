(function() {
  var $;

  $ = jQuery;

  $.fn.extend({
    scrollMe: function(options) {
      var log, settings;
      settings = {
        selector: this,
        scrollto: '',
        type: '',
        speed: 900
      };
      settings = $.extend(settings, options);
      log = function(msg) {
        return console.log(msg);
      };
      return this.each(function() {
        var absolute, init, scrollto, selector, specific, speed, type;
        selector = settings.selector;
        scrollto = settings.scrollto;
        speed = settings.speed;
        type = settings.type;
        init = function() {
          return selector.click(function() {
            if (type === 'absolute') {
              absolute();
            }
            if (type === 'specific') {
              specific();
            }
            return false;
          });
        };
        absolute = function() {
          return $('html, body').animate({
            'scrollTop': scrollto + 'px'
          }, speed);
        };
        specific = function() {
          var location;
          log('specific');
          location = $(scrollto).offset().top;
          log('location: ' + location);
          return $('html, body').animate({
            'scrollTop': location + 'px'
          }, speed);
        };
        return init();
      });
    }
  });

}).call(this);
