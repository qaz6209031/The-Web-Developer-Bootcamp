//Check of specofic Todos by clickiing
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});


//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});


$("input[type= 'text']").keypress(function(event){
	if (event.which === 13){
		//grabbing a new todo text from input
		 var todoText = $(this).val();
		 //clear the input
		 $(this).val("");
		 $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
		}
});



// $("#toggle-form").click(fucntion(){
// 	$("input[type = 'text']").fadeToggle():

// });


$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});