const BASE_URL = "https://dummyjson.com"

export async function getProducts(limit = 12, skip = 0) {
    try {
        const res = await fetch(`${BASE_URL}/products?skip=${skip}&limit=${limit}`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return { products: [], total: 0, skip, limit };
    }
}

export async function getProductById(id) {
    try {
        const res = await fetch(`${BASE_URL}/products/${id}`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return null;
    }
}