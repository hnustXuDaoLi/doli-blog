/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b977ac28916238fa1628fbec5c5c5a29"
  },
  {
    "url": "assets/css/0.styles.b0ce0edb.css",
    "revision": "c199f3aa9c172b952773ffebe95a8e51"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.096e49a8.js",
    "revision": "b365409fd2cba7661a4d452821d08d58"
  },
  {
    "url": "assets/js/3.904398a6.js",
    "revision": "8b125228fd92801944db7f577f66c071"
  },
  {
    "url": "assets/js/4.8c9b487d.js",
    "revision": "dc37a69d956a3f5e26a86fd7062cd68d"
  },
  {
    "url": "assets/js/5.3bd248d2.js",
    "revision": "7373376a056d8b62e86df8eeaaa37982"
  },
  {
    "url": "assets/js/app.b092aee0.js",
    "revision": "a82ac4d4cc5dfed0029536c8b0c089ec"
  },
  {
    "url": "index.html",
    "revision": "d7a594dc05fb8ee841c0a200ea791827"
  },
  {
    "url": "web/JavaScript/test.html",
    "revision": "24942b313e1c021e239074d3042776ed"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
