import type { Product } from '../types';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, size: string, color: string) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const handleAddToCart = () => {
    // Default to first size and color for simplicity
    const defaultSize = product.sizes[0];
    const defaultColor = product.colors[0];
    onAddToCart(product, defaultSize, defaultColor);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-details">
          <div className="product-sizes">
            <strong>Sizes:</strong> {product.sizes.join(', ')}
          </div>
          <div className="product-colors">
            <strong>Colors:</strong> {product.colors.join(', ')}
          </div>
        </div>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
