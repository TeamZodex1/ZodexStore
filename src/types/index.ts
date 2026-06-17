export interface Product {
  id: string;
  name: string;
  nameAr: string;
  category: string;
  price: number;
  originalPrice?: number;
  images: string[];
  colors: {hex: string;name: string;}[];
  sizes: string[];
  tags: string[];
  rating: number;
  inStock: boolean;
  gender: 'men' | 'women' | 'unisex';
  description?: string;
  descriptionAr?: string;
}

export interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  color: string;
  size: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  wishlist: string[]; // Array of product IDs
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  date: string;
}
