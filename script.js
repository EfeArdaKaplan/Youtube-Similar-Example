const menuButton = document.querySelectorAll(".menu-button");
const screenOverlay = document.querySelector(".screen-overlay");
const themeButton = document.querySelector(".theme-button i");

// Sayfa ilk yüklendiğinde localStorage'daki dark mode durumunu uygula
if (localStorage.getItem("darkmode") === "enabled") {
    document.body.classList.add("dark-mode");
    themeButton.classList.remove("fa-moon");
    themeButton.classList.add("fa-sun"); // 🌞
} else {
    themeButton.classList.remove("fa-sun");
    themeButton.classList.add("fa-moon"); // 🌙
}

// Tema değiştirme butonuna tıklandığında
themeButton.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkmode", isDarkMode ? "enabled" : "disabled");

    if (isDarkMode) {
        themeButton.classList.remove("fa-moon");
        themeButton.classList.add("fa-sun"); // 🌞
    } else {
        themeButton.classList.remove("fa-sun");
        themeButton.classList.add("fa-moon"); // 🌙
    }
});

// Menü butonları
menuButton.forEach(button => {
    button.addEventListener("click", () => {
        document.body.classList.toggle("sidebar-hidden");
    });
});

// Ekran karartma alanına tıklanırsa sidebar kapat
screenOverlay.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
});

// Geniş ekranda sidebar açık kalsın
if (window.innerWidth >= 768) {
    document.body.classList.remove("sidebar-hidden");
}
