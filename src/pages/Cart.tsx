import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trash2, Minus, Plus, ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { ProductCard } from '../components/ui/ProductCard';
export const Cart = () => {
  // Mock cart items based on products data
  const [cartItems, setCartItems] = useState([
  {
    id: '1',
    product: products[0],
    quantity: 1,
    size: 'M',
    color: 'Black'
  },
  {
    id: '2',
    product: products[1],
    quantity: 2,
    size: 'L',
    color: 'Black'
  }]
  );
  const updateQuantity = (id: string, delta: number) => {
    setCartItems((items) =>
    items.map((item) => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return {
          ...item,
          quantity: newQty
        };
      }
      return item;
    })
    );
  };
  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const shipping = subtotal > 200 ? 0 : 25;
  const total = subtotal + shipping;
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen pt-120 pb-64 px-16 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold uppercase mb-16">
          Your Cart is Empty
        </h1>
        <p className="text-text-secondary mb-32">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link to="/shop">
          <Button size="lg">Continue Shopping</Button>
        </Link>
      </div>);

  }
  return (
    <div className="min-h-screen pt-120 pb-64 px-16 md:px-32 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-48">
        Shopping Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-48 lg:gap-64">
        {/* Cart Items */}
        <div className="flex-1 flex flex-col gap-32">
          {cartItems.map((item) =>
          <motion.div
            key={item.id}
            layout
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              scale: 0.9
            }}
            className="flex gap-16 md:gap-32 border-b border-border pb-32">
            
              <Link
              to={`/product/${item.product.id}`}
              className="w-96 md:w-120 aspect-[3/4] bg-bg-surface flex-shrink-0">
              
                <img
                src={item.product.images[0]}
                alt={item.product.name}
                className="w-full h-full object-cover" />
              
              </Link>

              <div className="flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start gap-16">
                  <div>
                    <Link
                    to={`/product/${item.product.id}`}
                    className="text-lg font-bold uppercase tracking-wider hover:text-accent transition-colors line-clamp-1">
                    
                      {item.product.name}
                    </Link>
                    <p className="text-text-secondary text-sm mt-4">
                      Color: {item.color} | Size: {item.size}
                    </p>
                  </div>
                  <span className="font-bold text-accent whitespace-nowrap">
                    ${item.product.price}
                  </span>
                </div>

                <div className="flex justify-between items-end mt-16">
                  <div className="flex items-center border border-border">
                    <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="p-8 text-text-secondary hover:text-text-primary transition-colors">
                    
                      <Minus size={16} />
                    </button>
                    <span className="w-32 text-center text-sm font-semibold">
                      {item.quantity}
                    </span>
                    <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="p-8 text-text-secondary hover:text-text-primary transition-colors">
                    
                      <Plus size={16} />
                    </button>
                  </div>

                  <button
                  onClick={() => removeItem(item.id)}
                  className="text-text-secondary hover:text-error transition-colors flex items-center gap-8 text-sm">
                  
                    <Trash2 size={16} />{' '}
                    <span className="hidden md:inline">Remove</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-96 flex-shrink-0">
          <div className="bg-bg-surface border border-border p-32 sticky top-120">
            <h2 className="text-xl font-bold uppercase tracking-wider mb-24">
              Order Summary
            </h2>

            <div className="flex flex-col gap-16 border-b border-border pb-24 mb-24">
              <div className="flex justify-between text-text-secondary">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-text-secondary">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-32">
              <span className="text-lg font-bold uppercase">Total</span>
              <span className="text-2xl font-bold text-accent">${total}</span>
            </div>

            <div className="flex gap-8 mb-32">
              <Input placeholder="Promo code" className="flex-1" />
              <Button variant="secondary">Apply</Button>
            </div>

            <Link to="/checkout" className="block">
              <Button size="lg" className="w-full group">
                Proceed to Checkout
                <ArrowRight className="ml-8 w-5 h-5 transition-transform group-hover:translate-x-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Suggested Products */}
      <section className="mt-64 pt-64 border-t border-border">
        <h2 className="text-2xl font-bold uppercase tracking-wider mb-48">
          You Might Also Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24">
          {products.slice(2, 6).map((p) =>
          <ProductCard key={p.id} product={p} />
          )}
        </div>
      </section>
    </div>);

};
