
//CSS
var sheet = window.document.styleSheets[0]
sheet.insertRule('img { max-width:100%; max-height:100%; }', sheet.cssRules.length);


// Checking page title
if (document.title.indexOf("Tumblr") != -1) {

//search these elements
var busca = document.getElementsByTagName("p");
//search for this word in those elements
var searchText = "women";
var found;


//increments for page
for (var i = 0; i < busca.length; i++) {
  if (busca[i].textContent == searchText) {
  found = busca[i];
  //if spoilers found 

  //erase paragraph
  found.style.display = 'none'; 
  //creates image for each iteration
  var img = document.createElement("img");
  img.src = "https://i.imgur.com/miZBLCk.jpg";

  // add image
  found.parentNode.parentNode.appendChild(img);
  
  //creates button for each iteration
  var btn = document.createElement("BUTTON");
  var t = document.createTextNode("CLICK ME");
  btn.setAttribute("id", "but");
  btn.appendChild(t);
 
  //adds button
  found.parentNode.parentNode.appendChild(btn);

  var but = document.getElementById('but');
  
  but.onclick = function() {
  if (found.style.display = 'none') {
        found.style.display = 'block';
        img.style.display = 'none';
        alert("y");
  }
};

}
}
 
 
// if spoilers are on page
if (found) {
  //print the source class name containing the spoilers
    console.log("spoiler exists!!");
    console.log(found);

 
    
}else {
  //if text is not in a div print this
    console.log("failure");
} }else{
console.log("you're not on tumblr");
}

