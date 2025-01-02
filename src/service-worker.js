
const CACHE_NAME = 'portfolio-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/static/js/bundle.js', // Adjust this path based on your build output
  '/static/css/main.css',  // Adjust this path based on your build output
  '/images/icon-192x192.png',
  '/images/icon-512x512.png',
  // Add other assets you want to cache
];

import { precacheAndRoute } from 'workbox-precaching';

// This will be replaced with the actual precache manifest during the build
precacheAndRoute(self.__WB_MANIFEST);

// Install the service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch assets from the cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});

// Activate the service worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});