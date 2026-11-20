
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    // Highlight the current navigation link
    function updateNavigation() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;

            if (window.scrollY >= sectionTop) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(link => {
            const isActive =
                link.getAttribute("href") === `#${currentSection}`;

            link.style.color = isActive ? "var(--primary)" : "";
            link.style.fontWeight = isActive ? "600" : "";
        });
    }

    // Update navigation when scrolling
    window.addEventListener("scroll", updateNavigation, {
        passive: true
    });

    // Update navigation when clicking a link
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            setTimeout(updateNavigation, 100);
        });
    });

    updateNavigation();

    console.log("Yilan Sun's personal website is ready!");
});
