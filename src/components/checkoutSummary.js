export function checkoutSummary(totalPrice, tax, shippingCost, grandTotal) {
    const summary = document.createElement("div");
    summary.classList.add("checkout-summary");

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
    taxCostSpan.textContent = `${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(tax)}`;
    taxCostSpan.classList.add("tax-cost");

    priceTax.append(taxTextSpan, taxCostSpan);

    const priceShipping = document.createElement("div");
    priceShipping.classList.add("price-total");

    const shippingTextSpan = document.createElement("span");
    shippingTextSpan.textContent = "Shipping";
    shippingTextSpan.classList.add("shipping-text");

    const shippingCostSpan = document.createElement("span");
    shippingCostSpan.textContent = `${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(shippingCost)}`;
    shippingCostSpan.classList.add("shipping-cost");

    priceShipping.append(shippingTextSpan, shippingCostSpan);

    const priceGrandTotal = document.createElement("div");
    priceGrandTotal.classList.add("price-total", "grand-total");

    const grandTotalTextSpan = document.createElement("span");
    grandTotalTextSpan.textContent = "Grand Total";
    grandTotalTextSpan.classList.add("grand-total-text");

    const grandTotalCostSpan = document.createElement("span");
    grandTotalCostSpan.textContent = `${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(grandTotal)}`;
    grandTotalCostSpan.classList.add("grand-total-cost");

    priceGrandTotal.append(grandTotalTextSpan, grandTotalCostSpan);

    const submitButton = document.createElement("button");
    submitButton.textContent = "Place Order";
    submitButton.classList.add("place-order-button");
    submitButton.type = "submit";
    submitButton.setAttribute("form", "checkoutForm");

    const secureMsg = document.createElement("p");
    secureMsg.textContent = "Secured by 256-bit encryption";
    secureMsg.classList.add("secure-checkout-msg");

    const secureMsgIcon = document.createElement("i");
    secureMsgIcon.classList.add("fas", "fa-lock");
    secureMsg.prepend(secureMsgIcon);


    summary.append(priceTotal, priceTax, priceShipping, priceGrandTotal, submitButton, secureMsg);
    return summary;
}