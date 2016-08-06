// creates array
var spoiler = ["mary", "sister"];

// Checking page title
if (document.title.indexOf("Twitter") != -1) {
    
//FUCKING CODE FOR CHANGING SELECTED TEXT TO NEW TEXT
document.body.innerHTML = document.body.innerHTML.replace('pasta',  'hi');


}
 else{
  console.log("it didnt work!!");
 }

//Checks if selected text is on page
if (
  (
    document.documentElement.textContent || document.documentElement.innerText
  ).indexOf("body") > -1
    //selected text ^
) {
    console.log("it works!");
    //follows code on line 16 & replaces words in array to selected color
} else { 
    console.log("yeah");
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