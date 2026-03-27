import { getProductById } from "../services/api.js";
import { getCartItems, clearCartItems, removeFromCart } from "../services/cartService.js";
import { saveOrder } from "../services/orderService.js";
import { checkoutItem } from "../components/checkoutItem.js";
import { checkoutSummary } from "../components/checkoutSummary.js";
import * as setStatus from "../utils/status.js";

let checkoutForm = document.getElementById("checkoutForm");
let checkoutItems = document.getElementById("checkoutItems");
let orderSummary = document.getElementById("orderSummary");
let status = document.getElementById("status");
const state = {
    cart: [],
    products: [],
    shipping: {
        type: "standard",
        cost: 10
    }
};

function renderCheckoutItems() {
    try {
        if (!checkoutItems || !status) return;
        checkoutItems.innerHTML = "";
        setStatus.showLoading(status, checkoutItems, "Loading order summary...");
        if (state.cart.length === 0) {
            checkoutForm.style.display = "none";
            return setStatus.showError(status, checkoutItems, "Your cart is empty.");
        }
        state.products.forEach((product, i) => {
            const cartItemElement = checkoutItem(product, state.cart[i].qty);
            checkoutItems.append(cartItemElement);
        });
        setStatus.hideStatus(status);
    } catch (error) {
        console.error("Error displaying cart items summary:", error);
        setStatus.showError(status, checkoutItems, "Error loading order items.");
    }
}

function renderCheckoutSummary() {
    try {
        if (!orderSummary || !status) return;
        orderSummary.innerHTML = "";
        setStatus.showLoading(status, orderSummary, "Loading order summary...");
        if (state.cart.length === 0) {
            checkoutForm.style.display = "none";
            return setStatus.showError(status, checkoutItems, "Your cart is empty.");
        }
        const products = state.products;
        const totalPrice = products.reduce((total, product, i) =>
            total + product.price * state.cart[i].qty
            , 0);
        const grandTotal = totalPrice + state.shipping.cost;
        const summary = checkoutSummary(totalPrice, state.shipping.cost, grandTotal);
        orderSummary.append(summary);
        setStatus.hideStatus(status);
    } catch (error) {
        console.error("Error displaying cart items summary:", error);
        setStatus.showError(status, orderSummary, "Error loading order summary.");
    }
}

checkoutItems.addEventListener("click", (e) => {
    let changed = false;
    if (e.target.classList.contains("remove-btn")) {
        const productId = e.target.dataset.id;
        removeFromCart(productId);
        console.log("Product removed from cart!");
        changed = true;
    }
    if (changed) {
        initCheckout();
    }
});

checkoutForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(checkoutForm);
    const customerData = {
        name: formData.get("name"),
        phone: formData.get("phone"),
        email: formData.get("email"),
        address: formData.get("address"),
        city: formData.get("city"),
    };

    const items = state.products.map((product, i) => {
        const qty = state.cart[i].qty;
        return {
            id: product.id,
            title: product.title,
            price: product.price,
            qty: qty,
            subtotal: product.price * qty
        }
    });

    const itemsTotal = items.reduce((total, item) => total + item.subtotal, 0);
    const shipping = {
        type: state.shipping.type,
        cost: state.shipping.cost
    };
    const grandTotal = itemsTotal + shipping.cost;

    const order = {
        id: `order_${Date.now()}`,
        date: new Date().toISOString(),
        customerData,
        items,
        shipping,
        totals: {
            itemsTotal,
            grandTotal
        }
    };

    saveOrder(order);

    setStatus.showSuccess(status, "Order placed successfully!");
    clearCartItems();
    setTimeout(() => {
        window.location.href = "orders.html";
    }, 4000);
});

checkoutForm.addEventListener("change", () => {
    const formData = new FormData(checkoutForm);
    const selectedOption = formData.get("shipping");
    state.shipping.type = selectedOption;
    state.shipping.cost = selectedOption === "express" ? 15 : 10;
    renderCheckoutSummary();
});

async function initCheckout() {
    state.cart = getCartItems();
    const productsPromises = state.cart.map(item => getProductById(item.id));
    state.products = await Promise.all(productsPromises);
    renderCheckoutItems();
    renderCheckoutSummary();
}

initCheckout();