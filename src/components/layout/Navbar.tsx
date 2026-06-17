import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Heart, User, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { cn } from '../../utils/cn';
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === '/';
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: t('nav.home'),
    path: '/'
  },
  {
    name: t('nav.shop'),
    path: '/shop'
  },
  {
    name: t('nav.men'),
    path: '/shop?gender=men'
  },
  {
    name: t('nav.women'),
    path: '/shop?gender=women'
  }];

  const isTransparent = isHome && !isScrolled;
  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
          isTransparent ?
          'bg-transparent border-transparent text-white' :
          'bg-bg-surface/90 backdrop-blur-md border-border text-text-primary'
        )}>
        
        <div className="max-w-7xl mx-auto px-16 md:px-32 h-64 md:h-80 flex items-center justify-between">
          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-8 -ml-8"
            onClick={() => setIsMobileMenuOpen(true)}>
            
            <Menu size={24} />
          </button>

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-widest uppercase">
            LUXE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-32">
            {navLinks.map((link) =>
            <Link
              key={link.name}
              to={link.path}
              className="text-sm font-semibold uppercase tracking-wider hover:text-accent transition-colors">
              
                {link.name}
              </Link>
            )}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-16 md:gap-24">
            <button className="hover:text-accent transition-colors hidden md:block">
              <Search size={20} />
            </button>
            <button
              onClick={toggleLanguage}
              className="hover:text-accent transition-colors flex items-center gap-4 text-sm font-semibold">
              
              <Globe size={20} />
              <span className="hidden md:inline">
                {language === 'en' ? 'عربي' : 'EN'}
              </span>
            </button>
            <Link
              to="/auth/signin"
              className="hover:text-accent transition-colors hidden md:block">
              
              <User size={20} />
            </Link>
            <Link
              to="/wishlist"
              className="hover:text-accent transition-colors">
              
              <Heart size={20} />
            </Link>
            <Link
              to="/cart"
              className="hover:text-accent transition-colors relative">
              
              <ShoppingBag size={20} />
              <span className="absolute -top-8 -right-8 bg-accent text-white text-[10px] font-bold w-16 h-16 rounded-full flex items-center justify-center">
                2
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen &&
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
            onClick={() => setIsMobileMenuOpen(false)} />
          
            <motion.div
            initial={{
              x: language === 'ar' ? '100%' : '-100%'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: language === 'ar' ? '100%' : '-100%'
            }}
            transition={{
              type: 'tween',
              duration: 0.3
            }}
            className={cn(
              'fixed top-0 bottom-0 w-[80%] max-w-sm bg-bg-surface z-50 p-24 flex flex-col',
              language === 'ar' ? 'right-0' : 'left-0'
            )}>
            
              <div className="flex justify-between items-center mb-32">
                <span className="text-2xl font-bold tracking-widest uppercase">
                  LUXE
                </span>
                <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-8">
                
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-24 flex-1">
                {navLinks.map((link) =>
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-semibold uppercase tracking-wider hover:text-accent transition-colors">
                
                    {link.name}
                  </Link>
              )}
              </div>

              <div className="border-t border-border pt-24 flex flex-col gap-16">
                <Link
                to="/auth/signin"
                className="flex items-center gap-16 text-lg font-semibold hover:text-accent">
                
                  <User size={24} />
                  {t('auth.signIn')}
                </Link>
              </div>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </>);

};
