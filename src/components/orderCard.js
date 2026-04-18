export function renderOrdersCard(order) {
    const card = document.createElement("div");
    card.classList.add("card", "order-card");
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

export function renderOrderInfo(order) {
    const { id, date, customerData } = order;

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("customer-info");
    infoContainer.dataset.id = id;

    const orderId = document.createElement("p");
    orderId.classList.add("order-id");
    orderId.textContent = `Order ID: ${id}`;

    const orderDate = document.createElement("p");
    orderDate.classList.add("order-date");
    const dateObj = new Date(date);
    orderDate.textContent = `Date: ${dateObj.toLocaleDateString("en-US")}`;

    const customerName = document.createElement("p");
    customerName.classList.add("customer-name");
    customerName.textContent = `Customer: ${customerData.name}`;

    const customerEmail = document.createElement("p");
    customerEmail.classList.add("customer-email");
    customerEmail.textContent = `Email: ${customerData.email}`;

    infoContainer.append(orderId, orderDate, customerName, customerEmail);
    return infoContainer;
}

export function renderOrderItems(product, qty) {
    const { id, thumbnail, title, price } = product;

    const card = document.createElement("div");
    card.classList.add("card", "order-product");
    card.dataset.id = id;

    const productImg = document.createElement("img");
    productImg.src = thumbnail;
    productImg.alt = title;
    productImg.classList.add("product-img");

    const productTitle = document.createElement("p");
    productTitle.textContent = title;
    productTitle.classList.add("product-title");

    const productPrice = document.createElement("span");
    productPrice.textContent = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);
    productPrice.classList.add("product-price");

    const productQty = document.createElement("p");
    productQty.textContent = `Quantity: ${qty}`;
    productQty.classList.add("product-qty");

    card.append(productImg, productTitle, productPrice, productQty);
    return card;
}

export function renderOrderSummary(order) {
    const { shipping, totals } = order;

    const summaryContainer = document.createElement("div");
    summaryContainer.classList.add("order-summary");

    const shippingCost = document.createElement("p");
    shippingCost.classList.add("shipping-cost");
    shippingCost.textContent = `Shipping: ${shipping.type} x ${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(shipping.cost)}`;

    const itemsTotal = document.createElement("p");
    itemsTotal.classList.add("items-total");
    itemsTotal.textContent = `Items Total: ${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(totals.itemsTotal)}`;

    const grandTotal = document.createElement("p");
    grandTotal.classList.add("grand-total");
    grandTotal.textContent = `Grand Total: ${new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(totals.grandTotal)}`;

    summaryContainer.append(shippingCost, itemsTotal, grandTotal);
    return summaryContainer;
}