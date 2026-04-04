import { setCart, getCart, clearCart } from "./storage.js";

export function getCartItems() {
    return getCart();
}

export function getCartCount() {
    const cart = getCart();
    return cart.length;
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
    document.dispatchEvent(new Event("cartUpdated"));
}

export function removeFromCart(productId) {
    productId = Number(productId);
    const cart = getCartItems();
    const filteredCart = cart.filter(item => item.id !== productId);
    setCart(filteredCart);
    document.dispatchEvent(new Event("cartUpdated"));
}

export function itemIncrement(productId) {
    productId = Number(productId);
    const cart = getCartItems();
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.qty += 1;
        setCart(cart);
    }
    document.dispatchEvent(new Event("cartUpdated"));
}

export function itemDecrement(productId) {
    productId = Number(productId);
    const cart = getCartItems();
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.qty = Math.max(1, existingItem.qty - 1);
        setCart(cart);
    }
    document.dispatchEvent(new Event("cartUpdated"));
}

export function clearCartItems() {
    clearCart();
    document.dispatchEvent(new Event("cartUpdated"));
}