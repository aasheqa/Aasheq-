self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('cache-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './style.css',
        './app.js' // إذا كان لديك ملف JavaScript
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});