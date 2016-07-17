// Checking page title
if (document.title.indexOf("Google") != -1) {
    //Creating Elements
    var btn = document.createElement("BUTTON")
    var t = document.createTextNode("CLICK ME");
    btn.appendChild(t);
    //Appending to DOM 
    document.body.appendChild(btn);
}


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

document.getElementById("yep").onclick = function() {doIt()};