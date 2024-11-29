'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8d2592f3e04a0fb513d5d82e67a4843f",
"assets/AssetManifest.bin.json": "efa38336b0587bea49c2599b7a43deaf",
"assets/AssetManifest.json": "593ac964f764479666308d0c1e67f4ca",
"assets/assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/icons/adddelete.png": "63a522fe92e25bef1f12220099c02494",
"assets/assets/icons/addEdit.png": "dcaf78970a88b8dc7da0bceb0b654069",
"assets/assets/icons/addressicon.png": "7b277b5b9ff46b226e85722059f6eba2",
"assets/assets/icons/arrowleft.png": "f2002d0e04770a1d01895d3d7c82fd58",
"assets/assets/icons/arrowLeft2.png": "f10aa90c9f6fa6c73c24f2bc518b7b4b",
"assets/assets/icons/arrowR.png": "1720984973ad2be9c63940a1837d4e40",
"assets/assets/icons/arrowR2.png": "e7c2cb86b9767c0e8294268a2cd642aa",
"assets/assets/icons/arrowUpLeft.png": "78abf36b68afd6e5987dfb97f50adb61",
"assets/assets/icons/Bag.png": "2626456dfbe310435ec6b581dda8b8d9",
"assets/assets/icons/bar.png": "ee5b0f982bac1eba364422474c70db06",
"assets/assets/icons/bell.png": "e0363a3e0f6ee60f12c35f50bc5d05b3",
"assets/assets/icons/book.png": "0fbcd11559ca0b08bf05929cd5a24728",
"assets/assets/icons/bookicon.png": "91bfb5b2ab53367818d2a7739c20eecc",
"assets/assets/icons/bottom5.png": "1586ee540b21371a49703f422f2e60ed",
"assets/assets/icons/bottomBook.png": "6c104ce728485b761cffc25c2d6b97d2",
"assets/assets/icons/bottomCart.png": "5f8644f0a6144a865722b287ae396a2c",
"assets/assets/icons/business.png": "7b2190dfc4978f336ea89bb7586484e6",
"assets/assets/icons/Calendar.png": "60a375c99b66fbd7d8c0bbe4478da339",
"assets/assets/icons/Call.png": "a4eb4e0de83fda13eec101898e8be284",
"assets/assets/icons/Camera.png": "75fab93b8b6180832d4b923b904a1083",
"assets/assets/icons/cancel.png": "727e3f214e69bef194691ace6e0a0ba7",
"assets/assets/icons/cancelicon.png": "927d2e1ce0af6ea44f9e8dc547933ed4",
"assets/assets/icons/cart.png": "00aedbb896dea608da7670e1ce28b805",
"assets/assets/icons/category.png": "cd41f8ecb9d2fded100f62db848d2f71",
"assets/assets/icons/chart.png": "18f4ffaf22487361b5028e1efcd43dfd",
"assets/assets/icons/childbook.png": "bedf36d37293477506c0dad77f340064",
"assets/assets/icons/clock.png": "8aa9dd52242ead915859df716569634b",
"assets/assets/icons/clockcolor.png": "05a4957b4e6fcb97431aaab1cbf880fc",
"assets/assets/icons/comma.png": "ff358fd55aff93cea0b0313fe244cc22",
"assets/assets/icons/cross.png": "4fad0f0e060f914b71f8c5c0fad42fb6",
"assets/assets/icons/delete.png": "f3936a688a18c2385da1f6fd099740ae",
"assets/assets/icons/Device.png": "9f91f2ede9a7012feccc4dcc944cd639",
"assets/assets/icons/Document.png": "baadc44c50b4a8930ea50b7b28f9ad12",
"assets/assets/icons/dot3.png": "5132255e7b1d280c8a5c2e30e4417eb1",
"assets/assets/icons/downArr.png": "6e1261dd3789c3d6fbe86a13983910d5",
"assets/assets/icons/downloadInv.png": "8d79aefbbcbe3daae09108a6633d6a81",
"assets/assets/icons/economy.png": "b948bdcefec6e0dfd663b11261429f36",
"assets/assets/icons/Edit.png": "87743014acd0f9715128aec4a6d349eb",
"assets/assets/icons/education.png": "2b5b2646ff4635fd01ad5b83d1bc8f21",
"assets/assets/icons/email.png": "79b04374fe667befc243f2e0bea05482",
"assets/assets/icons/enterphone.png": "dda982c27e45a18b1961c1dc0af334e1",
"assets/assets/icons/exchangeicon.png": "43f3a2f318e2be94e1744464e9bfa874",
"assets/assets/icons/fav.png": "326707e8ccd9d24e903206e25de90092",
"assets/assets/icons/film.png": "ea4ade1461adbdecc7b560f14f65530c",
"assets/assets/icons/filter.png": "8191d50b212394c309478907fa1c4342",
"assets/assets/icons/Gallery.png": "a6f94caa9c0dcec20fd3329b1148a884",
"assets/assets/icons/gpay.png": "b65e12abd246e615218767c7bc66456c",
"assets/assets/icons/gps.png": "c2a5bca42ce6e99a954a35f9504b5eeb",
"assets/assets/icons/happy.png": "ce93b518d8ec49356a58a5a5b2baef29",
"assets/assets/icons/headphone.png": "ae04374b36d7ff27607e6f916132c6cb",
"assets/assets/icons/Heart.png": "3cac3ab55c7fbca756da819d3daa5d4a",
"assets/assets/icons/help.png": "d2d952de5ee630a19a8e54e496b2ab89",
"assets/assets/icons/home.png": "ca03da88717e7841b4791a127a1132e0",
"assets/assets/icons/iIcon.png": "990ff98706221fc8026310aab2dc07ba",
"assets/assets/icons/image.png": "93bbee42cd5a6a2656b50470e5e0a025",
"assets/assets/icons/like%2520-%2520Copy.png": "e879a4f50f4bb034371191eff0891fdf",
"assets/assets/icons/like.png": "e879a4f50f4bb034371191eff0891fdf",
"assets/assets/icons/location.png": "32f9917d8e671a92fa33fef46fda4c86",
"assets/assets/icons/Lock.png": "5d8687b3771a5d27bdd3596841333d48",
"assets/assets/icons/Logout.png": "6ddd3a7e1273d4680272ed0a8fad4185",
"assets/assets/icons/Logouticon.png": "0f64cb3a0873e960874228dc2814df36",
"assets/assets/icons/mail.png": "e5900bae83c67267a72e56e56025d4f7",
"assets/assets/icons/membershipicon.png": "9871187feef7ec22231a577ae843c815",
"assets/assets/icons/mice.png": "1166c911a37caae2d27576bd738ef295",
"assets/assets/icons/minus.png": "39c98a18cc92b3fd8f726e1faaa21483",
"assets/assets/icons/minuscircle.png": "bea9017756572ddf7670c320d97ef847",
"assets/assets/icons/moon.png": "975d3eb74c93cd628ca51642e156b121",
"assets/assets/icons/music.png": "0daf486544fbff5249bc2301d6948cb0",
"assets/assets/icons/newabout.png": "0c7d2585f230b9489bc4c7001e2af9e7",
"assets/assets/icons/newhelp.png": "a8396f8af1ecfafbab718cf67e4d178b",
"assets/assets/icons/noCart.png": "217d0c484fabed905abcdf8193590e68",
"assets/assets/icons/noCart1.png": "e4f366a74b382fa4d3975e17c53d93e0",
"assets/assets/icons/not.png": "177516c1b0e9a2c22cee039ca834f956",
"assets/assets/icons/Notification.png": "d617619fbc34e6d7b791f05523b0f9b9",
"assets/assets/icons/ordericon.png": "d138dad1f03d2facbb421ffce88324fe",
"assets/assets/icons/Pause.png": "c9f5c769c56908a22480ee7f69e7b515",
"assets/assets/icons/paytm.png": "5b9379d4c13a1fbf784b6328d5986cd8",
"assets/assets/icons/pencil.png": "c42b9b3879a7c9ae5162d62c88a56bad",
"assets/assets/icons/percent.png": "81b689402242d156f1f4afa61cd8cb29",
"assets/assets/icons/photography.png": "fbe8b86f22d8d6a324cd2a467d9e29f8",
"assets/assets/icons/play.png": "77ce96c8f3243da7e9bfe3093734c28a",
"assets/assets/icons/playbgcolor.png": "20511db9720363f7aab070e2afc2f34b",
"assets/assets/icons/plus.png": "fd8d5413c3cab9bcf9a676e078d90992",
"assets/assets/icons/pluscircle.png": "f725607bfadae811fb0432cf93e6f9ab",
"assets/assets/icons/policy.png": "1afa74fed60b635e1d2d882ca594e87e",
"assets/assets/icons/power.png": "d3a9fee6d1ab8f63f005533922523ec7",
"assets/assets/icons/Profile.png": "2216918bae7d0cae21f60eb6b42aabff",
"assets/assets/icons/puzzle.png": "8b57f8a8cd572c3d4d7ac6f1a86dbcd9",
"assets/assets/icons/Rectangle.png": "8ab9a4f4349d324a7c55f8101cbaafa6",
"assets/assets/icons/refund.png": "7d0ac9dcc41e12044e085225274bc753",
"assets/assets/icons/reload.png": "ba1ea72e5e4fb22e047fd87c06c72820",
"assets/assets/icons/reload2.png": "a8b47538ed027b08ad63e6936604f053",
"assets/assets/icons/return.png": "44c33f5cf32a39ea80fe9ed2800f6c6b",
"assets/assets/icons/returnBox.png": "b26a6ab0d0059bd17093bdf11b072619",
"assets/assets/icons/returnpolicy.png": "7e26a7b8867332015e675846d8254c72",
"assets/assets/icons/rightcircle.png": "be10a0672f2b5c9cbe3de2fc114c3300",
"assets/assets/icons/romance.png": "eeec8c8e0e6dfa9eab99e27f732d0905",
"assets/assets/icons/search.png": "d5f803e8fc65477b263a3e37004c1ca0",
"assets/assets/icons/search2.png": "c700567f21e5291438627bca31b06f63",
"assets/assets/icons/searchimg.png": "443926b6944b3ed60e9a2f90f39f353c",
"assets/assets/icons/selfhelp.png": "146e5a68d62f9fb37a21e2e6f58ff875",
"assets/assets/icons/sellingicon.png": "0953f0077c7fd45f63ba7c5c9be5305e",
"assets/assets/icons/send.png": "f55bea34d44708184d2afcf2b068edb2",
"assets/assets/icons/share.png": "9bfb55ad3d67a119e7d6c59d0f2e65d4",
"assets/assets/icons/Shield.png": "164272925fd8a48a2a2de607a60a34d1",
"assets/assets/icons/shipping.png": "8d6dcf6818c377a65bfb8b16d51304bf",
"assets/assets/icons/shopbag.png": "6de6272f8232b0b153f62de55f9bc7ff",
"assets/assets/icons/shopcart.png": "1899f897da99e1915254a8c844defc46",
"assets/assets/icons/star.png": "2662719ef2f9f8781d1c4602e67d89c2",
"assets/assets/icons/starfill.png": "04c2fbf3ae9a0c9e2c92251b4a637175",
"assets/assets/icons/support.png": "5047f6eea89cb56504fa5a1b0f663d66",
"assets/assets/icons/TableLine.png": "8ccae5e493cd028c6507b7fe201dbcd4",
"assets/assets/icons/telephone.png": "0efb5115510a56029156427c31d1c6b5",
"assets/assets/icons/terms.png": "93ecaca18da52596ad7a75358d14f5eb",
"assets/assets/icons/threedot.png": "dc9341e776b42107c74c4d42fd399fe6",
"assets/assets/icons/toggle.png": "b7e05ea30837955f01d6f3fb20548034",
"assets/assets/icons/travel.png": "0a16e971329102e26d7fbf6911b5e367",
"assets/assets/icons/update.jpg": "774e9eae2e23b84a33b6f89485a32c8c",
"assets/assets/icons/user.png": "143c350f0b289d4f7fc5c59060b77f46",
"assets/assets/icons/world.png": "ef72800c80f0558ccab95300f3079e34",
"assets/assets/icons/x.png": "2ed66866101477b9dd70e90d52a9c510",
"assets/assets/images/artist.png": "41b3ecface41e9cf0a26a017198db651",
"assets/assets/images/artist2.png": "f799f98129c79ca9bf82ae8025bf4406",
"assets/assets/images/artist3.png": "b49ccb3a6fa85a22c25415a4377fb136",
"assets/assets/images/audio1.png": "c0619faa719461b6c76990d528125e84",
"assets/assets/images/audio2.png": "d553dfc432059edf2c471f06d05a8fca",
"assets/assets/images/audio3.png": "fd9033b36d518356c74a8dd70044edc5",
"assets/assets/images/audio4.png": "ad45d396e11af8df3f8f1b2b44a6c97e",
"assets/assets/images/audio5.png": "3b0263031693d75c935ab45b97ae6ea7",
"assets/assets/images/audio6.png": "f5507d08300ecd327d27f560273c278e",
"assets/assets/images/audio7.png": "7005c33ae5b02d7dca0b27142910e4ef",
"assets/assets/images/book1.png": "56f7c2eb8457feff21643e54ce194ffb",
"assets/assets/images/book2.png": "8ff30e7f3171a33d91c0e896ee2c081c",
"assets/assets/images/book3.png": "029c4597cc4afb042eaf9a51c5e2ad22",
"assets/assets/images/book4.png": "c2206e6f7a5c985ff46846b6b9d1532e",
"assets/assets/images/book5.png": "fa132cfe95051ff85626dac918850cb7",
"assets/assets/images/book6.png": "e22849cc9e14b1587995dee326c5e36b",
"assets/assets/images/cart.png": "b2245cf8d68d4faea8231cf454d2de34",
"assets/assets/images/cart2.png": "8caf991d64208f68e5d0156685b2bd23",
"assets/assets/images/cart3.png": "77e574c9ca00bef1a85ce9e600b923e6",
"assets/assets/images/cart4.png": "2e1fd35bef8efe4e1fd62d4a7f2232bf",
"assets/assets/images/checkOutBg.png": "60d655abf932df477cd5a9f37fa85247",
"assets/assets/images/default.png": "0bee3489dd4441251306cf906c43d82e",
"assets/assets/images/discover1.png": "ca7c61dd64a9c73d2b5094e1285abe44",
"assets/assets/images/discover2.png": "834fc588711252e9b29012c6faeecb6f",
"assets/assets/images/discover3.png": "099fbc14e7e347e7b9987ed60164bac1",
"assets/assets/images/discover4.png": "31b1b41a95a1bc3add764f585ec445b9",
"assets/assets/images/dummyProfile.jpg": "98351be434bf2e38bd3c6dc06cf90346",
"assets/assets/images/home1.png": "76d39f04e45284b1e772a5573f8bfe57",
"assets/assets/images/home2.png": "f022b4afe78a04a1c83757e13b57d9e8",
"assets/assets/images/home3.png": "30a7be28ce747784484f6db3e22fd180",
"assets/assets/images/home4.png": "6fb24c68d5bf61c5c861e2ab61ae42ba",
"assets/assets/images/home5.png": "159890251d2301eafacabc2ba4dc5d11",
"assets/assets/images/home6.png": "f6800a31d407c84551ac560cb0c661e5",
"assets/assets/images/home7.png": "ed72211276fe4f50b628e3a6d3dbdc20",
"assets/assets/images/home8.png": "e547a0617b616279d69f25c5dd0fd33d",
"assets/assets/images/homeslide1.png": "48d367c5830635c54193c146183a519b",
"assets/assets/images/homeslide2.png": "4cab2eedfbe2c0be734220a9ae615211",
"assets/assets/images/homeslide3.png": "1202c220bae27a0a1016c0383c7cd51e",
"assets/assets/images/login.png": "cc885ec43b0089a1054ccf57628772f9",
"assets/assets/images/logo.png": "db85cecd2d9d8f2e9897a4a47693acc2",
"assets/assets/images/noBooks.png": "6cd6839a902e2fdee9cd909c0daac39e",
"assets/assets/images/noOrder.jpg": "7d10050aed809504d17879f2e4f1dfd1",
"assets/assets/images/onboard1.png": "582649fcbf668c94db159fcc7e3cb27b",
"assets/assets/images/onboard2.png": "59a33e7db4f77b918044fa703e757611",
"assets/assets/images/onboard3.png": "6fbc1ea44ec3641a17eaa9a9dc2b97c1",
"assets/assets/images/onboard4.png": "ad7bd762af61ed5dd4585df4fb97c4e9",
"assets/assets/images/onboard5.png": "5c6ca9dacb8cf1a34a5cc6a4c5c03b5d",
"assets/assets/images/onboardbackground.png": "685871a563f2f9223c61907beba61c20",
"assets/assets/images/product.png": "376440cd5530d35e1ebc0f2b01685e1a",
"assets/assets/images/product2.png": "2988f39d8191acbe799c63b59f55c583",
"assets/assets/images/rentcart.png": "1c0d30f7d5132703b9a564b2c0b9a600",
"assets/assets/images/subscribe.png": "1cc4891c87cca5b3cdaa92e4ecc73806",
"assets/assets/images/Success.png": "fdd812d59a7cef0750d59242b00c3dc4",
"assets/assets/images/supports.jpg": "d8f2fbf2a40fa5da6562ee6922f9cdf4",
"assets/assets/images/ThePsy.png": "cbf362a526ea12c9738869f2394eae8d",
"assets/assets/images/unsplash1.png": "0a80aa1fc385dd37650354a38ada16ca",
"assets/assets/images/unsplash2.png": "4dd346ecb196dddfc15c5368e0bf67b4",
"assets/assets/images/unsplash3.png": "8c416f4f083853ce1233f3ddbfff97b6",
"assets/assets/lottie/celebration.json": "7d9249a912954d734446b0a5610e5ccd",
"assets/assets/lottie/success.json": "1808204e27a90a6e34ad41257c316345",
"assets/assets/lottie/voiceSearch.json": "5bb4eec7c8cedb19e91deeb2cd34ea14",
"assets/FontManifest.json": "8cc58d3a26ac4b8912d37b021572e06e",
"assets/fonts/MaterialIcons-Regular.otf": "a097ecf291f59f50dd15c3985a8f742b",
"assets/NOTICES": "b4f628d0edeee98c5147e6d911e3d60f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_3d_controller/assets/model_viewer.min.js": "11f3833db561a92ac9100cd43d28899b",
"assets/packages/flutter_3d_controller/assets/model_viewer_template.html": "a9989c356a88d3bb1f11c710ff2923de",
"assets/packages/flutter_rating_stars/assets/star_off.png": "510ce4aac7c14568132bdda920c8a76e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "cf4403e54b7997cb17fa268f7d1ebd49",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "eba8e9ab413ec60eefef62de9758d268",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "19327f50e4a753674fbf7e2011d8f7ee",
"/": "19327f50e4a753674fbf7e2011d8f7ee",
"main.dart.js": "c13e409f8bad741de36d9d7547320a9a",
"manifest.json": "5510ed426bca27ecd5494f81e6f2ccfb",
"version.json": "68e786126856b41244224e6aa5339f52"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
