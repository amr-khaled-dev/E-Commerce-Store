# E-Commerce Store

A professional e-commerce web application with modern design and functionality.

## Project Structure

```
├── index.html                 # Home page
├── product.html              # Product details page
├── cart.html                 # Shopping cart page
├── checkout.html             # Checkout page
├── orders.html               # Orders history page
│
├── css/
│   ├── styles.css           # Main stylesheet
│   ├── normalize.css        # CSS reset
│   └── all.min.css          # Font Awesome icons
│
├── images/                   # Image assets
│
├── webfonts/                 # Font files
│
├── data/
│   └── mock-products.json   # Sample product data
│
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── cartItem.js
│   │   ├── cartSummary.js
│   │   ├── checkoutItem.js
│   │   ├── checkoutSummary.js
│   │   ├── header.js
│   │   └── productCard.js
│   │
│   ├── pages/                # Page-specific logic
│   │   ├── cart.js
│   │   ├── checkout.js
│   │   ├── home.js
│   │   ├── orders.js
│   │   └── product.js
│   │
│   ├── services/             # Business logic & API services
│   │   ├── api.js
│   │   ├── cartServices.js
│   │   ├── orderService.js
│   │   └── storage.js
│   │
│   └── utils/                # Utility functions
│       ├── dom.js
│       ├── format.js
│       ├── status.js
│       └── validators.js
│
└── README.md                 # This file
```

## Key Features

- **Product Browsing**: Browse and view product details
- **Shopping Cart**: Add/remove items and manage quantities
- **Checkout**: Secure checkout process
- **Order Management**: View order history and status
- **Responsive Design**: Works on desktop and mobile devices

## Technologies Used

- HTML5
- CSS3 (with Font Awesome icons)
- Vanilla JavaScript (ES6+)
- Local Storage for persistence

## Getting Started

1. Open `index.html` in a web browser
2. Browse products on the home page
3. Add items to your cart
4. Proceed to checkout
5. View your orders in the orders page

## File Organization Notes

- **Components** (`src/components/`): Reusable UI elements used across multiple pages
- **Pages** (`src/pages/`): Page-specific initialization and logic
- **Services** (`src/services/`): Data management, API calls, and business logic
- **Utils** (`src/utils/`): Helper functions for common tasks
