self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("calculadora-vidraceiro").then(cache => {
      return cache.addAll(["./"]);
    })
  );
});
