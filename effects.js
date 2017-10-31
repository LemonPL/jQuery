// .fadeOut()

$("button").on("click", function(){
	$("div").fadeOut(1000, function(){ // 1sec to fadeout
			$(this).remove();		// after the fadeout is finished
	}); 
});

// if display = none;

$("button").on("click", function(){
	$("div").fadeIn(1000, function(){ // 1sec to fadeout
			// $(this).remove();		// after the fadeout is finished
	}); 
});

// .fadeToggle();

$("button").on("click", function(){
	$("div").fadetoggle(500) // 0.5sec to fadeout
});

// .slideDown(), .slideUp(), .slideToggle()

$("button").on("click", function(){
	$("div").slideDown() // 0.5sec to fadeout
});
