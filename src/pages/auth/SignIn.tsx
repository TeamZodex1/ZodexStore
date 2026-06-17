import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../hooks/useLanguage';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { Checkbox } from '../../components/ui/Checkbox';
export const SignIn = () => {
  const { t, language } = useLanguage();
  return (
    <div className="min-h-screen flex pt-80">
      {/* Image Side */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200"
          alt="Fashion Model"
          className="absolute inset-0 w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-64 left-64 text-white">
          <h2 className="text-4xl font-bold uppercase mb-16">Welcome Back</h2>
          <p className="text-lg text-white/80 max-w-md">
            Sign in to access your exclusive offers, saved items, and
            personalized recommendations.
          </p>
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-16 md:p-64">
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
              {t('auth.signIn')}
            </h1>
            <p className="text-text-secondary">
              Enter your details to proceed.
            </p>
          </div>

          <form
            className="flex flex-col gap-24"
            onSubmit={(e) => e.preventDefault()}>
            
            <Input
              label={t('auth.email')}
              type="email"
              placeholder="name@example.com"
              required />
            

            <div className="flex flex-col gap-8">
              <Input
                label={t('auth.password')}
                type="password"
                placeholder="••••••••"
                required />
              
              <div className="flex justify-between items-center mt-8">
                <Checkbox label={t('auth.rememberMe')} />
                <Link
                  to="/auth/forgot-password"
                  className="text-sm text-text-secondary hover:text-accent transition-colors">
                  
                  {t('auth.forgotPassword')}
                </Link>
              </div>
            </div>

            <Button type="submit" className="w-full mt-8">
              {t('auth.signIn')}
            </Button>
          </form>

          <div className="relative flex items-center py-16">
            <div className="flex-grow border-t border-border"></div>
            <span className="flex-shrink-0 mx-16 text-text-secondary text-sm">
              OR
            </span>
            <div className="flex-grow border-t border-border"></div>
          </div>

          <div className="flex flex-col gap-16">
            <Button
              variant="secondary"
              className="w-full flex items-center justify-center gap-8">
              
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                
              </svg>
              Continue with Google
            </Button>
          </div>

          <p className="text-center text-sm text-text-secondary mt-16">
            {t('auth.noAccount')}{' '}
            <Link
              to="/auth/signup"
              className="text-accent font-semibold hover:text-accent-hover transition-colors">
              
              {t('auth.signUp')}
            </Link>
          </p>
        </motion.div>
      </div>
    </div>);

};
