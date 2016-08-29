var spoiled = ["terrible", "money", "sansa"];

var result = spoiled.every(function(word) {
    return document.documentElement.innerText.indexOf(word) > -1;
});

// Checking page title
if (document.title.indexOf("Tumblr") != -1) {

if (result) { 

console.log("exists")

} else{
console.log(" does not exist");
}// all exists }
}