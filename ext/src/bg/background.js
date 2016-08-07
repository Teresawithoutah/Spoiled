var spoiled = ["terrible", "but", "pasta"];

var result = spoiled.every(function(word) {
    return document.documentElement.innerText.indexOf(word) > -1;
});

// Checking page title
if (document.title.indexOf("Twitter") != -1) {

if (result) { 

console.log("exists")

} else{
console.log("not exist");
}// all exists }
}
//Checks if selected text is on page
/*if (document.documentElement.innerText.indexOf('enjoys') > -1) {
   //if selected text is on page, replace this word (first index) with that word (second index)
    document.body.innerHTML = document.body.innerHTML.replace('steps', 'hi');
   //if selected text is on page, print this
    console.log("it works!");
} else { 
   // if selected text is not on page, print this
    console.log("selected text is not on page");
  }
} else {
  //if not on twitter print this
  console.log("title is not twitter");
}


/* Creating Elements
    var words = document.createElement("p");
    //creates text
    var r = document.createTextNode("i cant believe mary tried to kill her own sister, bella ! ");
    words.appendChild(r);
    //Appending to DOM 
    //adds text one page
    document.body.appendChild(words);
    //changes color of text
    var res  = words.replace(words, words.style.color = "purple");
*/

//const words = ['mary', 'kill', 'bella']

//const p = document.querySelector('p')
//var newHTML = p.innerHTML


//$(function doIt() {
   // $('#changeColor').click( function() {
     //  words.forEach(word=>
		//  newHTML = newHTML.replace(word, `<span class="color">${word}</span>`)
	//	)
	//	p.innerHTML = newHTML

//		result = newHTML
//	   console.log(result);
		
  //  });
//});

//document.getElementById("yep").onclick = function() {doIt()};