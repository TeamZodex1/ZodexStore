import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ui/ProductCard';
import { products } from '../data/products';
export const Home = () => {
  const { t, language } = useLanguage();
  const trendingProducts = products.slice(0, 4);
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000"
            alt="Luxury Fashion"
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white px-16 max-w-4xl mx-auto flex flex-col items-center gap-24">
          <motion.h1
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}
            className="text-5xl md:text-7xl font-bold tracking-tight uppercase">
            
            {t('hero.title')}
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: 'easeOut'
            }}
            className="text-lg md:text-xl text-white/90 max-w-2xl text-balance">
            
            {t('hero.subtitle')}
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: 'easeOut'
            }}>
            
            <Link to="/shop">
              <Button size="lg" className="mt-16 group">
                {t('hero.cta')}
                <ArrowRight
                  className={`ml-8 w-5 h-5 transition-transform group-hover:translate-x-4 ${language === 'ar' ? 'rotate-180 group-hover:-translate-x-4' : ''}`} />
                
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-64 px-16 md:px-32 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-48">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider">
            {t('section.categories')}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <Link
            to="/shop?gender=women"
            className="group relative aspect-[4/5] md:aspect-[16/9] overflow-hidden bg-bg-surface">
            
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1000"
              alt="Women"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-4xl font-bold text-white uppercase tracking-widest">
                Women
              </h3>
            </div>
          </Link>
          <Link
            to="/shop?gender=men"
            className="group relative aspect-[4/5] md:aspect-[16/9] overflow-hidden bg-bg-surface">
            
            <img
              src="https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&q=80&w=1000"
              alt="Men"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-4xl font-bold text-white uppercase tracking-widest">
                Men
              </h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-64 px-16 md:px-32 max-w-7xl mx-auto bg-bg-surface">
        <div className="flex justify-between items-end mb-48">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider">
            {t('section.trending')}
          </h2>
          <Link
            to="/shop"
            className="text-accent font-semibold hover:text-accent-hover transition-colors flex items-center gap-8">
            
            View All{' '}
            <ArrowRight
              size={16}
              className={language === 'ar' ? 'rotate-180' : ''} />
            
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24">
          {trendingProducts.map((product) =>
          <ProductCard key={product.id} product={product} />
          )}
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-64 px-16 md:px-32 max-w-7xl mx-auto">
        <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-center">
          <img
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=2000"
            alt="New Collection"
            className="absolute inset-0 w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

          <div className="relative z-10 p-32 md:p-64 max-w-2xl text-white">
            <span className="text-accent font-bold tracking-widest uppercase mb-16 block">
              New Arrival
            </span>
            <h2 className="text-4xl md:text-6xl font-bold uppercase mb-24">
              The Fall Collection
            </h2>
            <p className="text-lg text-white/80 mb-32 text-balance">
              Embrace the changing seasons with our latest collection of
              structured outerwear and premium knitwear.
            </p>
            <Button variant="primary" size="lg">
              Explore Collection
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-64 px-16 md:px-32 max-w-7xl mx-auto bg-bg-surface">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-center mb-48">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-32">
          {[
          {
            name: 'Sarah M.',
            role: 'Fashion Blogger',
            text: 'LUXE has completely transformed my wardrobe. The quality of every piece is exceptional, and the attention to detail is unmatched.',
            rating: 5
          },
          {
            name: 'Ahmed K.',
            role: 'Creative Director',
            text: 'Finally, a brand that understands modern luxury. The leather jacket I purchased is the finest I\'ve ever owned. Worth every penny.',
            rating: 5
          },
          {
            name: 'Elena R.',
            role: 'Architect',
            text: 'The minimalist aesthetic perfectly aligns with my personal style. Fast shipping and the packaging feels like unwrapping a gift.',
            rating: 4
          }].
          map((testimonial, idx) =>
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
            className="bg-bg-primary border border-border p-32 flex flex-col gap-24">
            
              <div className="flex gap-4">
                {Array.from({ length: 5 }).map((_, i) =>
              <Star
                key={i}
                size={16}
                className={i < testimonial.rating ? 'fill-accent text-accent' : 'text-border'} />

              )}
              </div>
              <p className="text-text-secondary leading-relaxed flex-1">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-text-secondary text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>);

};
