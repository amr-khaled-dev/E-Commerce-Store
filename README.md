# E-Commerce Store

A professional e-commerce web application with modern design and functionality.

**Current Version**: 2.0.0

## Project Structure

```
├── index.html                 # Home page
├── product.html              # Product details page
├── cart.html                 # Shopping cart page
├── checkout.html             # Checkout page
├── orders.html               # Orders history page
│
├── assets/
│   └── images/               # Image assets
│
├── css/
│   ├── all.min.css          # Font Awesome icons
│   ├── normalize.css        # CSS reset
│   ├── styles.css           # Main stylesheet
│   │
│   ├── base/
│   │   ├── global.css       # Global styles
│   │   ├── reset.css        # Additional reset styles
│   │   └── variables.css    # CSS custom properties
│   │
│   ├── components/
│   │   └── productCard.css  # Product card component styles
│   │
│   ├── layout/
│   │   ├── footer.css       # Footer layout styles
│   │   ├── grid.css         # Grid system styles
│   │   ├── header.css       # Header layout styles
│   │   └── main.css         # Main content layout styles
│   │
│   ├── pages/
│   │   ├── cart.css         # Cart page styles
│   │   ├── checkout.css     # Checkout page styles
│   │   ├── home.css         # Home page styles
│   │   ├── orders.css       # Orders page styles
│   │   └── product.css      # Product page styles
│   │
│   └── utils/
│       └── scrollbar.css    # Custom scrollbar styles
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
│   │   ├── orderCard.js
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
│   │   ├── cartService.js
│   │   ├── orderService.js
│   │   └── storage.js
│   │
│   └── utils/                # Utility functions
│       ├── dom.js
│       ├── format.js
│       ├── status.js
│       └── validators.js
│
├── webfonts/                 # Font files
│
└── README.md                 # This file
```

## Version History

### v1.0.0 (Previous - Stable Release)
First stable release of the E-Commerce Store with core functionality completed.

**Completed Features:**
- ✅ Home page with product catalog
- ✅ Product details page with comprehensive information
- ✅ Shopping cart functionality (add, remove, update quantities)
- ✅ Checkout process with validation
- ✅ Order management system
- ✅ Order history tracking
- ✅ Responsive design for desktop and mobile
- ✅ Local storage persistence
- ✅ Professional header and footer navigation
- ✅ Product card components with image display
- ✅ Cart and checkout summary components
- ✅ Order status tracking

### v2.0.0 (Current - Stable Release)
This release stabilizes the shop experience and includes UI, UX and code-structure improvements.

**Completed Features:**
- ✅ Shop page with product listing and improved layout (`shop.html`, `src/pages/shop.js`, `css/pages/shop.css`)
- ✅ `shopItem` / `shopItem.js` and updated `productCard` components for consistent item rendering (`src/components/shopItem.js`, `src/components/productCard.js`)
- ✅ Advanced client-side filtering and sorting controls on the shop page
- ✅ Improved header/navigation for better discoverability (`src/components/header.js`, css/layout/header.css)
- ✅ Refined cart and checkout wiring and UI tweaks (`src/components/cartItem.js`, `src/components/cartSummary.js`, `src/components/checkoutSummary.js`)
- ✅ Additional page-specific styles and responsive fixes across `css/pages/`
- ✅ Minor performance and accessibility improvements
- ✅ Updated mock product data and service hooks to support the shop workflow (`data/mock-products.json`, `src/services/api.js`)

**Notes:**
- The repository layout was kept modular: components, pages, services and utils were refined for readability and reuse.

### v3.0.0 (Planned)
Planned enhancements for the next major version:
- Server-side integration and real backend API (replace mock API)
- User accounts, authentication and order persistence
- Payment gateway integration (Stripe/PayPal)
- Server-side search, pagination and improved filtering
- Wishlist/favorites and product reviews
- Admin dashboard for product management
- End-to-end tests, unit tests and CI pipeline
- Accessibility audit and improvements

More detailed roadmap and milestones will be added to this README as v3 work begins.

## Key Features

- **Product Browsing**: Browse and view product details on the home page
- **Shopping Cart**: Add/remove items and manage quantities with persistent storage
- **Checkout**: Secure checkout process with validation and order confirmation
- **Order Management**: View complete order history and track order status
- **Responsive Design**: Fully responsive design that works on desktop and mobile devices
- **Local Storage**: All data persisted in browser local storage for seamless user experience

## Technologies Used

- HTML5
- CSS3 (with Font Awesome icons)
- Vanilla JavaScript (ES6+)
- Local Storage for persistence
- JSON for data structure

## Architecture Overview

### Service Layer (`src/services/`)
- **api.js**: Handles mock API calls and product data retrieval
- **cartService.js**: Manages shopping cart operations and state
- **orderService.js**: Manages order creation, retrieval, and status updates
- **storage.js**: Abstracts local storage operations for caching

### Component Layer (`src/components/`)
- Reusable UI components for consistent design across pages
- Product cards, cart items, checkout items, and order cards
- Header component for navigation

### Page Layer (`src/pages/`)
- Home page: Display featured products and product catalog
- Product page: Show detailed product information
- Cart page: Manage shopping cart items
- Checkout page: Process orders with validation
- Orders page: View order history and status

### Utility Layer (`src/utils/`)
- DOM manipulation helpers
- Data formatting utilities
- Validation functions
- Status management utilities

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

## v1.0.0 Implementation Details

### Data Flow
1. Products are loaded from `mock-products.json` via the API service
2. User interactions (add to cart, checkout) trigger service layer operations
3. Data is persisted to local storage via the storage service
4. Components reactively update based on data changes

### Navigation Structure
- **Home** (`index.html`): Entry point with product catalog
- **Product** (`product.html`): Detailed product view (accessed from home)
- **Cart** (`cart.html`): Shopping cart management
- **Checkout** (`checkout.html`): Order processing and confirmation
- **Orders** (`orders.html`): Order history and tracking

### Styling Architecture
- **Variables** (`css/utils/variables.css`): Global color scheme and spacing
- **Global** (`css/base/global.css`): Base styles applied to all pages
- **Grid System** (`css/layout/grid.css`): Responsive layout foundation
- **Components** (`css/components/`): Isolated component styles
- **Pages** (`css/pages/`): Page-specific styling overrides

### Key Design Decisions
- Used vanilla JavaScript (no frameworks) for lightweight, fast-loading experience
- Local storage for data persistence without backend requirements
- Modular component structure for code reusability and maintenance
- Separated concerns: services handle data, components handle UI
- Mock data allows for easy transition to real API in future versions

## Development Notes for Future Versions

When working on v2.0.0 and beyond:
1. Maintain the service/component/page/utility separation
2. Keep data persistence through the storage service
3. Add new components to `src/components/` and `css/components/`
4. Create new pages following the established pattern in `src/pages/`
5. Add page-specific CSS to `css/pages/`
6. Update this README with new features and version information

## Browser Support

Tested and working on:
- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Requires ES6+ JavaScript support.
