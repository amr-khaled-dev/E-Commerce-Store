import { setCart, getCart, clearCart } from "./storage.js";

export function getCartItems() {
    return getCart();
}

export function addToCart(productId, qty = 1) {
    productId = Number(productId);
    qty = Math.max(1, qty);
    const cart = getCartItems();
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.qty += qty;
    } else {
        cart.push({ id: productId, qty });
    }
    setCart(cart);
}

export function removeFromCart(productId) {
    productId = Number(productId);
    const cart = getCartItems();
    const filteredCart = cart.filter(item => item.id !== productId);
    setCart(filteredCart);
}

export function itemIncrement(productId) {
    productId = Number(productId);
    const cart = getCartItems();
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.qty += 1;
        setCart(cart);
    }
}

export function itemDecrement(productId) {
    productId = Number(productId);
    const cart = getCartItems();
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.qty = Math.max(1, existingItem.qty - 1);
        setCart(cart);
    }
}

export function clearCartItems() {
    clearCart();
}