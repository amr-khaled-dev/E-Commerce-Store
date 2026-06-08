import { renderHeader } from "../components/header.js";
import { getProducts } from "../services/api.js";
import { productCard } from "../components/productCard.js";
import { addToCart } from "../services/cartService.js";
import * as setStatus from "../utils/status.js";

let productsGrid = document.getElementById("productsGrid");
let status = document.getElementById("status");

// document.body.insertAdjacentHTML("afterbegin", renderHeader());
document.body.prepend(renderHeader());

async function initHome() {
    try {
        if (!productsGrid || !status) return;
        productsGrid.innerHTML = "";
        setStatus.showLoading(status, productsGrid, "Loading products...");
        const { products } = await getProducts(24, 0);
        if (products.length === 0) {
            return setStatus.showError(status, {
                title: "Something went wrong",
                description: `
                Looks like something went wrong,
                please check your internet connection and try again.
                `,
                buttonText: "Refresh",
                buttonLink: "index.html"
            });
        }
        products.forEach(product => {
            const card = productCard(product);
            productsGrid.append(card);
        });
        setStatus.hideStatus(status);
    } catch (error) {
        console.error("Error initializing home page:", error);
        setStatus.showError(status);
    }
}

productsGrid.addEventListener("click", (e) => {
    if (e.target.classList.contains("cart-btn")) {
        const productId = e.target.dataset.id;
        addToCart(productId, 1);
        console.log("Product added to cart!");
    }
});


initHome();