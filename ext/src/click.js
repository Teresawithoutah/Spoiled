

     const words = ['mary', 'kill', 'bella']

const p = document.querySelector('p')
var newHTML = p.innerHTML

$(function() {
    $('#changeColor').click( function() {
       words.forEach(word=>
		  newHTML = newHTML.replace(word, `<span class="color">${word}</span>`)
		)
		p.innerHTML = newHTML

		result = newHTML
	   console.log(result);
		
    });
});


