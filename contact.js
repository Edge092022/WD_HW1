/* Native form validation with local feedback */
(() => {
    const form = document.querySelector("#contact-form");
    const status = document.querySelector("#contact-status");
    const submit = document.querySelector("#contact-submit");
    const name = document.querySelector("#contact-name");
    const message = document.querySelector("#contact-message");

    function setState(state, feedback) {
        form.dataset.state = state;
        status.textContent = feedback;
    }

    function validateText(input) {
        input.setCustomValidity(
            input.value.trim() ? "" : "Please enter text, not only spaces."
        );
    }

    for (const input of [name, message]) {
        input.addEventListener("input", () => {
            validateText(input);
        });
    }

    form.addEventListener("invalid", () => {
        setState(
            "invalid",
            "Complete the required fields and enter a valid email address."
        );
    }, true);

    form.addEventListener("input", () => {
        setState("idle", "");
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        validateText(name);
        validateText(message);

        if (!form.reportValidity()) return;

        setState(
            "validated",
            "Form validated. This demonstration does not send messages."
        );
    });

    setState("idle", "");
    submit.disabled = false;
})();