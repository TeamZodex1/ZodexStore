import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, LayoutGrid, List } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { products } from '../data/products';
import { ProductCard } from '../components/ui/ProductCard';
import { Select } from '../components/ui/Select';
import { Checkbox } from '../components/ui/Checkbox';
import { Button } from '../components/ui/Button';
export const Shop = () => {
  const { t, language } = useLanguage();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const categories = [
  'Outerwear',
  'Dresses',
  'Knitwear',
  'Accessories',
  'Shoes'];

  const colors = [
  {
    name: 'Black',
    hex: '#000000'
  },
  {
    name: 'White',
    hex: '#FFFFFF'
  },
  {
    name: 'Camel',
    hex: '#D2B48C'
  },
  {
    name: 'Grey',
    hex: '#808080'
  },
  {
    name: 'Navy',
    hex: '#000080'
  }];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const sortOptions = [
  {
    value: 'newest',
    label: 'Newest Arrivals'
  },
  {
    value: 'price-asc',
    label: 'Price: Low to High'
  },
  {
    value: 'price-desc',
    label: 'Price: High to Low'
  }];

  const FiltersContent = () =>
  <div className="flex flex-col gap-32">
      {/* Categories */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider mb-16">
          Category
        </h3>
        <div className="flex flex-col gap-12">
          {categories.map((cat) =>
        <Checkbox key={cat} label={cat} />
        )}
        </div>
      </div>

      {/* Price */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider mb-16">
          Price Range
        </h3>
        <div className="flex flex-col gap-12">
          <Checkbox label="Under $100" />
          <Checkbox label="$100 - $300" />
          <Checkbox label="$300 - $500" />
          <Checkbox label="Over $500" />
        </div>
      </div>

      {/* Colors */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider mb-16">
          Color
        </h3>
        <div className="flex flex-wrap gap-12">
          {colors.map((color) =>
        <button
          key={color.name}
          className="w-24 h-24 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary"
          style={{
            backgroundColor: color.hex
          }}
          title={color.name} />

        )}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider mb-16">
          Size
        </h3>
        <div className="flex flex-wrap gap-8">
          {sizes.map((size) =>
        <button
          key={size}
          className="w-40 h-40 border border-border text-sm font-semibold hover:border-accent hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-accent">
          
              {size}
            </button>
        )}
        </div>
      </div>
    </div>;

  return (
    <div className="min-h-screen pt-120 pb-64 px-16 md:px-32 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-24 mb-48">
        <div>
          <h1 className="text-4xl font-bold uppercase tracking-wider mb-8">
            The Collection
          </h1>
          <p className="text-text-secondary">
            Showing {products.length} products
          </p>
        </div>

        <div className="flex items-center gap-16 w-full md:w-auto">
          <Button
            variant="secondary"
            className="md:hidden flex-1 flex items-center justify-center gap-8"
            onClick={() => setIsMobileFiltersOpen(true)}>
            
            <Filter size={16} /> Filters
          </Button>

          <div className="hidden md:flex items-center gap-8 border border-border p-4">
            <button
              className={`p-8 ${viewMode === 'grid' ? 'bg-bg-surface text-accent' : 'text-text-secondary hover:text-text-primary'}`}
              onClick={() => setViewMode('grid')}>
              
              <LayoutGrid size={20} />
            </button>
            <button
              className={`p-8 ${viewMode === 'list' ? 'bg-bg-surface text-accent' : 'text-text-secondary hover:text-text-primary'}`}
              onClick={() => setViewMode('list')}>
              
              <List size={20} />
            </button>
          </div>

          <div className="w-full md:w-48">
            <Select options={sortOptions} defaultValue="newest" />
          </div>
        </div>
      </div>

      <div className="flex gap-48">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block w-64 flex-shrink-0">
          <FiltersContent />
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div
            className={`grid gap-24 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            
            {products.map((product) =>
            <ProductCard key={product.id} product={product} />
            )}
          </div>

          {/* Pagination */}
          <div className="mt-64 flex justify-center gap-8">
            <button
              className="w-40 h-40 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors disabled:opacity-50"
              disabled>
              
              &lt;
            </button>
            <button className="w-40 h-40 flex items-center justify-center bg-accent text-white">
              1
            </button>
            <button className="w-40 h-40 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors">
              2
            </button>
            <button className="w-40 h-40 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors">
              3
            </button>
            <button className="w-40 h-40 flex items-center justify-center border border-border hover:border-accent hover:text-accent transition-colors">
              &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      <AnimatePresence>
        {isMobileFiltersOpen &&
        <>
            <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={() => setIsMobileFiltersOpen(false)} />
          
            <motion.div
            initial={{
              x: language === 'ar' ? '-100%' : '100%'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: language === 'ar' ? '-100%' : '100%'
            }}
            transition={{
              type: 'tween',
              duration: 0.3
            }}
            className={`fixed top-0 bottom-0 w-[80%] max-w-sm bg-bg-surface z-50 p-24 flex flex-col ${language === 'ar' ? 'left-0' : 'right-0'}`}>
            
              <div className="flex justify-between items-center mb-32 pb-16 border-b border-border">
                <span className="text-lg font-bold uppercase tracking-wider">
                  Filters
                </span>
                <button
                onClick={() => setIsMobileFiltersOpen(false)}
                className="p-8">
                
                  <X size={24} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto pb-32">
                <FiltersContent />
              </div>

              <div className="pt-24 border-t border-border flex gap-16">
                <Button variant="secondary" className="flex-1">
                  Clear
                </Button>
                <Button
                variant="primary"
                className="flex-1"
                onClick={() => setIsMobileFiltersOpen(false)}>
                
                  Apply
                </Button>
              </div>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </div>);

};