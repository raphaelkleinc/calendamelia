// Service Worker — Calendário da Amélia
const CACHE = 'amelia-v2';
const ASSETS = ['./index.html', './manifest.json', './icon-192.png', './icon-512.png'];

// Install: cache assets
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

// Fetch: network first, fallback to cache
self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});

// Push notification received
self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : {};
  const title = data.title || 'Calendário da Amélia';
  const options = {
    body: data.body || '',
    icon: './icon-192.png',
    badge: './icon-192.png',
    tag: data.tag || 'amelia-notif',
    renotify: true,
    data: { url: data.url || './' }
  };
  e.waitUntil(self.registration.showNotification(title, options));
});

// Notification click → open/focus app
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
      for (const client of list) {
        if (client.url.includes('index.html') || client.url.endsWith('/')) {
          return client.focus();
        }
      }
      return clients.openWindow(e.notification.data.url || './');
    })
  );
});
