const CACHE_NAME = 'hola-pwa-v2';
const URLS_A_CACHEAR = [
  './',
  './index.html',
  './app.js',
  './manifest.json'
];

// Instalar y cachear
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_A_CACHEAR))
  );
  self.skipWaiting();
});

// Activar y borrar caché vieja
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    })
  );
});

// Fetch
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request);
    })
  );
});
