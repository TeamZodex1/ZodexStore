import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Share2, Ruler, Truck, RotateCcw, Star } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { products } from '../data/products';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ui/ProductCard';
export const Product = () => {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const product = products.find((p) => p.id === id) || products[0]; // Fallback to first product for demo
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const name = language === 'ar' ? product.nameAr : product.name;
  const description =
  language === 'ar' ? product.descriptionAr : product.description;
  return (
    <div className="min-h-screen pt-120 pb-64 px-16 md:px-32 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-48 lg:gap-64 mb-64">
        {/* Image Gallery */}
        <div className="w-full lg:w-3/5 flex flex-col-reverse md:flex-row gap-16">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-16 overflow-x-auto md:overflow-y-auto md:w-24 flex-shrink-0 hide-scrollbar">
            {product.images.map((img, idx) =>
            <button
              key={idx}
              onClick={() => setActiveImageIndex(idx)}
              className={`flex-shrink-0 w-80 h-100 md:w-full md:h-120 border-2 transition-colors ${activeImageIndex === idx ? 'border-accent' : 'border-transparent'}`}>
              
                <img
                src={img}
                alt={`${name} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover" />
              
              </button>
            )}
          </div>

          {/* Main Image */}
          <div className="flex-1 bg-bg-surface aspect-[3/4] relative overflow-hidden">
            <motion.img
              key={activeImageIndex}
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                duration: 0.3
              }}
              src={product.images[activeImageIndex]}
              alt={name}
              className="w-full h-full object-cover" />
            
          </div>
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-2/5 flex flex-col gap-32">
          <div>
            <div className="flex justify-between items-start mb-8">
              <h1 className="text-3xl font-bold uppercase tracking-wider">
                {name}
              </h1>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="p-8 text-text-secondary hover:text-accent transition-colors">
                
                <Heart
                  size={24}
                  className={isWishlisted ? 'fill-accent text-accent' : ''} />
                
              </button>
            </div>

            <div className="flex items-center gap-16 mb-16">
              <div className="flex items-center gap-4 text-accent">
                <Star size={16} className="fill-accent" />
                <Star size={16} className="fill-accent" />
                <Star size={16} className="fill-accent" />
                <Star size={16} className="fill-accent" />
                <Star size={16} className="fill-accent opacity-50" />
                <span className="text-text-secondary text-sm ml-4">
                  ({product.rating})
                </span>
              </div>
            </div>

            <div className="flex items-center gap-16 text-2xl">
              {product.originalPrice &&
              <span className="text-text-secondary line-through">
                  ${product.originalPrice}
                </span>
              }
              <span className="font-bold text-accent">${product.price}</span>
            </div>
          </div>

          <p className="text-text-secondary leading-relaxed">{description}</p>

          {/* Colors */}
          <div>
            <div className="flex justify-between items-center mb-16">
              <span className="text-sm font-bold uppercase tracking-wider">
                Color: {selectedColor.name}
              </span>
            </div>
            <div className="flex gap-16">
              {product.colors.map((color) =>
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className={`w-32 h-32 rounded-full border-2 transition-all ${selectedColor.name === color.name ? 'border-accent scale-110' : 'border-transparent'}`}
                style={{
                  backgroundColor: color.hex
                }}
                title={color.name} />

              )}
            </div>
          </div>

          {/* Sizes */}
          <div>
            <div className="flex justify-between items-center mb-16">
              <span className="text-sm font-bold uppercase tracking-wider">
                Size
              </span>
              <button className="text-sm text-text-secondary hover:text-accent flex items-center gap-4 transition-colors">
                <Ruler size={16} /> Size Guide
              </button>
            </div>
            <div className="grid grid-cols-4 gap-12">
              {product.sizes.map((size) =>
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`py-12 border text-sm font-semibold transition-colors ${selectedSize === size ? 'border-accent bg-accent text-white' : 'border-border hover:border-accent hover:text-accent text-text-primary'}`}>
                
                  {size}
                </button>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-16 pt-16">
            <Button size="lg" className="w-full" disabled={!product.inStock}>
              {product.inStock ?
              t('product.addToCart') :
              t('product.outOfStock')}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="w-full flex items-center justify-center gap-8">
              
              <Share2 size={20} /> Share
            </Button>
          </div>

          {/* Features */}
          <div className="border-t border-border pt-32 mt-16 flex flex-col gap-16">
            <div className="flex items-center gap-16 text-sm text-text-secondary">
              <Truck size={20} /> Free shipping on orders over $200
            </div>
            <div className="flex items-center gap-16 text-sm text-text-secondary">
              <RotateCcw size={20} /> Free 30-day returns
            </div>
          </div>
        </div>
      </div>

      {/* Complete the Look / Related */}
      <section className="border-t border-border pt-64">
        <h2 className="text-2xl font-bold uppercase tracking-wider mb-48 text-center">
          Complete The Look
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24">
          {products.slice(0, 4).map((p) =>
          <ProductCard key={p.id} product={p} />
          )}
        </div>
      </section>
    </div>);

};
