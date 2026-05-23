export function renderOrdersCard(order) {
    const card = document.createElement("div");
    card.classList.add("card", "order-card");
    card.dataset.id = order.id;

    // Order Header
    const orderHeader = document.createElement("div");
    orderHeader.classList.add("order-header");

    const orderIdText = document.createElement("span");
    orderIdText.classList.add("order-id-text");
    orderIdText.textContent = "Order ID";

    const orderId = document.createElement("span");
    orderId.classList.add("order-id");
    orderId.textContent = order.id;

    const orderDate = document.createElement("span");
    orderDate.classList.add("order-date");
    const dateObj = new Date(order.date);
    orderDate.textContent = `${dateObj.toLocaleDateString("en-US")}`;

    const dateIcon = document.createElement("icon");
    dateIcon.classList.add("far", "fa-clock", "date-icon");
    orderDate.prepend(dateIcon);

    orderHeader.append(orderIdText, orderId, orderDate);

    // Order Items
    const itemsContainer = document.createElement("div");
    itemsContainer.classList.add("order-items");

    const itemsToShow = order.items.slice(0, 2);
    const remainingItems = order.items.length - 2;

    itemsToShow.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("order-item");
        if (item.qty > 1) {
            itemElement.setAttribute("quantity", item.qty);
        }
        const itemElementImg = document.createElement("img");
        itemElementImg.src = item.thumbnail;
        itemElementImg.alt = item.title;
        itemElementImg.classList.add("order-item-img");
        itemElement.append(itemElementImg);
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
    totalPrice.textContent = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(order.totals.grandTotal);

    const viewDetailsBtn = document.createElement("button");
    viewDetailsBtn.textContent = "View Details";
    viewDetailsBtn.classList.add("view-details-btn");
    viewDetailsBtn.dataset.id = order.id;

    orderSummary.append(totalPrice, viewDetailsBtn);

    card.append(orderHeader, itemsContainer, orderSummary);
    return card;
}

export function renderOrderInfo(order) {
    const { id, date, customerData } = order;

    const infoContainer = document.createElement("div");
    infoContainer.classList.add("customer-info");
    infoContainer.dataset.id = id;

    const orderId = document.createElement("p");
    orderId.classList.add("order-id");
    orderId.textContent = `Order ${id}`;

    const orderDate = document.createElement("p");
    orderDate.classList.add("order-date");
    const dateObj = new Date(date);
    orderDate.textContent = dateObj.toLocaleDateString("en-US");

    const orderDateIcon = document.createElement("icon");
    orderDateIcon.classList.add("far", "fa-clock", "date-icon");
    orderDate.prepend(orderDateIcon);

    const customerName = document.createElement("p");
    customerName.classList.add("customer-name");
    customerName.textContent = "Customer:";

    const customerNameText = document.createElement("span");
    customerNameText.classList.add("customer-name-text");
    customerNameText.textContent = customerData.name;
    customerName.append(customerNameText);

    const customerEmail = document.createElement("p");
    customerEmail.classList.add("customer-email");
    customerEmail.textContent = "Email:";

    const customerEmailText = document.createElement("span");
    customerEmailText.classList.add("customer-email-text");
    customerEmailText.textContent = customerData.email;
    customerEmail.append(customerEmailText);

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

    const grandTotal = document.createElement("p");
    grandTotal.classList.add("grand-total");
    grandTotal.textContent = "Order Total";

    const grandTotalCost = document.createElement("p")
    grandTotalCost.classList.add("grand-total-cost");
    grandTotalCost.textContent = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(totals.grandTotal);

    summaryContainer.append(grandTotal, grandTotalCost);
    return summaryContainer;
}