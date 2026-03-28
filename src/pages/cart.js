import { getProductById } from "../services/api.js";
import { getCartItems, itemIncrement, itemDecrement, removeFromCart, clearCartItems } from "../services/cartService.js";
import { cartItem } from "../components/cartItem.js";
import { cartSummary } from "../components/cartSummary.js";
import * as setStatus from "../utils/status.js";

let cartItems = document.getElementById("cartItems");
let summaryBox = document.getElementById("summaryBox");
let status = document.getElementById("status");

async function renderCartItems() {
    try {
        if (!cartItems || !summaryBox || !status) return;
        cartItems.innerHTML = "";
        summaryBox.innerHTML = "";
        setStatus.showLoading(status, cartItems, "Loading cart items...");
        const cart = getCartItems();
        if (cart.length === 0) return setStatus.showError(status, cartItems, "Your cart is empty.");
        const productsPromises = cart.map(item => getProductById(item.id));
        const products = await Promise.all(productsPromises);
        for (let i = 0; i < products.length; i++) {
            const cartItemElement = cartItem(products[i], cart[i].qty);
            cartItems.append(cartItemElement);
        }
        const totalPrice = products.reduce((total, product, index) => {
            return total + product.price * cart[index].qty;
        }, 0);
        const summaryElement = cartSummary(totalPrice);
        summaryBox.append(summaryElement);
        setStatus.hideStatus(status);
    } catch (error) {
        console.error("Error getting cart items", error);
        setStatus.showError(status, cartItems, "Error loading cart items.");
    }
}

cartItems.addEventListener("click", (e) => {
    let changed = false;
    if (e.target.classList.contains("inc-qty")) {
        const productId = e.target.dataset.id;
        itemIncrement(productId);
        console.log("Product quantity increased!");
        changed = true;
    }
    if (e.target.classList.contains("dec-qty")) {
        const productId = e.target.dataset.id;
        itemDecrement(productId);
        console.log("Product quantity decreased!");
        changed = true;
    }
    if (e.target.classList.contains("remove-btn")) {
        const productId = e.target.dataset.id;
        removeFromCart(productId);
        console.log("Product removed from cart!");
        changed = true;
    }
    if (changed) renderCartItems();
});

summaryBox.addEventListener("click", (e) => {
    if (e.target.classList.contains("clear-cart-btn")) {
        clearCartItems();
        console.log("Cart cleared!");
        renderCartItems();
    }
    if (e.target.classList.contains("checkout-btn")) {
        window.location.href = "checkout.html";
    }
    if (e.target.classList.contains("continue-shopping-btn")) {
        window.location.href = "index.html";
    }
});

renderCartItems();