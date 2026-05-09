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
    const { id, brand, category, description, price, rating, images, title, reviews, discountPercentage, warrantyInformation } = product;

    const card = document.createElement("div");
    card.classList.add("card", "product-details");
    card.dataset.id = id;

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    for (const imgSrc of images) {
        const productImg = document.createElement("img");
        productImg.src = imgSrc;
        productImg.alt = title;
        productImg.classList.add("product-img");
        imgContainer.appendChild(productImg);
    }

    const detailsContainer = document.createElement("div");
    detailsContainer.classList.add("details-container");

    const catRatingContainer = document.createElement("div");
    catRatingContainer.classList.add("cat-rating-container");

    const productCategory = document.createElement("span");
    productCategory.textContent = `${category}`;
    productCategory.classList.add("product-category");

    const productRating = document.createElement("span");
    productRating.textContent = `(${reviews.length})`;
    productRating.style.setProperty("--rating-percent", (rating / 5) * 100);
    productRating.classList.add("product-rating");

    catRatingContainer.append(productCategory, productRating);

    const productTitle = document.createElement("p");
    productTitle.textContent = title;
    productTitle.classList.add("product-title");

    const priceContainer = document.createElement("div");
    priceContainer.classList.add("price-container");

    const productPrice = document.createElement("span");
    productPrice.textContent = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);
    productPrice.classList.add("product-price");

    const productOldPrice = document.createElement("span");
    const oldPrice = price / (1 - discountPercentage / 100);
    productOldPrice.textContent = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(oldPrice);
    productOldPrice.classList.add("product-old-price");

    const productDiscount = document.createElement("span");
    productDiscount.classList.add("product-discount");
    productDiscount.textContent = `${discountPercentage}% OFF`;

    priceContainer.append(productPrice, productOldPrice, productDiscount);

    const productDescription = document.createElement("p");
    productDescription.textContent = description;
    productDescription.classList.add("product-description");

    const productBrand = document.createElement("p");
    productBrand.textContent = "Brand:";
    productBrand.classList.add("product-brand");

    const brandName = document.createElement("span");
    brandName.textContent = brand;
    brandName.classList.add("brand-name");
    productBrand.appendChild(brandName);

    const cartBtn = document.createElement("button");
    cartBtn.textContent = "Add to Cart";
    cartBtn.dataset.id = id;
    cartBtn.classList.add("cart-btn");

    const wishlistBtn = document.createElement("button");
    wishlistBtn.textContent = "Save to Wishlist";
    wishlistBtn.dataset.id = id;
    wishlistBtn.classList.add("wishlist-btn");


    const factsContainer = document.createElement("div");
    factsContainer.classList.add("facts-container");

    const factsItem1 = document.createElement("div");
    factsItem1.classList.add("facts-item");

    const fact1Icon = document.createElement("i");
    fact1Icon.classList.add("fa-solid", "fa-truck-fast");

    const fact1Info = document.createElement("div");
    fact1Info.classList.add("info");

    const fact1Title = document.createElement("h4");
    fact1Title.textContent = "Free Shipping";

    const fact1Desc = document.createElement("p");
    fact1Desc.textContent = "On orders over $100";

    factsItem1.append(fact1Icon, fact1Info);
    fact1Info.append(fact1Title, fact1Desc);


    const factsItem2 = document.createElement("div");
    factsItem2.classList.add("facts-item");

    const fact2Icon = document.createElement("i");
    fact2Icon.classList.add("fa-solid", "fa-shield-halved");

    const fact2Info = document.createElement("div");
    fact2Info.classList.add("info");

    const fact2Title = document.createElement("h4");
    fact2Title.textContent = warrantyInformation;

    const fact2Desc = document.createElement("p");
    fact2Desc.textContent = "Full coverage included";

    factsItem2.append(fact2Icon, fact2Info);
    fact2Info.append(fact2Title, fact2Desc);

    factsContainer.append(factsItem1, factsItem2);

    detailsContainer.append(catRatingContainer, productTitle, priceContainer, productDescription, productBrand, cartBtn, wishlistBtn, factsContainer);

    card.append(imgContainer, detailsContainer);
    return card;
}