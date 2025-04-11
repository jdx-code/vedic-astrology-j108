
console.log("SW loaded")

self.addEventListener('push', function (event) {
  console.log('[Service Worker] Push Received.');

  if (event.data) {
    console.log('[Service Worker] Push had this data:', event.data.text());
  } else {
    console.log('[Service Worker] No data in push event');
  }

  const options = {
    body: event.data ? event.data.text() : 'Hey buddy !! No payload',
    icon: 'icon.png',
    badge: 'badge.png'
  };

  event.waitUntil(
    self.registration.showNotification('Test Notification', options)
  );
});