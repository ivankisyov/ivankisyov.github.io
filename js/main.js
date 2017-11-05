jQuery(document).ready(function($) {
	$('#aboutMe, #contactMe').css('display', 'none');
	$('a[data-rel^=lightcase]').lightcase({
		showTitle: false
	});


	 var username = "[vankatakisyov]";
     var hostname = "[gmail.com]";
     var linktext =  '<svg class="svg-icon svg-icon-mail"><use xlink:href="#mail-icon" /></svg>';
     $('#contactMe').prepend("<li><a href='" + "mail" + "to:" + username + "@" + hostname + "' class='custom-link mail-link' title='E-mail me'>" + linktext + "</a></li>");

     var $main = $('#main'),
     	$header = $('#header'),
     	$window = $(window),
     	$document = $(document);


    function showMainSmallScreens() {

    	if($window.outerWidth() < 600) {
	     	if($document.scrollTop() > (($header.height() * .1))) {
	     		$main.addClass('is-shown');
	     	}//if
     	}//if

    }// showMainSmallScreens

    showMainSmallScreens();

     $(window).on('scroll', showMainSmallScreens);

});