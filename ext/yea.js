console.log("ur on tumblr");

const words = ['mary', 'kill', 'bella']

const p = document.querySelector('p')
var newHTML = p.innerHTML

$(function doIt() {
    $('#changeColor').click( function() {
       words.forEach(word=>
		  newHTML = newHTML.replace(word, `<span class="color">${word}</span>`)
		)
		p.innerHTML = newHTML

		result = newHTML
	   console.log(result);
		
    });
});
var searchText = ["terrible", "sansa", "money"];
var found;
//search these elements
var busca = document.getElementsByTagName("p");

var found;

var spoilers = ["sansa", "jon snow", "death"];
var array = spoilers.length;


//increments for page
for (var i = 0; i < busca.length; i++) {
  for (var j = 0; j < array; j++){
    if (busca[i].textContent == [j] ) {
  found = busca[i];
  //if spoilers found 

  
  }
}
};
      // if spoilers are on page
if (found) {
  //print the source class name containing the spoilers
    console.log("spoiler exists!!");
    console.log(found);

//increments for page
for (var i = 0; i < busca.length; i++) {
  if (busca[i].textContent == searchText[]) {
  found = busca[i];
  //if spoilers found 

  
  }
};
      // if spoilers are on page
if (found) {
  //print the source class name containing the spoilers
    console.log("spoiler exists!!");
    console.log(found);

}else {
	console.log("spoiler not found");} 
} else{
	console.log("ur not on tumblr");
}