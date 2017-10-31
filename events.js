// EVENTS //

// adding 'click' listener to the collection
$("#submit").click(function(){
	alert("another click");
	console.log("someone clicked!");
})

// to use 'this' as in vannila js. we need to add $ infront

$("button").click(function(){
	$(this).css("background","red");
})

$("button").click(function(){
	var text = $(this).text();
	console.log("you clicked: " + text);
})

// keypress()  -> typing on keyboard it's in the middle of key pressing down and up

$("input").keypress(function(){
	console.log("you pressed a key");
})

// common below -> clicking 'enter' (which === 13)

$("input").keypress(function(event){
	if(event.which === 13){
		alert('you hit enter');
	}
	console.log(event);
});

// NOW THE MOST IMPORTANT
// .on() --> the most commonly used event in jQuery. It is the same as addEventListener in plain js.
// .on(eventType, callbackFunction)

$("p").on("click", function(){
	alert("you clicked");
})

$("h1").on("click", function(){
	$(this).css("color","pink");
})

$("button").on("mouseenter", function(){
	$(this).css("font-weight", "bold");
})

$("button").on("mouseleave", function(){
	$(this).css("font-weight", "normal");
})
