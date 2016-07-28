// creates arrry
var txt = ["yeah", "yip", "hmm","alright"];

// Checking page title
if (document.title.indexOf("Google") != -1) {
    //Creating Elements
	  //creates text
	  var words = document.createElement("P")
    var r = document.createTextNode(txt);
	  words.appendChild(r);
    //Appending to DOM 
	  //adds text one page
	  document.body.appendChild(words);
}

//checks if selected text is on page
if (
  (
    document.documentElement.textContent || document.documentElement.innerText
  ).indexOf(txt) > -1
  //selected text ^
) {
   words.style.color =  "blue";
 //changes selected text to blue
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