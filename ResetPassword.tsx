import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
export const ResetPassword = () => {
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
          <h1 className="text-2xl font-bold uppercase mb-8">
            Set New Password
          </h1>
          <p className="text-text-secondary text-sm">
            Your new password must be different from previously used passwords.
          </p>
        </div>

        <form
          className="flex flex-col gap-24"
          onSubmit={(e) => e.preventDefault()}>
          
          <Input
            label="New Password"
            type="password"
            placeholder="••••••••"
            required />
          
          <Input
            label="Confirm New Password"
            type="password"
            placeholder="••••••••"
            required />
          
          <Button type="submit" className="w-full mt-8">
            Reset Password
          </Button>
        </form>
      </motion.div>
    </div>);

};