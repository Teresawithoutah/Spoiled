//ARRAY OF CENSOR WORDS
var spoilers = ["today", "day", "run"];


// Checking page title
if (document.title.indexOf("Tumblr") != -1) {
//if on tumblr print this
console.log("ur on tumblr");

//loop for searching page for elements in array
var found = spoilers.every(function(word) {
    return document.documentElement.innerText.indexOf(word) > -1;
});

//if exists print this
if (found) { 
console.log("spoilers found");
$("p:contains('" + spoilers + "')").css("background-color", "yellow");
} 







}else{
	console.log("ur not on tumblr");
}