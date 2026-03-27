import { setOrders, getOrders, clearOrders } from "./storage.js";

export function saveOrder(order) {
    const orders = getOrders();
    orders.push(order);
    setOrders(orders);
}

export function getAllOrders() {
    return getOrders();
}

export function clearAllOrders() {
    clearOrders();
}