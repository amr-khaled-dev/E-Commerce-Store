const CART_KEY = "ec_cart_v1";
const ORDER_KEY = "ec_orders_v1";

export function setCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function getCart() {
    const cartData = localStorage.getItem(CART_KEY);
    try {
        return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
        console.error("Error parsing cart data:", error);
        return [];
    }
}

export function clearCart() {
    localStorage.removeItem(CART_KEY);
}

export function setOrders(orders) {
    localStorage.setItem(ORDER_KEY, JSON.stringify(orders));
}

export function getOrders() {
    const data = localStorage.getItem(ORDER_KEY);
    try {
        return data ? JSON.parse(data) : [];
    } catch (error) {
        console.error("Error parsing order data:", error);
        return [];
    }
}

export function clearOrders() {
    localStorage.removeItem(ORDER_KEY);
}