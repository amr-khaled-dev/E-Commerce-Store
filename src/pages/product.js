import { getProductById } from "../services/api.js";
import { productCardDetails } from "../components/productCard.js";
import { addToCart } from "../services/cartService.js";
import * as setStatus from "../utils/status.js";

let productDetails = document.getElementById("productDetails");
let status = document.getElementById("status");
const id = new URLSearchParams(window.location.search).get("id");

async function renderProductDetails() {
    try {
        if (!productDetails || !status) return;
        productDetails.innerHTML = "";
        setStatus.showLoading(status, productDetails, "Loading product details...");
        if (!id) return setStatus.showError(status, productDetails, "Product ID is missing.");
        const product = await getProductById(id);
        if (product === null) return setStatus.showError(status, productDetails, "Failed to load product details.");
        const card = productCardDetails(product);
        productDetails.append(card);
        setStatus.hideStatus(status);
    } catch (error) {
        console.error("Error getting product details:", error);
        setStatus.showError(status, productDetails, "Failed to load product details. Please try again.");
    }
}

productDetails.addEventListener("click", (e) => {
    if (e.target.classList.contains("cart-btn")) {
        const productId = e.target.dataset.id;
        addToCart(productId, 1);
        console.log("Product added to cart!");
    }
})

renderProductDetails();