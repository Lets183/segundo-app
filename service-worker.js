
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("loja-roupas-cache").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "icon-000.jpg",
        "icone-111.jpg",
        "vermelho.jpg",
        "roxo.jpg",
        "rosa.jpg"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
