// Checking page title
if (document.title.indexOf("Google") != -1) {
    //Creating Elements
	//creates button
    var btn = document.createElement("BUTTON")
    var t = document.createTextNode("CLICK ME")
	var e = document.createTextNode("fck me")
	//creates text
	var words = document.createElement("P")
    var r = document.createTextNode("alrighty go off");
    btn.appendChild(t);
    //Appending to DOM 
	//adds button on page
    document.body.appendChild(btn);
	//adds text one page
	document.body.appendChild(e);
	words.appendChild(r);
	document.body.appendChild(words);
}

if (
  (
    document.documentElement.textContent || document.documentElement.innerText
  ).indexOf('fck me') > -1
) {
   console.log('yeah');
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