/* global browser, document */
function saveOptions(e) {
  browser.storage.local.set({
    enabled: document.querySelector("#enabled").checked
  });
  e.preventDefault();
}

function restoreOptions() {
  const gettingItem = browser.storage.local.get("enabled");
  gettingItem.then((res) => {
    console.log(res);
    document.querySelector("#enabled").checked = res.enabled;
  });
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
