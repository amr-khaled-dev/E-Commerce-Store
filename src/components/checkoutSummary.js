export function checkoutSummary(totalPrice, shippingCost, grandTotal) {
    const summary = document.createElement("div");
    summary.classList.add("checkout-summary");

    const totalPriceP = document.createElement("p");
    totalPriceP.textContent = `Total: ${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(totalPrice)}`;
    totalPriceP.classList.add("total-price");

    const shippingCostP = document.createElement("p");
    shippingCostP.textContent = `Shipping: ${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(shippingCost)}`;
    shippingCostP.classList.add("shipping-cost");

    const grandTotalP = document.createElement("p");
    grandTotalP.textContent = `Grand Total: ${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(grandTotal)}`;
    grandTotalP.classList.add("grand-total");

    summary.append(totalPriceP, shippingCostP, grandTotalP);
    return summary;
}