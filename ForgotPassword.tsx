import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail } from 'lucide-react';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
export const ForgotPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center pt-80 px-16">
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="w-full max-w-md bg-bg-surface p-32 md:p-48 border border-border">
        
        {!isSubmitted ?
        <>
            <div className="text-center mb-32">
              <h1 className="text-2xl font-bold uppercase mb-8">
                Reset Password
              </h1>
              <p className="text-text-secondary text-sm">
                Enter your email address and we'll send you a link to reset your
                password.
              </p>
            </div>

            <form
            className="flex flex-col gap-24"
            onSubmit={(e) => {
              e.preventDefault();
              setIsSubmitted(true);
            }}>
            
              <Input
              label="Email Address"
              type="email"
              placeholder="name@example.com"
              required />
            
              <Button type="submit" className="w-full">
                Send Reset Link
              </Button>
            </form>
          </> :

        <div className="text-center flex flex-col items-center gap-24">
            <div className="w-64 h-64 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-8">
              <Mail size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold uppercase mb-8">
                Check your email
              </h2>
              <p className="text-text-secondary text-sm mb-32">
                We've sent a password reset link to your email address.
              </p>
            </div>
            <Button
            variant="secondary"
            className="w-full"
            onClick={() => setIsSubmitted(false)}>
            
              Didn't receive the email?
            </Button>
          </div>
        }

        <div className="mt-32 text-center">
          <Link
            to="/auth/signin"
            className="inline-flex items-center gap-8 text-sm text-text-secondary hover:text-accent transition-colors">
            
            <ArrowLeft size={16} />
            Back to Sign In
          </Link>
        </div>
      </motion.div>
    </div>);

};