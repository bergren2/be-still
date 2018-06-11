/* global browser */
const blocklist = [
  "*://*.amazon.com/*",
  "*://*.facebook.com/*",
  "*://*.reddit.com/*",
  "*://*.tumblr.com/*",
  "*://*.twitter.com/*",
  "*://*.youtube.com/*"
];

function redirect() {
  return {
    redirectUrl: browser.extension.getURL("be-still.html")
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {
    urls: blocklist,
    types: ["main_frame"]
  },
  ["blocking"]
);
