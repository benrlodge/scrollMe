
$('.showme').click ->
	show = $(this).data('show')
	$(show).show()
	that = this

	done = ->
		$(that).hide()
		$('#main').css('margin-top','0')
		$("html, body").animate "scrollTop" : 0 , 0

	setTimeout(done, 1400)
