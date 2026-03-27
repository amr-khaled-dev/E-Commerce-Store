import { getProductById } from "../services/api.js";
import { getAllOrders, clearAllOrders } from "../services/orderService.js";
import * as setStatus from "../utils/status.js";

let homeBtn = document.getElementById("returnToHome");


homeBtn.addEventListener("click", () => {
    window.location.href = "index.html";
});