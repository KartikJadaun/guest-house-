// Additional Features JavaScript

document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling for Links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = e.currentTarget.getAttribute("href").slice(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjusts for navbar height
                    behavior: "smooth"
                });
            }
        });
    });

    // Dark Mode Toggle
    const darkModeToggle = document.createElement("button");
    darkModeToggle.classList.add("dark-mode-toggle");
    darkModeToggle.innerHTML = "<i class='fas fa-moon'></i>";
    document.body.appendChild(darkModeToggle);

    darkModeToggle.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: #333;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        cursor: pointer;
        transition: background-color 0.3s;
    `;

    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        darkModeToggle.innerHTML = document.body.classList.contains("dark-mode")
            ? "<i class='fas fa-sun'></i>"
            : "<i class='fas fa-moon'></i>";
    });

    // Dark Mode Styles
    if (!document.querySelector("#dark-mode-styles")) {
        const darkModeStyles = document.createElement("style");
        darkModeStyles.id = "dark-mode-styles";
        darkModeStyles.textContent = `
            body.dark-mode {
                background-color: #121212;
                color: #e4e4e4;
            }
            body.dark-mode .navbar,
            body.dark-mode .footer_wrapper {
                background-color: #333;
            }
            body.dark-mode .main-btn {
                color: #e4e4e4;
                border-color: #e4e4e4;
            }
            body.dark-mode .back-to-top,
            body.dark-mode .dark-mode-toggle {
                background-color: #444;
                color: #e4e4e4;
            }
        `;
        document.head.appendChild(darkModeStyles);
    }

    // FAQ Toggle
    document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", () => {
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
    });


    // Back to Top Button
    const backToTopBtn = document.createElement("button");
    backToTopBtn.classList.add("back-to-top");
    backToTopBtn.innerHTML = "<i class='fas fa-chevron-up'></i>";
    document.body.appendChild(backToTopBtn);

    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 6rem;
        right: 2rem;
        opacity: 0;
        visibility: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background-color: var(--primary-color);
        color: var(--text-white);
        border: none;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        transition: opacity 0.3s, visibility 0.3s;
    `;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.opacity = "1";
            backToTopBtn.style.visibility = "visible";
        } else {
            backToTopBtn.style.opacity = "0";
            backToTopBtn.style.visibility = "hidden";
        }
    });

    backToTopBtn.onclick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
});
