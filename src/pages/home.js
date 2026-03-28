import { getProducts } from "../services/api.js";
import { productCard } from "../components/productCard.js";
import { addToCart } from "../services/cartService.js";
import * as setStatus from "../utils/status.js";

let productsGrid = document.getElementById("productsGrid");
let status = document.getElementById("status");
let showCartBtn = document.getElementById("showCartBtn");

async function initHome() {
    try {
        if (!productsGrid || !status) return;
        productsGrid.innerHTML = "";
        setStatus.showLoading(status, productsGrid, "Loading products...");
        const { products } = await getProducts(15, 0);
        if (products.length === 0) return setStatus.showError(status, productsGrid, "No products found.");
        products.forEach(product => {
            const card = productCard(product);
            productsGrid.append(card);
        });
        setStatus.hideStatus(status);
    } catch (error) {
        console.error("Error initializing home page:", error);
        setStatus.showError(status, productsGrid, "Failed to load products. Please try again.");
    }
}

productsGrid.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-btn")) {
        const productId = e.target.getAttribute("href").split("id=")[1];
        window.location.href = `product.html?id=${productId}`;
    }
    if (e.target.classList.contains("cart-btn")) {
        const productId = e.target.dataset.id;
        addToCart(productId, 1);
        console.log("Product added to cart!");
    }
});

showCartBtn.addEventListener("click", () => {
    window.location.href = "cart.html";
});


initHome();