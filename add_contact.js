$('form').submit( function(e) {
e.preventDefault();

var firstname = $( "input[name=firstname]" ).val();
var lastname = $( "input[name=lastname]" ).val();
var creationDate = Date.now();

var contactStored = JSON.parse(localStorage.getItem('contact')) || [];
console.log(contactStored.length);

contactObject = {
	id : contactStored.length,
	firstname : firstname,
	lastname : lastname,
	creationDate : creationDate
};

contactStored.push(contactObject);

localStorage.setItem('contact', JSON.stringify(contactStored));
});