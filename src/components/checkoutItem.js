export function checkoutItem(product, qty) {
    const { id, thumbnail, title, price } = product;

    const card = document.createElement("div");
    card.classList.add("product-card");
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

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.dataset.id = id;
    removeBtn.classList.add("remove-btn");

    card.append(productImg, productTitle, productPrice, productQty, removeBtn);
    return card;
}
