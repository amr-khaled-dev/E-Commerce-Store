import { renderHeader } from "../components/header.js";
import { getProductById } from "../services/api.js";
import { getAllOrders, clearAllOrders } from "../services/orderService.js";
import { renderOrdersCard, renderOrderInfo, renderOrderItems, renderOrderSummary } from "../components/orderCard.js";
import * as setStatus from "../utils/status.js";

let ordersContainer = document.getElementById("ordersContainer");
let status = document.getElementById("status");
let homeBtn = document.getElementById("returnToHome");
let detailsDialog = document.getElementById("detailsDialog");
let closeDialogBtn = document.getElementById("closeDialogBtn");
let customerInfo = document.getElementById("customerInfo");
let itemsDetails = document.getElementById("itemsDetails");
let orderSummaryContainer = document.getElementById("orderSummary");
let orderId = null;
let orders = [];

document.body.prepend(renderHeader());

function loadOrders() {
    try {
        ordersContainer.innerHTML = "";
        setStatus.showLoading(status, ordersContainer, "Loading your orders...");
        orders = getAllOrders();
        if (orders.length === 0) return setStatus.showError(status, ordersContainer, "You have no orders yet.");
        orders.forEach(order => {
            const orderCard = renderOrdersCard(order);
            ordersContainer.append(orderCard);
        });
        setStatus.hideStatus(status);
    }
    catch (error) {
        console.error("Error loading orders:", error);
        setStatus.showError(status, ordersContainer, "Error loading orders.");
    }
}

async function loadOrderDetails(orderId) {
    try {
        customerInfo.innerHTML = "";
        itemsDetails.innerHTML = "";
        orderSummary.innerHTML = "";
        const order = orders.find(o => o.id === orderId);
        if (!order) return setStatus.showError(status, detailsDialog, "Order not found.");
        const customerInfoContent = renderOrderInfo(order);
        customerInfo.append(customerInfoContent);
        const orderItemsPromises = order.items.map(item => getProductById(item.id));
        const orderItems = await Promise.all(orderItemsPromises);
        for (let i = 0; i < orderItems.length; i++) {
            const itemElement = renderOrderItems(orderItems[i], order.items[i].qty);
            itemsDetails.append(itemElement);
        }
        const orderSummaryContent = renderOrderSummary(order);
        orderSummaryContainer.append(orderSummaryContent);
        setStatus.hideStatus(status);
    } catch (error) {
        console.error("Error loading order details:", error);
        setStatus.showError(status, detailsDialog, "Error loading order details.");
    }
}

homeBtn.addEventListener("click", () => {
    window.location.href = "index.html";
});

ordersContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-details-btn")) {
        detailsDialog.showModal();
        orderId = e.target.dataset.id;
        loadOrderDetails(orderId);
    }
});

closeDialogBtn.addEventListener("click", () => {
    detailsDialog.close();
    orderId = null;
});

loadOrders();