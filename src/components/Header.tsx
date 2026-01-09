import './Header.css';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export default function Header({ cartItemCount, onCartClick }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="logo">ClothesShop</h1>
        <nav className="nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#about" className="nav-link">About</a>
          <button className="cart-button" onClick={onCartClick}>
            🛒 Cart
            {cartItemCount > 0 && (
              <span className="cart-badge">{cartItemCount}</span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
