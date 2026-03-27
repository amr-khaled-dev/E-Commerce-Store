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

export function showError(statusElement, containerElement, message = 'An error occurred. Please try again.') {
    if (!statusElement || !containerElement) return;
    statusElement.textContent = message;
    statusElement.style.display = "block";
    containerElement.innerHTML = "";
}

export function hideStatus(statusElement) {
    if (!statusElement) return;
    statusElement.textContent = "";
    statusElement.style.display = "none";
}