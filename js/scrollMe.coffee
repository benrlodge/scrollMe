(scrollMe = ->



	$('.scrollme').click (e) ->

		goto = $(this).data('scroll-y') + 'px'
		speed = $(this).data('scroll-speed')
		$("html, body").animate "scrollTop" : goto , speed
		return false
)()