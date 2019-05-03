$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	})
});

$("input[type='text']").keypress(function(event) {
	// var toDo = $(this).val();
	if(event.which === 13) {
		var toDo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDo + "</li>");
	}
});

$("#toggle-form").on("click", function() {
	$("input").fadeToggle();
});
