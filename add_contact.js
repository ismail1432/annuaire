$('form').submit( function(e) {
e.preventDefault();

var firstname = $( "input[name=firstname]" ).val();
var lastname = $( "input[name=lastname]" ).val();
var d = new Date();
creationDate = d.getDay()+"/"+ (d.getMonth()-1)+"/"+d.getYear();

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

function unixTime(unixtime) {

 var theDate = new Date(unixtime);
	return theDate.getDay()+"/"+(theDate.getMonth() + 1) +"/"+theDate.getYear();
};