import { getProductById } from "../services/api.js";
import { getAllOrders, clearAllOrders } from "../services/orderService.js";
import { renderOrderCard } from "../components/orderCard.js";
import * as setStatus from "../utils/status.js";

let ordersContainer = document.getElementById("ordersContainer");
let status = document.getElementById("status");
let homeBtn = document.getElementById("returnToHome");

async function loadOrders() {
    try {
        ordersContainer.innerHTML = "";
        setStatus.showLoading(status, ordersContainer, "Loading your orders...");
        const orders = getAllOrders();
        if (orders.length === 0) return setStatus.showError(status, ordersContainer, "You have no orders yet.");
        console.log("Orders fetched:", orders);
        orders.forEach(order => {
            const orderCard = renderOrderCard(order);
            ordersContainer.append(orderCard);
        });
        setStatus.hideStatus(status);
    }
    catch (error) {
        console.error("Error loading orders:", error);
        setStatus.showError(status, ordersContainer, "Error loading orders.");
    }
}

homeBtn.addEventListener("click", () => {
    window.location.href = "index.html";
});

loadOrders();