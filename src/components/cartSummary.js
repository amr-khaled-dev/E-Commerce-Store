export function cartSummary(totalPrice) {
    const summary = document.createElement("div");
    summary.classList.add("cart-summary");

    const totalPriceSpan = document.createElement("span");
    totalPriceSpan.textContent = `Total: ${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(totalPrice)}`;
    totalPriceSpan.classList.add("total-price");

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("summary-buttons");

    const clearCartBtn = document.createElement("button");
    clearCartBtn.textContent = "Clear Cart";
    clearCartBtn.classList.add("clear-cart-btn");

    const checkoutBtn = document.createElement("button");
    checkoutBtn.textContent = "Checkout";
    checkoutBtn.classList.add("checkout-btn");

    const continueShoppingBtn = document.createElement("button");
    continueShoppingBtn.textContent = "Continue Shopping";
    continueShoppingBtn.classList.add("continue-shopping-btn");

    buttonsContainer.append(clearCartBtn, checkoutBtn, continueShoppingBtn);
    summary.append(totalPriceSpan, buttonsContainer);
    return summary;
}