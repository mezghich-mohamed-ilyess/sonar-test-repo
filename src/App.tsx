import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { products } from './data/products';
import type { CartItem, Product } from './types';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product, size: string, color: string) => {
    const existingItemIndex = cartItems.findIndex(
      (item) =>
        item.product.id === product.id &&
        item.size === size &&
        item.color === color
    );

    if (existingItemIndex !== -1) {
      const newCartItems = [...cartItems];
      newCartItems[existingItemIndex].quantity += 1;
      setCartItems(newCartItems);
    } else {
      setCartItems([...cartItems, { product, quantity: 1, size, color }]);
    }
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    const newCartItems = [...cartItems];
    newCartItems[index].quantity = quantity;
    setCartItems(newCartItems);
  };

  const handleRemoveItem = (index: number) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="app">
      <Header cartItemCount={totalItems} onCartClick={() => setIsCartOpen(true)} />
      <main>
        <ProductList products={products} onAddToCart={handleAddToCart} />
      </main>
      {isCartOpen && (
        <Cart
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClose={() => setIsCartOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
