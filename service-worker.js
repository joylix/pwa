self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open('my-pwa-cache-v1')
          .then(function (cache) {
                return cache.addAll([
                    '/index.html',
                    '/manifest.json',
                    '/icon-192x192.png',
                    '/icon-512x512.png'
                ]);
            })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
          .then(function (response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
    