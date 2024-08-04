if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register("../sw.js")
    .then((reg) => {
      console.log("file is register", reg);
    })
    .catch((err) => {
      console.log("ERROR", err);
    });
}

if (!navigator.onLine) {
  alert("Website Is Offline");
}

let send = document.getElementById("sendd");

Notification.requestPermission().then((permission) => {
  if (permission === "granted") {
    console.log("Permission is Granted for Notifications");
  } else {
    console.log("Permission is Denied for Notification");
  }
});
// Donate Now Message
function sendNotification() {
  if (window.PushManager) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.showNotification("Life Drop", {
        body: " تم الحجز لعمل الفحوصات, ويجب التوجه لمعمل (فارما), ويرجي العلم انه سيتم ألغاء الموعد في خلال 3 أيام تلقائي",
        icon: "image/logo.png",
      });
    });
  }
}
// Find Donar Message
function sendNotificationn() {
  if (window.PushManager) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.showNotification("Life Drop", {
        body: "تم أستلام حجزك بنجاح, وسيتم ايصالك بمتبرع في خلال يوم",
        icon: "image/logo.png",
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loading-screen").style.display = "flex";

  setTimeout(function () {
    document.getElementById("loading-screen").style.display = "none";

    document.getElementById("content").style.display = "block";
  }, 800);
});

// Language Translate
let currentLanguage = localStorage.getItem("language") || "en";
let currentDirection =
  localStorage.getItem("direction") && currentLanguage === "ar" ? "rtl" : "ltr";

function changeLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("language", currentLanguage);

  currentDirection = currentLanguage === "ar" ? "rtl" : "ltr";
  localStorage.setItem("direction", currentDirection);

  document.documentElement.dir = currentDirection;
  updatePageLanguage();
}

function updatePageLanguage() {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });

  const englishButton = document.getElementById("englishText");
  const arabicButton = document.getElementById("arabicText");

  if (currentLanguage === "en") {
    englishButton.style.display = "none";
    arabicButton.style.display = "block";
  } else if (currentLanguage === "ar") {
    englishButton.style.display = "block";
    arabicButton.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.dir = currentDirection;
  updatePageLanguage();
});

// Add click event for scroll up button
let scrollBtn = document.querySelector(".scrollBtn");

window.addEventListener("scroll", () => {
  scrollup();
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
scrollup();

function scrollup() {
  window.scrollY > 100
    ? scrollBtn.classList.add("active")
    : scrollBtn.classList.remove("active");
}
