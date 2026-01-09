import type { Product } from '../types';
import ProductCard from './ProductCard';
import './ProductList.css';

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product, size: string, color: string) => void;
}

export default function ProductList({ products, onAddToCart }: ProductListProps) {
  return (
    <div className="product-list-container">
      <h2 className="section-title">Our Collection</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
