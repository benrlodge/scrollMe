## scrollMe.coffee
## by benrlodge.com

$ = jQuery
$.fn.extend

  scrollMe: (options) ->
  
    settings =
      selector	: this
      scrollto	: '' 
      type			: ''
      speed			: 900

    settings = $.extend settings, options

    log = (msg) ->
    	console.log msg

    return @each () ->

    	selector = settings.selector
    	scrollto = settings.scrollto
	    speed = settings.speed
	    type = settings.type


	    init = ->
	    	return selector.click ->
	    		absolute() if type is 'absolute' 
	    		specific() if type is 'specific'
	    		return false

	    absolute = ->
	    	$('html, body').animate 'scrollTop' : scrollto+ 'px', speed


	    specific = ->
	    	log 'specific'
	    	location = $(scrollto).offset().top
	    	log 'location: ' + location
	    	$('html, body').animate 'scrollTop' : location+ 'px', speed
	    	



	    init()