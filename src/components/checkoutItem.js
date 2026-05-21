export function checkoutItem(product, qty) {
    const { id, thumbnail, title, price } = product;

    const card = document.createElement("div");
    card.classList.add("card", "checkout-product");
    card.dataset.id = id;

    const productImg = document.createElement("img");
    productImg.src = thumbnail;
    productImg.alt = title;
    productImg.classList.add("product-img");

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productTitle = document.createElement("p");
    productTitle.textContent = title;
    productTitle.classList.add("product-title");

    const productQty = document.createElement("p");
    productQty.textContent = `Qty: ${qty}`;
    productQty.classList.add("product-qty");

    productInfo.append(productTitle, productQty);

    const productPrice = document.createElement("span");
    productPrice.textContent = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);
    productPrice.classList.add("product-price");

    card.append(productImg, productInfo, productPrice);
    return card;
}
