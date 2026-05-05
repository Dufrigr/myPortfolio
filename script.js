console.log("JS Loaded");
document.addEventListener("DOMContentLoaded", function() {

    let container = document.querySelector(".container");
    if (container) {
        container.style.opacity = 1;
    }

    document.querySelectorAll(".sidebar a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            let target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

});
function toggleDarkMode() {
    document.body.classList.toggle("dark");

    let toggle = document.getElementById("themeToggle");

    if (toggle.checked) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

/* Load saved theme */
document.addEventListener("DOMContentLoaded", function() {
    let theme = localStorage.getItem("theme");
    let toggle = document.getElementById("themeToggle");

    if (theme === "dark") {
        document.body.classList.add("dark");
        if (toggle) toggle.checked = true;
    }
});

// Scroll animation
function revealSections() {
    let sections = document.querySelectorAll("section");

    sections.forEach(section => {
        let top = section.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            section.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// Highlight active section
window.addEventListener("scroll", function() {
    let sections = document.querySelectorAll("section");
    let links = document.querySelectorAll(".sidebar a");

    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            links.forEach(link => {
                link.classList.remove("active");
                document.querySelector(".sidebar a[href='#" + id + "']")
                    ?.classList.add("active");
            });
        }
    });
});
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("active");
}