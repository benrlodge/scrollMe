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
        var absolute, init, relative, scrollto, selector, specific, speed, type;
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
            if (type === 'relative') {
              return relative();
            }
          });
        };
        absolute = function() {
          $('html, body').animate({
            'scrollTop': scrollto + 'px'
          }, 900);
          return false;
        };
        specific = function() {
          return log('specificing');
        };
        relative = function() {
          return log('relativing');
        };
        return init();
      });
    }
  });

}).call(this);
