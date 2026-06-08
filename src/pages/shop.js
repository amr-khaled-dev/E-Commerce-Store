import { renderHeader } from "../components/header.js";
import { getProducts, getCategories } from "../services/api.js";
import { renderCategories, renderPagination } from "../components/shopItem.js";
import { productCard } from "../components/productCard.js";
import { addToCart } from "../services/cartService.js";
import * as setStatus from "../utils/status.js";

let productsGrid = document.getElementById("productsGrid");
let categoriesContainer = document.getElementById("categoriesContainer");
let searchInput = document.getElementById("searchInput");
let paginationContainer = document.getElementById("paginationContainer")
let prevPageBtn = document.getElementById("prevPageBtn");
let nextPageBtn = document.getElementById("nextPageBtn");
let status = document.getElementById("status");
let state = {
    products: [],
    filteredProducts: [],
    categories: [],
    filters: {
        category: "all",
        priceRange: null,
        searchQuery: "",
    },
    productsPerPage: 12,
    currentPage: 1,
    totalPages: 0
}
let productsToShow = [];

document.body.prepend(renderHeader());

function applyFilters() {
    let result = state.products;
    const { category, priceRange, searchQuery } = state.filters;
    if (category !== "all") {
        result = result.filter(product => product.category === category);
    }
    if (priceRange) {
        result = result.filter(product => product.price >= priceRange.min && product.price <= priceRange.max);
    }
    if (searchQuery) {
        result = result.filter(product => product.title?.toLowerCase().includes(searchQuery) ||
            product.brand?.toLowerCase().includes(searchQuery));
    }
    state.filteredProducts = result;
    state.currentPage = 1;  // Reset to first page when filters change
    state.totalPages = Math.ceil(state.filteredProducts.length / state.productsPerPage);
    initShop();
}

function initShop() {
    try {
        if (!productsGrid || !status) return;
        productsGrid.innerHTML = "";
        categoriesContainer.innerHTML = "";
        // paginationContainer.innerHTML = "";
        searchInput.style.display = "";
        categoriesContainer.style.display = "";
        paginationContainer.style.display = "";
        setStatus.showLoading(status, productsGrid, "Loading products...");
        productsToShow = state.filteredProducts.slice((state.currentPage - 1) * state.productsPerPage, state.currentPage * state.productsPerPage);
        const products = productsToShow;
        if (products.length === 0 && state.filters.searchQuery) {
            categoriesContainer.style.display = "none";
            paginationContainer.style.display = "none";
            return setStatus.showEmptyState(status, {
                title: "No products found",
                description: `
                We couldn't find any products matching your search query.
                Please try adjusting your search or check back later.
                `,
                buttonText: "Refresh",
                buttonLink: "shop.html"
            });
        }
        products.forEach(product => {
            const card = productCard(product);
            productsGrid.append(card);
        });
        setStatus.hideStatus(status);
        const categoryNames = renderCategories(state);
        categoriesContainer.append(categoryNames);
        const paginationAllNumbers = renderPagination(state);
        if (!paginationContainer.querySelector("#paginationNumbers")) {
            paginationContainer.insertBefore(paginationAllNumbers, paginationContainer.querySelector("#nextPageBtn"));
        } else {
            paginationContainer.replaceChild(paginationAllNumbers, paginationContainer.querySelector("#paginationNumbers"));
        }
        paginationContainer.insertBefore(paginationAllNumbers, paginationContainer.querySelector("#nextPageBtn"));
        updatePaginationButtons();
    } catch (error) {
        console.error("Error initializing shop page:", error);
        setStatus.showError(status);
    }
}

function updatePaginationButtons() {
    prevPageBtn.disabled = state.currentPage === 1;
    nextPageBtn.disabled = state.currentPage === state.totalPages;
}

productsGrid.addEventListener("click", (e) => {
    if (e.target.classList.contains("cart-btn")) {
        const productId = e.target.dataset.id;
        addToCart(productId, 1);
    }
});

categoriesContainer.addEventListener("click", (e) => {
    if (e.target.dataset.category) {
        state.filters.category = e.target.dataset.category;
        categoriesContainer.querySelectorAll(".category-item").forEach(item => {
            item.classList.remove("active");
        });
        e.target.classList.add("active");
        applyFilters();
    }
});

paginationContainer.addEventListener("click", (e) => {
    if (e.target.dataset.page) {
        state.currentPage = Number(e.target.dataset.page);
        initShop();
        updatePaginationButtons();
    }
    if (e.target.id === "prevPageBtn" && state.currentPage > 1) {
        state.currentPage--;
        initShop();
        updatePaginationButtons();
    }
    if (e.target.id === "nextPageBtn" && state.currentPage < state.totalPages) {
        state.currentPage++;
        initShop();
        updatePaginationButtons();
    }
});

searchInput.addEventListener("input", (e) => {
    state.filters.searchQuery = e.target.value.trim().toLowerCase();
    applyFilters();
});

async function initPage() {
    try {
        state.products = (await getProducts(0, 0)).products;
        state.categories = await getCategories();
        applyFilters();
        updatePaginationButtons();
        console.log("Shop page initialized with state:", state);
    } catch (error) {
        console.error("Error initializing shop page:", error);
        searchInput.style.display = "none";
        categoriesContainer.style.display = "none";
        paginationContainer.style.display = "none";
        setStatus.showError(status, {
            title: "Something went wrong",
            description: `
                Looks like something went wrong,
                please check your internet connection and try again.
                `,
            buttonText: "Return Home",
            buttonLink: "index.html"
        });
    }
}

initPage();