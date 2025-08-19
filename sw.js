const cacheName = 'labirinto-cache-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/sw.js',
  // Adicione CSS, JS e imagens do projeto
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assetsToCache))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});