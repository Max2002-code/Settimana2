$("ul").on("click", "li",function(){
	$(this).toggleClass("checked");
});


$("ul").on("click", "span" ,function(event){
	$(this).parent().fadeOut( function(){
		$(this).remove();
	});
	event.stopPropagation();
});


$("input[type=text]").on("keypress", function(event){
	if(event.which === 13)
	{
		var new_todo=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + new_todo + "</li>");
	}
});


$(".fa-plus").on("click",function(){
	$("input[type=text]").fadeToggle();
})