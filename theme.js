/* Persistent theme controller */
(() => {
    const root = document.documentElement;
    const toggle = document.querySelector("#theme-toggle");

    if (!toggle) return;

    function applyTheme(theme) {
        root.dataset.theme = theme;
        toggle.setAttribute("aria-pressed", String(theme === "dark"));
    }

    let theme = "light";

    try {
        const saved = localStorage.getItem("theme");

        if (saved === "light" || saved === "dark") {
            theme = saved;
        }
    } catch {
        // Theme switching still works without browser storage.
    }

    applyTheme(theme);

    toggle.addEventListener("click", () => {
        const next = root.dataset.theme === "dark" ? "light" : "dark";
        applyTheme(next);

        try {
            localStorage.setItem("theme", next);
        } catch {
            // Keep the selected theme for the current page.
        }
    });

    toggle.disabled = false;
})();