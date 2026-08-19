// ================= 모바일 메뉴 토글 =================
const menuToggle = document.getElementById("menu-toggle");
const mobileNav = document.getElementById("mobile-nav");

menuToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("active");
  });
});

// ================= 이벤트 팝업: 오늘 하루 보지 않기 =================
const popup = document.getElementById("event-popup");
const popupClose = document.getElementById("popup-close");
const popupHideToday = document.getElementById("popup-hide-today");
const STORAGE_KEY = "hidePopupUntil";

function shouldShowPopup() {
  const hideUntil = localStorage.getItem(STORAGE_KEY);
  if (!hideUntil) return true;
  return Date.now() > Number(hideUntil);
}

if (popup && !shouldShowPopup()) {
  popup.classList.add("hidden");
}

popupClose.addEventListener("click", () => {
  if (popupHideToday.checked) {
    const oneDayLater = Date.now() + 24 * 60 * 60 * 1000;
    localStorage.setItem(STORAGE_KEY, String(oneDayLater));
  }
  popup.classList.add("hidden");
});
