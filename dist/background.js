var blocklist = [
  "*://*.amazon.com/*",
  "*://*.facebook.com/*",
  "*://*.reddit.com/*",
  "*://*.tumblr.com/*",
  "*://*.twitter.com/*",
  "*://*.youtube.com/*"
];

function redirect(requestDetails) {
  console.log("Redirecting: " + requestDetails.url);
  return {
    redirectUrl: "https://media.giphy.com/media/SHyuhBtRr8Zeo/giphy.gif"
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:blocklist},
  ["blocking"]
);
