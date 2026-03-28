export function renderOrderCard(order) {
    const card = document.createElement("div");
    card.classList.add("order-card");
    card.dataset.id = order.id;

    // Order Header
    const orderHeader = document.createElement("div");
    orderHeader.classList.add("order-header");

    const orderId = document.createElement("span");
    orderId.classList.add("order-id");
    orderId.textContent = `Order ID: ${order.id}`;

    const orderDate = document.createElement("span");
    orderDate.classList.add("order-date");
    const dateObj = new Date(order.date);
    orderDate.textContent = `Date: ${dateObj.toLocaleDateString("en-US")}`;

    orderHeader.append(orderId, orderDate);

    // Order Items
    const itemsContainer = document.createElement("div");
    itemsContainer.classList.add("order-items");

    const itemsToShow = order.items.slice(0, 2);
    const remainingItems = order.items.length - 2;

    itemsToShow.forEach((item) => {
        const itemElement = document.createElement("p");
        itemElement.classList.add("order-item");
        itemElement.textContent = `${item.title} x ${item.qty}`;
        itemsContainer.append(itemElement);
    });

    if (remainingItems > 0) {
        const moreItems = document.createElement("p");
        moreItems.classList.add("more-items");
        moreItems.textContent = `+ ${remainingItems} more item${remainingItems > 1 ? "s" : ""}`;
        itemsContainer.append(moreItems);
    }

    // Order Summary
    const orderSummary = document.createElement("div");
    orderSummary.classList.add("order-summary");

    const totalPrice = document.createElement("span");
    totalPrice.classList.add("order-total");
    totalPrice.textContent = `Total: ${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(order.totals.grandTotal)}`;

    orderSummary.append(totalPrice);

    // View Details Button
    const viewDetailsBtn = document.createElement("button");
    viewDetailsBtn.textContent = "View Details";
    viewDetailsBtn.classList.add("view-details-btn");
    viewDetailsBtn.dataset.id = order.id;

    card.append(orderHeader, itemsContainer, orderSummary, viewDetailsBtn);
    return card;
}
