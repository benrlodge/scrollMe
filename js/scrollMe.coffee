## scrollMe.coffee
## by benrlodge.com

$ = jQuery
$.fn.extend

  scrollMe: (options) ->
  
    settings =
      selector	: this
      scrollto	: '' # For type=specific
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
	    		relative() if type is 'relative' 


	    absolute = ->
	    	$('html, body').animate 'scrollTop' : scrollto+ 'px', 900
	    	return false





	    specific = ->
	    	log 'specificing'

	    relative = ->
	    	log 'relativing'

	    init()