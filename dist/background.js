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
  css: [{file: "bestill.css"}],
  js: [{file: "bestill.js"}],
  runAt: "document_idle"
});
