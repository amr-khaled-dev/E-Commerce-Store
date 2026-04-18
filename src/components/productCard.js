export function productCard(product) {
    const { id, category, thumbnail, title, price } = product;

    const card = document.createElement("div");
    card.classList.add("card", "product-card");
    card.dataset.id = id;


    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const productImg = document.createElement("img");
    productImg.src = thumbnail;
    productImg.alt = title;
    productImg.classList.add("product-img");
    imgContainer.appendChild(productImg);

    const mainContent = document.createElement("div");
    mainContent.classList.add("main-content");

    const productCategory = document.createElement("span");
    productCategory.textContent = category;
    productCategory.classList.add("product-category");

    const productTitle = document.createElement("p");
    productTitle.textContent = title;
    productTitle.classList.add("product-title");

    const productPrice = document.createElement("span");
    productPrice.textContent = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);
    productPrice.classList.add("product-price");

    mainContent.append(productCategory, productTitle, productPrice);

    const cartBtnContainer = document.createElement("div");
    cartBtnContainer.classList.add("cart-btn-container");

    const cartBtn = document.createElement("button");
    cartBtn.textContent = "Add to Cart";
    cartBtn.dataset.id = id;
    cartBtn.classList.add("cart-btn");
    cartBtnContainer.appendChild(cartBtn);

    card.addEventListener("click", (e) => {
        if (!e.target.classList.contains("cart-btn")) {
            window.location.href = `product.html?id=${id}`;
        }
    });

    card.append(imgContainer, mainContent, cartBtnContainer);
    return card;
}

export function productCardDetails(product) {
    const { id, brand, category, description, price, rating, thumbnail, title } = product;

    const card = document.createElement("div");
    card.classList.add("card", "product-details");
    card.dataset.id = id;

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const productImg = document.createElement("img");
    productImg.src = thumbnail;
    productImg.alt = title;
    productImg.classList.add("product-img");
    imgContainer.appendChild(productImg);


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

    card.append(imgContainer, productTitle, productDescription, productBrand, productCategory, productRating, productPrice, cartBtn);
    return card;
}