export function productCard(product) {
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

    const viewBtn = document.createElement("button");
    viewBtn.setAttribute("href", `product.html?id=${id}`);
    viewBtn.textContent = "View";
    viewBtn.classList.add("view-btn");

    const cartBtn = document.createElement("button");
    cartBtn.textContent = "Add to Cart";
    cartBtn.dataset.id = id;
    cartBtn.classList.add("cart-btn");

    card.append(productImg, productTitle, productPrice, viewBtn, cartBtn);
    return card;
}

export function productCardDetails(product) {
    const { id, brand, category, description, price, rating, thumbnail, title } = product;

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

    const productDescription = document.createElement("p");
    productDescription.textContent = description;
    productDescription.classList.add("product-description");

    const productBrand = document.createElement("span");
    productBrand.textContent = `Brand: ${brand}`;
    productBrand.classList.add("product-brand");

    const productCategory = document.createElement("span");
    productCategory.textContent = `Category: ${category}`;
    productCategory.classList.add("product-category");

    const productRating = document.createElement("span");
    productRating.textContent = `Rating: ${rating}`;
    productRating.classList.add("product-rating");

    const productPrice = document.createElement("span");
    productPrice.textContent = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);
    productPrice.classList.add("product-price");

    const cartBtn = document.createElement("button");
    cartBtn.textContent = "Add to Cart";
    cartBtn.dataset.id = id;
    cartBtn.classList.add("cart-btn");

    card.append(productImg, productTitle, productDescription, productBrand, productCategory, productRating, productPrice, cartBtn);
    return card;
}