// const cacheName = "Life-Drop";
// const assets = [
//   "/",
//   "/index.php",
//   "/__about-us.php",
//   "/__admin-home.php",
//   "/__contact-us.php",
//   "/__home-section.php",
//   "/__istruction-section.php",
//   "/customer/create.php",
//   "/components/admin-layout.php",
//   "/components/flash.php",
//   "/components/layout.php",
//   "/components/form/erorr.php",
//   "/components/form/input.php",
//   "/doner/create.php",
//   "/doner/index.php",
//   "/user/login.php",
//   "/user/register.php",
//   "/admin/donors.php",
//   "/admin/contact.php",
//   "/admin/customer.php",
//   "/admin/home.php",
//   "/finddoner.php",
//   "/donatenow.php",
//   "/assets/css/master.css",
//   "/assets/css/style.css",
//   "/assets/css/navPage.css",
//   "/assets/js/script.js",
//   "/assets/js/lang.js",
//   "/assets/js/bootstrap.js",
//   "/assets/js/popper.min.js",
//   "/assets/js/jquery-3.7.1.min.js",
//   "/manifest.josn",
//   "/image/Blood bag and hand of donor with.jpeg",
//   "/image/loader.png",
//   "/image/loader1.png",
//   "/image/logo.png",
//   "/image/photo_2024-02-25_02-51-03.jpg",
// ];

// self.addEventListener("install", (installEvent) => {
//   installEvent.witUntil(
//     caches
//       .open(cacheName)
//       .then((cache) => {
//         cache.addAll(assets).then().catch();
//       })
//       .catch((err) => {})
//   );
// });

// self.addEventListener("activate", (activateEvent) => {
//   activateEvent.witUntil(
//     caches.keys().then((Keys) => {
//       return Promise.all(
//         Keys.filter((Key) => Key != cacheName).map((Key) => Cachees.delete(Key))
//       );
//     })
//   );
// });

// self.addEventListener("fetch", (fetchEvent) => {
//   // console.log("SW Fetched", fetchEvent);
//   fetchEvent.respondWith(
//     caches.match(fetchEvent.request).then((res) => {
//       return res || fetch(fetchEvent.request);
//     })
//   );
// });



// self.addEventListener("push", (NotificationEvent) => {
//     NotificationEvent.waitUntil(self.registrationn.showNotificationn());
// });
self.addEventListener("push", (NotificationEvent) => {
  NotificationEvent.waitUntil(self.registration.showNotification());
});

