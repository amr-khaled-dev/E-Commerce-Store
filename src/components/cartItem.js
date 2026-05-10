export function cartItem(product, qty) {
    const { id, thumbnail, title, price, brand } = product;

    const card = document.createElement("div");
    card.classList.add("card", "cart-product");
    card.dataset.id = id;

    const leftHalf = document.createElement("div");
    leftHalf.classList.add("left-half");

    const productImg = document.createElement("img");
    productImg.src = thumbnail;
    productImg.alt = title;
    productImg.classList.add("product-img");

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productTitle = document.createElement("p");
    productTitle.textContent = title;
    productTitle.classList.add("product-title");

    const productBrand = document.createElement("p");
    productBrand.textContent = brand;
    productBrand.classList.add("product-brand");

    const productPrice = document.createElement("span");
    productPrice.textContent = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);
    productPrice.classList.add("product-price");

    productInfo.append(productTitle, productBrand, productPrice);
    leftHalf.append(productImg, productInfo);

    const rightHalf = document.createElement("div");
    rightHalf.classList.add("right-half");

    const qtyControls = document.createElement("div");
    qtyControls.classList.add("qty-controls");

    const decQtyBtn = document.createElement("button");
    decQtyBtn.textContent = "-";
    decQtyBtn.dataset.id = id;
    decQtyBtn.classList.add("dec-qty");

    const incQtyBtn = document.createElement("button");
    incQtyBtn.textContent = "+";
    incQtyBtn.dataset.id = id;
    incQtyBtn.classList.add("inc-qty");

    const productQty = document.createElement("span");
    productQty.textContent = `${qty}`;
    productQty.classList.add("product-qty");

    qtyControls.append(decQtyBtn, productQty, incQtyBtn);

    const removeBtn = document.createElement("button");
    removeBtn.dataset.id = id;
    removeBtn.classList.add("remove-btn");

    const removeBtnIcon = document.createElement("i");
    removeBtnIcon.classList.add("fas", "fa-trash-alt");
    removeBtn.appendChild(removeBtnIcon);

    rightHalf.append(qtyControls, removeBtn);

    card.append(leftHalf, rightHalf);
    return card;
}
