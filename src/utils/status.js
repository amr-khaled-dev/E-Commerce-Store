export function showLoading(statusElement, containerElement, message = 'Loading...') {
    if (!statusElement || !containerElement) return;
    statusElement.textContent = message;
    statusElement.style.display = "block";
    // containerElement.innerHTML = "";
}

export function showSuccess(statusElement, message = 'Operation successful!') {
    if (!statusElement) return;
    statusElement.textContent = message;
    statusElement.style.display = "block";
}

export function showEmptyState(statusElement, options = {}) {
    if (!statusElement) return;
    const {
        title = "No data found",
        description = "",
        buttonText = "Go Back",
        buttonLink = "/"
    } = options;

    const emptyState = document.createElement("div");
    emptyState.classList.add("empty-state");

    const emptyIconContainer = document.createElement("div");
    emptyIconContainer.classList.add("empty-icon");

    const emptyIcon = document.createElement("i");
    emptyIcon.classList.add("fas", "fa-cart-arrow-down");

    emptyIconContainer.appendChild(emptyIcon);

    const emptyTitle = document.createElement("h2");
    emptyTitle.textContent = title;
    emptyTitle.classList.add("empty-title");

    const emptyDescription = document.createElement("p");
    emptyDescription.textContent = description;
    emptyDescription.classList.add("empty-description");

    const emptyButton = document.createElement("button");
    emptyButton.classList.add("empty-btn");

    const emptyButtonLink = document.createElement("a");
    emptyButtonLink.textContent = buttonText;
    emptyButtonLink.href = buttonLink;
    emptyButtonLink.classList.add("empty-btn-link");
    emptyButton.appendChild(emptyButtonLink);

    emptyState.append(emptyIconContainer, emptyTitle, emptyDescription, emptyButton);

    statusElement.innerHTML = "";
    statusElement.appendChild(emptyState);
    statusElement.style.display = "block";
}

export function showError(statusElement, options = {}) {
    const {
        title = "No data found",
        description = "Looks like something went wrong, please try again later.",
        buttonText = "Go Back",
        buttonLink = "index.html"
    } = options;

    const emptyState = document.createElement("div");
    emptyState.classList.add("empty-state");

    const emptyIconContainer = document.createElement("div");
    emptyIconContainer.classList.add("empty-icon");

    const emptyIcon = document.createElement("i");
    emptyIcon.classList.add("fas", "fa-exclamation-triangle");

    emptyIconContainer.appendChild(emptyIcon);

    const emptyTitle = document.createElement("h2");
    emptyTitle.textContent = title;
    emptyTitle.classList.add("empty-title");

    const emptyDescription = document.createElement("p");
    emptyDescription.textContent = description;
    emptyDescription.classList.add("empty-description");

    const emptyButton = document.createElement("button");
    emptyButton.classList.add("empty-btn");

    const emptyButtonLink = document.createElement("a");
    emptyButtonLink.textContent = buttonText;
    emptyButtonLink.href = buttonLink;
    emptyButtonLink.classList.add("empty-btn-link");
    emptyButton.appendChild(emptyButtonLink);

    emptyState.append(emptyIconContainer, emptyTitle, emptyDescription, emptyButton);

    statusElement.innerHTML = "";
    statusElement.appendChild(emptyState);
    statusElement.style.display = "block";
}

export function hideStatus(statusElement) {
    if (!statusElement) return;
    statusElement.textContent = "";
    statusElement.style.display = "none";
}