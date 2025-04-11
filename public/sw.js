console.log("SW loaded");

self.addEventListener('push', function (event) {
  console.log('[Service Worker] Push Received.');

  let title = 'Default Title';
  let body = 'No payload received';

  if (event.data) {
    try {
      const payload = JSON.parse(event.data.text());
      console.log('[Service Worker] Push had this data:', payload);

      // Check for Azure style wrapped payload
      title = payload.data?.title || title;
      body = payload.data?.body || body;
    } catch (err) {
      console.error('[Service Worker] Error parsing push data:', err);
      body = event.data.text(); // fallback
    }
  }

  const options = {
    body,
    icon: 'icon.png',
    badge: 'badge.png'
  };

  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});
