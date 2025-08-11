const CACHE_NAME = 'konstsok-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/icon-192.png',
  '/icon-512.png'
];

// Installera SW och cacha filer
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Ladda från cache om offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
