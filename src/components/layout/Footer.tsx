import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { useLanguage } from '../../hooks/useLanguage';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
export const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-bg-surface border-t border-border pt-64 pb-32">
      <div className="max-w-7xl mx-auto px-16 md:px-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-48 mb-64">
          {/* Brand */}
          <div className="flex flex-col gap-24">
            <Link
              to="/"
              className="text-3xl font-bold tracking-widest uppercase">
              
              LUXE
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed">
              Redefining luxury fashion for the modern aesthetic. Discover
              curated collections that blend timeless elegance with contemporary
              design.
            </p>
            <div className="flex gap-16">
              <a
                href="#"
                className="text-text-secondary hover:text-accent transition-colors">
                
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-accent transition-colors">
                
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-accent transition-colors">
                
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-text-secondary hover:text-accent transition-colors">
                
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="flex flex-col gap-24">
            <h4 className="text-lg font-bold uppercase tracking-wider">
              {t('footer.shop')}
            </h4>
            <div className="flex flex-col gap-16">
              <Link
                to="/shop?gender=women"
                className="text-text-secondary hover:text-accent transition-colors">
                
                Women's Collection
              </Link>
              <Link
                to="/shop?gender=men"
                className="text-text-secondary hover:text-accent transition-colors">
                
                Men's Collection
              </Link>
              <Link
                to="/shop?category=new"
                className="text-text-secondary hover:text-accent transition-colors">
                
                New Arrivals
              </Link>
              <Link
                to="/shop?category=sale"
                className="text-text-secondary hover:text-accent transition-colors">
                
                Sale
              </Link>
            </div>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-24">
            <h4 className="text-lg font-bold uppercase tracking-wider">
              {t('footer.support')}
            </h4>
            <div className="flex flex-col gap-16">
              <Link
                to="/faq"
                className="text-text-secondary hover:text-accent transition-colors">
                
                FAQ
              </Link>
              <Link
                to="/shipping"
                className="text-text-secondary hover:text-accent transition-colors">
                
                Shipping & Returns
              </Link>
              <Link
                to="/track-order"
                className="text-text-secondary hover:text-accent transition-colors">
                
                Track Order
              </Link>
              <Link
                to="/contact"
                className="text-text-secondary hover:text-accent transition-colors">
                
                Contact Us
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-24">
            <h4 className="text-lg font-bold uppercase tracking-wider">
              {t('footer.newsletter')}
            </h4>
            <p className="text-text-secondary text-sm">
              {t('footer.newsletter.desc')}
            </p>
            <form
              className="flex flex-col gap-16"
              onSubmit={(e) => e.preventDefault()}>
              
              <Input placeholder="Enter your email" type="email" required />
              <Button type="submit" className="w-full">
                {t('footer.subscribe')}
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border pt-32 flex flex-col md:flex-row justify-between items-center gap-16 text-sm text-text-secondary">
          <p>{t('footer.rights')}</p>
          <div className="flex gap-24">
            <Link to="/privacy" className="hover:text-accent transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-accent transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>);

};
