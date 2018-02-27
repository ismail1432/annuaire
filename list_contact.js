var contacts = JSON.parse(localStorage.getItem('contact'));

if(contacts != null ) {
	
$(contacts).each(function( index, element ) {
	console.log(element.firstname)
	$("p").append( "<ul><li><strong>"+element.firstname+"</strong></li><li><strong>"
					+element.lastname+"</strong></li><li><strong>"
					+element.creationDate+"</strong></li><br>");
});
}