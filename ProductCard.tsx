import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Eye } from 'lucide-react';
import { Product } from '../../types';
import { useLanguage } from '../../hooks/useLanguage';
import { Button } from './Button';
import { Link } from 'react-router-dom';
interface ProductCardProps {
  product: Product;
}
export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { language, t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const name = language === 'ar' ? product.nameAr : product.name;
  return (
    <motion.div
      className="group relative flex flex-col gap-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{
        opacity: 0,
        y: 20
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true
      }}
      transition={{
        duration: 0.5
      }}>
      
      <div className="relative aspect-[3/4] overflow-hidden bg-bg-surface">
        <Link to={`/product/${product.id}`}>
          <motion.img
            src={
            isHovered && product.images[1] ?
            product.images[1] :
            product.images[0]
            }
            alt={name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          
        </Link>

        {/* Badges */}
        <div className="absolute top-16 left-16 flex flex-col gap-8">
          {product.originalPrice &&
          <span className="bg-error text-white text-xs font-bold px-8 py-4 uppercase tracking-wider">
              Sale
            </span>
          }
          {product.tags.includes('new') &&
          <span className="bg-text-primary text-bg-primary text-xs font-bold px-8 py-4 uppercase tracking-wider">
              New
            </span>
          }
        </div>

        {/* Actions */}
        <div className="absolute top-16 right-16 flex flex-col gap-8">
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsWishlisted(!isWishlisted);
            }}
            className="p-8 bg-bg-surface/80 backdrop-blur-sm rounded-full text-text-primary hover:text-accent transition-colors">
            
            <Heart
              size={20}
              className={isWishlisted ? 'fill-accent text-accent' : ''} />
            
          </button>
        </div>

        {/* Quick Add / View Overlay */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-16 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/50 to-transparent`}>
          
          <div className="flex gap-8">
            <Button
              variant="primary"
              className="w-full py-12 text-sm"
              onClick={(e) => e.preventDefault()}>
              
              {t('product.addToCart')}
            </Button>
            <Button
              variant="secondary"
              className="px-12 bg-bg-surface/90 border-none"
              onClick={(e) => e.preventDefault()}>
              
              <Eye size={20} />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-start">
          <Link
            to={`/product/${product.id}`}
            className="text-base font-semibold hover:text-accent transition-colors line-clamp-1">
            
            {name}
          </Link>
          <div className="flex items-center gap-8 whitespace-nowrap">
            {product.originalPrice &&
            <span className="text-text-secondary line-through text-sm">
                ${product.originalPrice}
              </span>
            }
            <span className="font-bold text-accent">${product.price}</span>
          </div>
        </div>

        <div className="flex items-center gap-8">
          {product.colors.map((color, idx) =>
          <div
            key={idx}
            className="w-16 h-16 rounded-full border border-border"
            style={{
              backgroundColor: color.hex
            }}
            title={color.name} />

          )}
        </div>
      </div>
    </motion.div>);

};