function save_options() {
  var word = document.getElementById('keyword').value;
  //debugger
  chrome.storage.sync.set({
    favoriteWord: keyword,
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
 // debugger
   chrome.storage.sync.get(["favoriteWord"], function (data) {console.log(data)});

//chrome.storage.sync.get({
  //  favoriteKeyword: 'first',
//	favoriteKeyword: 'second',
//	favoriteKeyword: 'third',
//	favoriteKeyword: 'fourth',
//	favoriteKeyword: 'fifth'
 // }, function(items) {
 //   document.getElementById('word').value = items.favoriteKeyword;
 // });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);