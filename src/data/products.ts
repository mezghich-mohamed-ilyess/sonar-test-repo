import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic Cotton T-Shirt',
    category: 'T-Shirts',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    description: 'Comfortable cotton t-shirt perfect for everyday wear. Soft fabric and classic fit.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Navy', 'Gray']
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    category: 'Jeans',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
    description: 'Modern slim fit jeans with stretch denim for comfort and style.',
    sizes: ['28', '30', '32', '34', '36'],
    colors: ['Blue', 'Black', 'Light Blue']
  },
  {
    id: 3,
    name: 'Hooded Sweatshirt',
    category: 'Hoodies',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    description: 'Cozy hooded sweatshirt with kangaroo pocket. Perfect for casual outings.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Gray', 'Black', 'Navy', 'Burgundy']
  },
  {
    id: 4,
    name: 'Summer Dress',
    category: 'Dresses',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop',
    description: 'Light and breezy summer dress with floral print. Perfect for warm weather.',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Floral Blue', 'Floral Pink', 'White']
  },
  {
    id: 5,
    name: 'Leather Jacket',
    category: 'Jackets',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
    description: 'Premium leather jacket with classic biker style. Durable and stylish.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Brown']
  },
  {
    id: 6,
    name: 'Running Shorts',
    category: 'Shorts',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=400&fit=crop',
    description: 'Lightweight running shorts with moisture-wicking fabric and inner liner.',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Gray', 'Red']
  },
  {
    id: 7,
    name: 'Casual Polo Shirt',
    category: 'Polo Shirts',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&h=400&fit=crop',
    description: 'Classic polo shirt in premium cotton pique. Perfect for smart casual occasions.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Navy', 'Green', 'Red']
  },
  {
    id: 8,
    name: 'Yoga Leggings',
    category: 'Activewear',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&h=400&fit=crop',
    description: 'High-waisted yoga leggings with four-way stretch. Non-see-through and squat-proof.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Purple', 'Teal']
  }
];
