import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Mail } from 'lucide-react';
import { Button } from '../../components/ui/Button';
export const EmailVerification = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [isVerified, setIsVerified] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
    if (newCode.every((digit) => digit !== '')) {
      setTimeout(() => setIsVerified(true), 800);
    }
  };
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };
  if (isVerified) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-80 px-16">
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            scale: 1
          }}
          className="w-full max-w-md bg-bg-surface p-32 md:p-48 border border-border text-center">
          
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
            className="w-64 h-64 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-24 text-success">
            
            <CheckCircle size={32} />
          </motion.div>

          <h1 className="text-2xl font-bold uppercase mb-8">Email Verified</h1>
          <p className="text-text-secondary text-sm mb-32">
            Your email has been successfully verified. You can now access all
            features of your account.
          </p>

          <Link to="/auth/signin">
            <Button className="w-full">Continue to Sign In</Button>
          </Link>
        </motion.div>
      </div>);

  }
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
        
        <div className="text-center mb-32">
          <div className="w-64 h-64 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-24 text-accent">
            <Mail size={32} />
          </div>
          <h1 className="text-2xl font-bold uppercase mb-8">
            Verify Your Email
          </h1>
          <p className="text-text-secondary text-sm">
            We've sent a 6-digit verification code to your email address. Enter
            it below to verify your account.
          </p>
        </div>

        <div className="flex justify-center gap-12 mb-32">
          {code.map((digit, index) =>
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-48 h-56 bg-bg-primary border border-border text-center text-xl font-bold text-text-primary focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
            aria-label={`Digit ${index + 1}`} />

          )}
        </div>

        <p className="text-center text-sm text-text-secondary mb-24">
          Didn't receive the code?{' '}
          <button className="text-accent font-semibold hover:text-accent-hover transition-colors">
            Resend Code
          </button>
        </p>

        <Link to="/auth/signin" className="block text-center">
          <span className="text-sm text-text-secondary hover:text-accent transition-colors">
            Back to Sign In
          </span>
        </Link>
      </motion.div>
    </div>);

};