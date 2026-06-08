import { getCartCount } from "../services/cartService.js";

export function renderHeader() {
    // Create header container
    const header = document.createElement('header');
    header.className = 'main-header';

    const container = document.createElement("div");
    container.className = "container header-content";

    // Logo section
    const logoDiv = document.createElement('div');
    logoDiv.className = 'logo';
    const logoLink = document.createElement('a');
    logoLink.href = 'index.html';
    logoLink.textContent = 'My Store';
    logoDiv.appendChild(logoLink);

    // Navigation section
    const nav = document.createElement('nav');
    nav.className = 'nav';

    const homeLink = document.createElement('a');
    homeLink.href = 'index.html';
    homeLink.textContent = 'Home';
    const pageHome = window.location.pathname.split('/').pop();
    if (pageHome === 'index.html' || pageHome === 'index') {
        homeLink.classList.add('active');
    }

    const shopLink = document.createElement('a');
    shopLink.href = 'shop.html';
    shopLink.textContent = 'Shop';
    const pageShop = window.location.pathname.split('/').pop();
    if (pageShop === 'shop.html' || pageShop === 'shop') {
        shopLink.classList.add('active');
    }

    const ordersLink = document.createElement('a');
    ordersLink.href = 'orders.html';
    ordersLink.textContent = 'Orders';
    const pageOrders = window.location.pathname.split('/').pop();
    if (pageOrders === 'orders.html' || pageOrders === 'orders') {
        ordersLink.classList.add('active');
    }

    nav.append(homeLink, shopLink, ordersLink);

    // Cart icon section
    const cartDiv = document.createElement('div');
    cartDiv.className = 'cart-icon';
    const cartLink = document.createElement('a');
    cartLink.href = 'cart.html';

    const cartIcon = document.createElement('i');
    cartIcon.className = 'fas fa-shopping-cart';

    const cartCount = document.createElement('span');
    cartCount.id = 'cartCount';

    function updateCartCount() {
        cartCount.textContent = getCartCount();
    }
    updateCartCount();
    document.addEventListener("cartUpdated", updateCartCount);

    cartLink.append(cartIcon, cartCount);
    cartDiv.appendChild(cartLink);

    // Append all sections to header
    container.append(logoDiv, nav, cartDiv);
    header.append(container);

    return header;
}