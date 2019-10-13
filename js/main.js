jQuery(document).ready(function($) {

	var $body = $('body');


	setTimeout(function() {
		$body.addClass('ready');
	}, 1000);

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

     if($body.hasClass('i-am-ivan')) {

        var $whoIam = $('#whoIam'),
	     	$whoIamTarget = $('#whoIamTarget'),
	     	$iAm = $('#iAm'),
	     	$mainHeading = $('#mainHeading'),
	     	$pageWrap = $('#pageWrap');

     	var goodQualities = [
     		'normal',
     		'happy', 
     		'good', 
     		'caring', 
     		'kind', 
     		'bold', 
     		'generous', 
     		'calm', 
     		'clever', 
     		'handsome', 
     		'the best', 
     		'a lover', 
     		'me', 
     		'ALL'
     	];

     	var badQualities = [
     		'crazy',
     		'sad', 
     		'bad', 
     		'selfish',
     		'heartless',
     		'shy', 
     		'greedy', 
     		'angry', 
     		'stupid', 
     		'ugly', 
     		'the worst', 
     		'a hater', 
     		'you', 
     		'nothing'
     	];

        var allQualities = [];
        var arrLength = goodQualities.length;

        for(var i = 0; i < arrLength; i++) {
            allQualities.push(badQualities[i]);
            allQualities.push(goodQualities[i]);
        }

	    var counter = 0;
	    var shown = true;
	    var time = 400;    

	    function changeContent() {
	        if(counter === allQualities.length) {
	            setTimeout(function() {
	                $whoIamTarget.text('Ivan Kisyov');
	                $whoIamTarget.removeClass('hidden');
	            }, 777);
	            return;
	        } 
	        $whoIamTarget.text(allQualities[counter]);
	        if(shown) {
	            setTimeout(function() {
	                shown = false;
	                    hideIt();
	            }, 1000);
	        } else {
	            setTimeout(showIt, time);
	        }
	    }

	    function hideIt() {
	        counter++;
	        $whoIamTarget.addClass('hidden');
	        setTimeout(changeContent, time);
	    }


	    function showIt() {
	        $whoIamTarget.removeClass('hidden');
	        if(allQualities[counter] === 'you') {
	        	time = 666;
	        }
	        if(allQualities[counter] === 'nothing') {
	        	time = 999;
	            $whoIam.addClass('bigger');
	            $iAm.addClass('moveUp');
	            $mainHeading.addClass('almost-there');
	        }
	        if(allQualities[counter] === 'ALL') {
	            $whoIam.addClass('biggest');
	            $iAm.addClass('moveUpMore');
	            $mainHeading.addClass('finally-here');
	            $pageWrap.addClass('yin-yang');
	        }
	        shown = true;
	        changeContent();
	    }

	    setTimeout(changeContent, 1050);


     }//if

     if($body.hasClass('you')) {

     	setTimeout(function() {
     		$('.human-list li').removeClass();
     	}, 13000);

     	setTimeout(function() {



	     	$('.rest').each(function(i, el) {
	     		var $this = $(el);
	     		var counter = 0;
	     		setTimeout(function() {
	     			$this.addClass('hidden');
	     			counter++;
	     		}, 1000 * i);

	     		if(i === 4) {
	     			setTimeout(function() {
	     				$('.svg-icon-heart').addClass('is-shown');
	     			}, (i + 1 + counter) * 1000);
	     		}

	     	});

     	}, 17000);

     	


     }// if

     if($body.hasClass('showcase')) {

     	$('.showcase-list li').each(function(i, el) {
     		setTimeout(function() {
     			$(el).addClass('rotate-me');
     		}, 1000 * (i + 1));
     	});

     }// if
	
	console.log('simple test...')

});
