import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { Checkbox } from '../../components/ui/Checkbox';
export const SignUp = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen flex pt-80">
      {/* Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-16 md:p-64 order-2 lg:order-1">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.5
          }}
          className="w-full max-w-md flex flex-col gap-32">
          
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold uppercase mb-8">
              {t('auth.signUp')}
            </h1>
            <p className="text-text-secondary">
              Create an account to unlock exclusive features.
            </p>
          </div>

          <form
            className="flex flex-col gap-24"
            onSubmit={(e) => e.preventDefault()}>
            
            <div className="grid grid-cols-2 gap-16">
              <Input label="First Name" placeholder="John" required />
              <Input label="Last Name" placeholder="Doe" required />
            </div>

            <Input
              label={t('auth.email')}
              type="email"
              placeholder="name@example.com"
              required />
            

            <Input
              label={t('auth.password')}
              type="password"
              placeholder="••••••••"
              required />
            

            <div className="flex flex-col gap-8">
              <label className="text-sm font-semibold text-text-primary">
                Shopping Preference
              </label>
              <div className="flex gap-16">
                <label className="flex items-center gap-8 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="women"
                    className="accent-accent"
                    defaultChecked />
                  
                  <span className="text-sm">Women's</span>
                </label>
                <label className="flex items-center gap-8 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="men"
                    className="accent-accent" />
                  
                  <span className="text-sm">Men's</span>
                </label>
              </div>
            </div>

            <div className="mt-8">
              <Checkbox
                label="I agree to the Terms of Service and Privacy Policy"
                required />
              
            </div>

            <Button type="submit" className="w-full mt-8">
              Create Account
            </Button>
          </form>

          <p className="text-center text-sm text-text-secondary mt-16">
            {t('auth.hasAccount')}{' '}
            <Link
              to="/auth/signin"
              className="text-accent font-semibold hover:text-accent-hover transition-colors">
              
              {t('auth.signIn')}
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Image Side */}
      <div className="hidden lg:block lg:w-1/2 relative order-1 lg:order-2">
        <img
          src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=1200"
          alt="Fashion Model"
          className="absolute inset-0 w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-64 right-64 text-white text-right">
          <h2 className="text-4xl font-bold uppercase mb-16">Join the Club</h2>
          <p className="text-lg text-white/80 max-w-md ml-auto">
            Experience fashion without limits. Early access to sales and new
            collections.
          </p>
        </div>
      </div>
    </div>);

};