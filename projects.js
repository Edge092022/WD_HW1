/* Local simulated project loading */
(() => {
    const component = document.querySelector("#projects");
    const heading = document.querySelector("#projects-heading");
    const status = document.querySelector("#projects-status");
    const loading = document.querySelector("#projects-loading");
    const data = document.querySelector("#projects-data");
    const empty = document.querySelector("#projects-empty");
    const error = document.querySelector("#projects-error");
    const emptyRetry = document.querySelector("#empty-retry");
    const errorRetry = document.querySelector("#error-retry");

    const scenario =
        new URLSearchParams(window.location.search).get("projects");

    let attempts = 0;
    let busy = false;

    const projects = [
        {
            id: "semantic-portfolio",
            title: "Semantic Portfolio",
            description:
                "A coursework page with semantic landmarks, headings, and keyboard navigation.",
            technologies: ["HTML", "Accessibility"]
        },
        {
            id: "responsive-portfolio",
            title: "Responsive Portfolio",
            description:
                "A coursework portfolio with CSS Grid, design tokens, and a persistent theme.",
            technologies: ["CSS", "JavaScript"]
        }
    ];

    function simulateLoad() {
        attempts += 1;
        const attempt = attempts;

        return new Promise((resolve, reject) => {
            window.setTimeout(() => {
                if (attempt === 1 && scenario === "empty") {
                    resolve([]);
                } else if (attempt === 1 && scenario === "error") {
                    reject(new Error("Simulated loading failure."));
                } else {
                    resolve(projects);
                }
            }, 1000);
        });
    }

    function createCard(project) {
        const card = document.createElement("article");
        card.className = "project-card";

        const title = document.createElement("h3");
        title.id = `${project.id}-heading`;
        title.textContent = project.title;
        card.setAttribute("aria-labelledby", title.id);

        const description = document.createElement("p");
        description.textContent = project.description;

        const tags = document.createElement("ul");
        tags.className = "badges";
        tags.setAttribute("aria-label", "Technologies used");

        for (const technology of project.technologies) {
            const item = document.createElement("li");
            item.textContent = technology;
            tags.append(item);
        }

        const linkParagraph = document.createElement("p");
        linkParagraph.className = "project-link";

        const link = document.createElement("a");
        link.href = "https://github.com/Edge092022/HW1";
        link.textContent = "View portfolio repository";
        linkParagraph.append(link);

        card.append(title, description, tags, linkParagraph);
        return card;
    }

    function setState(state, message) {
        component.dataset.state = state;
        loading.hidden = state !== "loading";
        data.hidden = state !== "data";
        empty.hidden = state !== "empty";
        error.hidden = state !== "error";
        loading.setAttribute("aria-busy", String(state === "loading"));
        status.textContent = message;
    }

    async function loadProjects() {
        if (busy) return;
        busy = true;

        if (
            empty.contains(document.activeElement) ||
            error.contains(document.activeElement)
        ) {
            heading.focus();
        }

        setState("loading", "Loading projects...");

        try {
            const result = await simulateLoad();
            data.replaceChildren();

            if (result.length === 0) {
                setState("empty", "No projects found. Simulated result.");
                return;
            }

            const fragment = document.createDocumentFragment();

            for (const project of result) {
                fragment.append(createCard(project));
            }

            data.append(fragment);
            setState("data", `${result.length} projects loaded.`);
        } catch {
            data.replaceChildren();
            setState("error", "Loading failed. Please retry.");
        } finally {
            busy = false;
        }
    }

    emptyRetry.addEventListener("click", () => {
        void loadProjects();
    });

    errorRetry.addEventListener("click", () => {
        void loadProjects();
    });

    void loadProjects();
})();