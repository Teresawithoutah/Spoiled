//search these elements
var aTags = document.getElementsByTagName("div");
//search for this word in those elements
var searchText = "women";
var found;

// Checking page title
if (document.title.indexOf("Tumblr") != -1) {

//increments for page
for (var i = 0; i < aTags.length; i++) {
  if (aTags[i].textContent == searchText) {
    found = aTags[i];
  //stop once found
// not sure how this will function when its a constant feed
    break;
  }
}
// if spoilers are on page

if (found) {
  //print the source class name containing the spoilers
    console.log("spoiler exists!!")
    console.log(found);
    found.style.background = "red";
}
else {
  //if text is not in a div print this
    console.log("failure");
}
} else{
console.log("you're not on tumblr");
}
