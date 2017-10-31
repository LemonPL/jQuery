if (jQuery) {
	alert("connected");
}else{
	alert("not connected");
}

// METHODS //

$("h1").text(); // gives information about text content as one string

// can change text content

$("h1").text("New Text!");

// .html() provides html content of children element. More powerful than .text() because we can add for example a href="" and other html code

$("ul").html();

// .attr() to retrieve the value of attribute for the 1st match
// .attr(property, value)

$("img").attr("src");
$("img").attr("alt", "Terrible story");

// .last() last element is selected

$("img").last().attr("src");

// .val() -> extracts value from element
// reseting value input

$("input").val("");

// manipulations on classes

// .addClass(), .removeClass(), .toggleClass()

$("p").addClass("firstClass secondClass");
