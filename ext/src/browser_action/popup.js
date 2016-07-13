 //var bkg = chrome.runtime.getBackgroundPage();
 
 (function () {
    var otherWindows = chrome.extension.getBackgroundPage();
    console.log(otherWindows.backgroundFunction()); 
})();