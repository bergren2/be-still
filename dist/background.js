var blocklist = [
  "*://*.amazon.com/*",
  "*://*.facebook.com/*",
  "*://*.reddit.com/*",
  "*://*.tumblr.com/*",
  "*://*.twitter.com/*",
  "*://*.youtube.com/*"
];

var registering = browser.contentScripts.register({
  matches: blocklist,
  css: [{file: "notify.css"}],
  js: [{file: "notify.js"}],
  runAt: "document_idle"
});
