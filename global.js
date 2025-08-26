    // Mobile Legals dropdown toggle
const mobileDropdownBtn = document.querySelector(".mobile-dropdown-btn");
const mobileDropdown = document.querySelector(".mobile-dropdown");

mobileDropdownBtn.addEventListener("click", function(e) {
    e.stopPropagation();
    mobileDropdown.classList.toggle("active");
});

    // Typed text animation
const typedText = document.getElementById('typedtext');
const markSpan = document.createElement('span');
markSpan.className = 'mark';
const zonicSpan = document.createElement('span');
zonicSpan.className = 'zonic';
typedText.appendChild(markSpan);
typedText.appendChild(zonicSpan);
const text = "MARKZONIC";
let index = 0;
function type() {
    if (index < text.length) {
        const char = text.charAt(index);
        if (index < 4) {
            markSpan.textContent += char;
        } else {
            zonicSpan.textContent += char;
        }
        index++;
        setTimeout(type, 100);
    }
}
type();

// Logo click animation
const logoImg = document.getElementById('animatedLogoImg');
logoImg.addEventListener('click', function () {
    if (!logoImg.classList.contains('logo-animated')) {
        logoImg.classList.add('logo-animated');
        logoImg.addEventListener('animationend', function () {
            logoImg.classList.remove('logo-animated');
        }, { once: true });
    }
});

// Dropdown click toggle
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdown = document.querySelector(".dropdown");
dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdown.classList.toggle("active");
});
document.addEventListener("click", function () {
    dropdown.classList.remove("active");
});

// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});
document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !mobileMenuButton.contains(event.target)) {
        mobileMenu.classList.remove('active');
    }
});
