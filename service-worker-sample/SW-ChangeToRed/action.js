document.getElementById("clickme").addEventListener("click", function() {
  console.log("[action] about to execute script injector");
  chrome.tabs.executeScript({
    file: "./injector.js"
  });
});
