export function cartSummary(totalPrice) {
    const summary = document.createElement("div");
    summary.classList.add("cart-summary");

    const cartTitle = document.createElement("p");
    cartTitle.textContent = "Order Summary";
    cartTitle.classList.add("cart-title");

    const priceContainer = document.createElement("div");
    priceContainer.classList.add("price-container");

    const priceTotal = document.createElement("div");
    priceTotal.classList.add("price-total");

    const totalTextSpan = document.createElement("span");
    totalTextSpan.textContent = "Subtotal";
    totalTextSpan.classList.add("subtotal-text");

    const totalCostSpan = document.createElement("span");
    totalCostSpan.textContent = `${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(totalPrice)}`;
    totalCostSpan.classList.add("subtotal-cost");

    priceTotal.append(totalTextSpan, totalCostSpan);

    const priceTax = document.createElement("div");
    priceTax.classList.add("price-total");

    const taxTextSpan = document.createElement("span");
    taxTextSpan.textContent = "Tax (14%)";
    taxTextSpan.classList.add("tax-text");

    const taxCostSpan = document.createElement("span");
    taxCostSpan.textContent = `${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(totalPrice * 0.14)}`;
    taxCostSpan.classList.add("tax-cost");

    priceTax.append(taxTextSpan, taxCostSpan);

    const priceGrandTotal = document.createElement("div");
    priceGrandTotal.classList.add("price-total", "grand-total");

    const grandTotalTextSpan = document.createElement("span");
    grandTotalTextSpan.textContent = "Grand Total";
    grandTotalTextSpan.classList.add("grand-total-text");

    const grandTotalCostSpan = document.createElement("span");
    grandTotalCostSpan.textContent = `${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(totalPrice * 1.14)}`;
    grandTotalCostSpan.classList.add("grand-total-cost");

    priceGrandTotal.append(grandTotalTextSpan, grandTotalCostSpan);

    priceContainer.append(priceTotal, priceTax, priceGrandTotal);

    const checkoutBtn = document.createElement("button");
    checkoutBtn.textContent = "Proceed to Checkout >";
    checkoutBtn.classList.add("checkout-btn");

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("summary-buttons");

    const continueShoppingBtn = document.createElement("button");
    continueShoppingBtn.textContent = "< Continue Shopping";
    continueShoppingBtn.classList.add("continue-shopping-btn");

    const clearCartBtn = document.createElement("button");
    clearCartBtn.textContent = "X Clear Cart";
    clearCartBtn.classList.add("clear-cart-btn");

    buttonsContainer.append(continueShoppingBtn, clearCartBtn);

    const secureCheckoutMsg = document.createElement("p");
    secureCheckoutMsg.textContent = "Secure Checkout";
    secureCheckoutMsg.classList.add("secure-checkout-msg");

    const secureCheckoutIcon = document.createElement("i");
    secureCheckoutIcon.classList.add("fas", "fa-lock");
    secureCheckoutMsg.prepend(secureCheckoutIcon);

    summary.append(cartTitle, priceContainer, checkoutBtn, buttonsContainer, secureCheckoutMsg);
    return summary;
}