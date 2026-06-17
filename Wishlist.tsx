import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';
import { Button } from '../components/ui/Button';
export const Wishlist = () => {
  // Mock wishlist items
  const [wishlistItems, setWishlistItems] = useState(products.slice(0, 3));
  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen pt-120 pb-64 px-16 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold uppercase mb-16">
          Your Wishlist is Empty
        </h1>
        <p className="text-text-secondary mb-32">
          Save your favorite items here to buy them later.
        </p>
        <Link to="/shop">
          <Button size="lg">Discover Products</Button>
        </Link>
      </div>);

  }
  return (
    <div className="min-h-screen pt-120 pb-64 px-16 md:px-32 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-48">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-8">
            Wishlist
          </h1>
          <p className="text-text-secondary">
            {wishlistItems.length} items saved
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24">
        {wishlistItems.map((product) =>
        <ProductCard key={product.id} product={product} />
        )}
      </div>
    </div>);

};