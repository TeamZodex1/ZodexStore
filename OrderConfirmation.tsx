import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Package, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
export const OrderConfirmation = () => {
  const orderNumber =
  'ORD-' +
  Math.floor(Math.random() * 1000000).
  toString().
  padStart(6, '0');
  return (
    <div className="min-h-screen pt-120 pb-64 px-16 flex items-center justify-center">
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        className="w-full max-w-2xl bg-bg-surface border border-border p-32 md:p-64 text-center">
        
        <motion.div
          initial={{
            scale: 0
          }}
          animate={{
            scale: 1
          }}
          transition={{
            delay: 0.2,
            type: 'spring'
          }}
          className="w-80 h-80 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-32 text-success">
          
          <CheckCircle size={40} />
        </motion.div>

        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-16">
          Order Confirmed
        </h1>
        <p className="text-text-secondary text-lg mb-32">
          Thank you for your purchase. We've received your order and will begin
          processing it right away.
        </p>

        <div className="bg-bg-primary p-24 mb-48 flex flex-col sm:flex-row items-center justify-center gap-16 sm:gap-48">
          <div className="text-center">
            <span className="text-text-secondary text-sm uppercase tracking-wider block mb-4">
              Order Number
            </span>
            <span className="font-bold text-lg">{orderNumber}</span>
          </div>
          <div className="hidden sm:block w-1 h-32 bg-border"></div>
          <div className="text-center">
            <span className="text-text-secondary text-sm uppercase tracking-wider block mb-4">
              Estimated Delivery
            </span>
            <span className="font-bold text-lg">Oct 24 - Oct 26</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-16">
          <Link to="/shop">
            <Button size="lg" className="w-full sm:w-auto">
              Continue Shopping
            </Button>
          </Link>
          <Button
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto flex items-center justify-center gap-8">
            
            <Package size={20} /> Track Order
          </Button>
        </div>
      </motion.div>
    </div>);

};