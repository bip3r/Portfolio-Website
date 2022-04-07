const navEl = document.querySelector(".navbar-list");
const mobileNavBtnEl = document.querySelector(".btn-mobile-nav");
const navBarListEl = document.querySelectorAll(".navbar-item");

for (const el of navBarListEl) {
    el.addEventListener("click", () => {
        deactivateNav();
    });
}

mobileNavBtnEl.addEventListener("click", () => {
    deactivateNav();
});

function deactivateNav() {
    navEl.classList.toggle("nav-open");
    for (el of mobileNavBtnEl.children) {
        el.classList.toggle("nav-icon-display");
        el.classList.toggle("nav-icon-hide");
        console.log(el);
    }
}
