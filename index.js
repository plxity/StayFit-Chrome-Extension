console.log('hello, I am running!');
document.addEventListener('DOMContentLoaded', function () {
  console.log('hello');
});
let array = [];
let links = {};
chrome.tabs.query(
  {
    active: true,
    lastFocusedWindow: true,
  },
  (tabs) => {
    var tab = tabs[0];
    console.log(tabs);
    array.push(tab.url);
    let tabUrl = tab.url;
    let number = 1;
    chrome.storage.sync.set({ [tabUrl]: `${number}` });
    // chrome.storage.sync.get(null, function(items) {
    //   //     var allKeys = Object.keys(items);
    //   //     console.log(allKeys);
    //   // });
    chrome.storage.sync.get('fsdfsd', function (obj) {
      console.log(obj);
      if(Object.keys(obj).length==0){
        console.log("it is empty");
      }
    });
    console.log(array);
  }
);
