# ClothesShop - E-Commerce Web Application

A modern, responsive web application for selling clothes online. Built with industry-standard technologies for a seamless shopping experience.

## 🚀 Technology Stack

### Frontend
- **React 19** - Modern UI library with hooks for state management
- **TypeScript** - Type-safe development experience
- **Vite** - Fast build tool and development server
- **CSS Modules** - Scoped styling for components

### Features
- ✅ Responsive product grid layout
- ✅ Shopping cart functionality (add, remove, update quantities)
- ✅ Product filtering by category
- ✅ Clean, modern UI design
- ✅ Mobile-friendly responsive design
- ✅ Real product images from Unsplash
- ✅ Type-safe development with TypeScript

## 📦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mezghich-mohamed-ilyess/sonar-test-repo.git
cd sonar-test-repo
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 🛠️ Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build production-ready application
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 📱 Features Overview

### Product Catalog
- Browse 8 different clothing items
- Categories include: T-Shirts, Jeans, Hoodies, Dresses, Jackets, Shorts, Polo Shirts, and Activewear
- Each product displays:
  - High-quality image
  - Product name and category
  - Detailed description
  - Available sizes and colors
  - Price

### Shopping Cart
- Add items to cart with one click
- Adjust quantities
- Remove items
- Real-time total calculation
- Slide-out cart panel
- Cart badge showing item count

### Responsive Design
- Optimized for desktop, tablet, and mobile devices
- Grid layout adapts to screen size
- Touch-friendly interface

## 🏗️ Project Structure

```
sonar-test-repo/
├── src/
│   ├── components/          # React components
│   │   ├── Header.tsx       # Navigation header with cart button
│   │   ├── ProductList.tsx  # Product grid display
│   │   ├── ProductCard.tsx  # Individual product card
│   │   └── Cart.tsx         # Shopping cart panel
│   ├── data/
│   │   └── products.ts      # Product data
│   ├── types.ts             # TypeScript type definitions
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html              # HTML entry point
├── package.json            # Dependencies and scripts
├── vite.config.ts          # Vite configuration
└── tsconfig.json           # TypeScript configuration
```

## 🎨 Design Decisions

1. **React + TypeScript**: Chosen for type safety, developer experience, and industry adoption
2. **Vite**: Modern build tool with fast HMR and optimal production builds
3. **Component-based Architecture**: Modular, reusable components for maintainability
4. **CSS Modules**: Scoped styles to prevent conflicts and improve maintainability
5. **State Management**: React hooks (useState) for simplicity - suitable for this scale
6. **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox

## 🔄 Future Enhancements

Potential features for future development:
- Backend integration with Express.js API
- Database integration (MongoDB or PostgreSQL)
- User authentication and accounts
- Payment gateway integration (Stripe/PayPal)
- Product search and filtering
- Wishlist functionality
- Product reviews and ratings
- Order history and tracking
- Admin panel for inventory management

## 📝 License

ISC

## 👥 Author

This project was developed as a demonstration of modern web development practices for e-commerce applications.

