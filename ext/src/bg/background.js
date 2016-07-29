// creates array
var txt = ["about", "app"];

// Checking page title
if (document.title.indexOf("Google") != -1) {
    //Creating Elements
    //creates text
    var words = document.createElement("p")
    var r = document.createTextNode(txt);
    words.appendChild(r);
    //Appending to DOM 
    //adds text one page
    document.body.appendChild(words);
}
//Color change          
var res = txt.replace(words, words.style.color = "red");

//Checks if selected text is on page
if (
  (
    document.documentElement.textContent || document.documentElement.innerText
  ).indexOf(txt) > -1
    //selected text ^
) {
   document.body.appendChild(words);
    //follows code on line 16 & replaces words in array to selected color
} else { 
    console.log("yeah");
  }





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