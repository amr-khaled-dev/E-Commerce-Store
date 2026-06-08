export function renderCategories(state) {
    const categoriesBox = document.createElement("div");
    categoriesBox.classList.add("categories-box");

    const categoriesHeader = document.createElement("h3");
    categoriesHeader.textContent = "Categories";

    const categoriesList = document.createElement("ul");
    categoriesList.classList.add("categories-list");

    const allCategoriesItem = document.createElement("li");
    allCategoriesItem.textContent = "All";
    allCategoriesItem.dataset.category = "all";
    allCategoriesItem.classList.add("category-item", "active");
    categoriesList.append(allCategoriesItem);

    state.categories.forEach(category => {
        const categoryItem = document.createElement("li");
        categoryItem.textContent = category.name;
        categoryItem.dataset.category = category.slug;
        categoryItem.classList.add("category-item");
        if (state.filters.category === category.slug) {
            categoryItem.classList.add("active");
            allCategoriesItem.classList.remove("active");
        }
        categoriesList.append(categoryItem);
    });

    categoriesBox.append(categoriesHeader, categoriesList);
    return categoriesBox;
}

export function renderPagination(state) {
    const paginationNumbers = document.createElement("div");
    paginationNumbers.classList.add("pagination-numbers");
    paginationNumbers.id = "paginationNumbers";
    for (let i = 1; i <= state.totalPages; i++) {
        const pageBtn = document.createElement("button");
        pageBtn.classList.add("pagination-number");
        pageBtn.textContent = i;
        pageBtn.dataset.page = i;
        if (i === state.currentPage) {
            pageBtn.classList.add("active");
        }
        paginationNumbers.append(pageBtn);
    }
    return paginationNumbers;
}