//array with all the censor words 
var spoiled = ["terrible", "but", "pasta"];

//checks through every word of array and page
var result = spoiled.every(function(word) {
    return document.documentElement.innerText.indexOf(word) > -1;
});

// Checking page title
if (document.title.indexOf("Twitter") != -1) {

//checks if every word of array is on page
if (result) { 
//if so do this
console.log("exists")

} else{
console.log("not exist");
}
}
