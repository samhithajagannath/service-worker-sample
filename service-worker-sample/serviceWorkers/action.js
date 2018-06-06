function executeScripts(tabId, injectDetailsArray) {
  function createCallback(tabId, injectDetails, innerCallback) {
    return function() {
      chrome.tabs.executeScript(tabId, injectDetails, innerCallback);
    };
  }

  var callback = null;

  for (var i = injectDetailsArray.length - 1; i >= 0; --i)
    callback = createCallback(tabId, injectDetailsArray[i], callback);

  if (callback !== null) callback(); // execute outermost function
}

// document.getElementById("clickme").addEventListener("click", function() {
//   console.log("[action] about to execute script injector");
//   chrome.tabs.executeScript({
//     // file: "./injector.js"
//     file: "./page_script.js"
//   });
// });

document.getElementById("clickme").addEventListener("click", function() {
  console.log("[action] about to execute script injector");
  executeScripts(null, [
    { file: "page_script.js" },
    // { file: "service_worker.js" },
    { code: "console.log('INJECTED FILES');" }
  ]);
});
