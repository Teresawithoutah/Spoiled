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
  //if spoilers found 
  found.style.background = "red";
  }
}

// if spoilers are on page
if (found) {
  //print the source class name containing the spoilers
    console.log("spoiler exists!!")
    console.log(found);
}
else {
  //if text is not in a div print this
    console.log("failure");
}
} else{
console.log("you're not on tumblr");
}
