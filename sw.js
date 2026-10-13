// Minimal service worker - required by Chrome/Android to treat this
// page as an installable app and use the manifest icon properly.
self.addEventListener('install', () => {
  self.skipWaiting();
});
self.addEventListener('activate', () => {
  self.clients.claim();
});
self.addEventListener('fetch', (event) => {
  // Pass-through: no offline caching, just satisfies installability
  event.respondWith(fetch(event.request));
});
