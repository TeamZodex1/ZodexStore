import React, { useState, Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ChevronRight } from 'lucide-react';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Select } from '../components/ui/Select';
import { Checkbox } from '../components/ui/Checkbox';
export const Checkout = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
      window.scrollTo(0, 0);
    } else {
      setIsProcessing(true);
      setTimeout(() => {
        navigate('/order-confirmation');
      }, 2000);
    }
  };
  const steps = [
  {
    num: 1,
    title: 'Shipping'
  },
  {
    num: 2,
    title: 'Payment'
  },
  {
    num: 3,
    title: 'Review'
  }];

  return (
    <div className="min-h-screen pt-120 pb-64 px-16 md:px-32 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-48 text-center">
        Checkout
      </h1>

      {/* Progress Indicator */}
      <div className="flex items-center justify-center mb-64 max-w-2xl mx-auto">
        {steps.map((s, idx) =>
        <Fragment key={s.num}>
            <div className="flex flex-col items-center gap-8">
              <div
              className={`w-32 h-32 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step > s.num ? 'bg-success text-white' : step === s.num ? 'bg-accent text-white' : 'bg-bg-surface border border-border text-text-secondary'}`}>
              
                {step > s.num ? <Check size={16} /> : s.num}
              </div>
              <span
              className={`text-xs uppercase tracking-wider font-semibold ${step >= s.num ? 'text-text-primary' : 'text-text-secondary'}`}>
              
                {s.title}
              </span>
            </div>
            {idx < steps.length - 1 &&
          <div
            className={`flex-1 h-2 mx-16 transition-colors ${step > s.num ? 'bg-success' : 'bg-border'}`} />

          }
          </Fragment>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-48 lg:gap-64">
        {/* Main Form Area */}
        <div className="flex-1">
          <form onSubmit={handleNext}>
            {step === 1 &&
            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              className="flex flex-col gap-32">
              
                <h2 className="text-xl font-bold uppercase tracking-wider border-b border-border pb-16">
                  Shipping Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                  <Input label="First Name" required />
                  <Input label="Last Name" required />
                </div>

                <Input label="Email Address" type="email" required />
                <Input label="Phone Number" type="tel" required />

                <Input label="Address Line 1" required />
                <Input label="Address Line 2 (Optional)" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                  <Input label="City" required />
                  <Select
                  label="State/Province"
                  options={[
                  {
                    value: 'ny',
                    label: 'New York'
                  },
                  {
                    value: 'ca',
                    label: 'California'
                  }]
                  }
                  required />
                
                  <Input label="ZIP / Postal Code" required />
                </div>

                <Select
                label="Country"
                options={[
                {
                  value: 'us',
                  label: 'United States'
                },
                {
                  value: 'uk',
                  label: 'United Kingdom'
                }]
                }
                required />
              

                <div className="mt-16">
                  <Checkbox label="Save this information for next time" />
                </div>
              </motion.div>
            }

            {step === 2 &&
            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              className="flex flex-col gap-32">
              
                <h2 className="text-xl font-bold uppercase tracking-wider border-b border-border pb-16">
                  Payment Method
                </h2>

                <div className="flex flex-col gap-16">
                  <label className="flex items-center gap-16 p-16 border border-accent bg-accent/5 cursor-pointer">
                    <input
                    type="radio"
                    name="payment"
                    value="card"
                    className="accent-accent"
                    defaultChecked />
                  
                    <span className="font-semibold">Credit / Debit Card</span>
                  </label>
                  <label className="flex items-center gap-16 p-16 border border-border cursor-pointer opacity-50">
                    <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    disabled />
                  
                    <span>PayPal (Coming Soon)</span>
                  </label>
                </div>

                <div className="flex flex-col gap-16 mt-16">
                  <Input label="Cardholder Name" required />
                  <Input
                  label="Card Number"
                  placeholder="0000 0000 0000 0000"
                  required />
                
                  <div className="grid grid-cols-2 gap-16">
                    <Input label="Expiry Date" placeholder="MM/YY" required />
                    <Input label="CVC" placeholder="123" required />
                  </div>
                </div>
              </motion.div>
            }

            {step === 3 &&
            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              className="flex flex-col gap-32">
              
                <h2 className="text-xl font-bold uppercase tracking-wider border-b border-border pb-16">
                  Review Order
                </h2>

                <div className="bg-bg-surface border border-border p-24 flex flex-col gap-16">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold uppercase mb-8">
                        Shipping Address
                      </h3>
                      <p className="text-text-secondary text-sm">
                        John Doe
                        <br />
                        123 Fashion Ave, Apt 4B
                        <br />
                        New York, NY 10001
                        <br />
                        United States
                      </p>
                    </div>
                    <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-sm text-accent hover:underline">
                    
                      Edit
                    </button>
                  </div>
                </div>

                <div className="bg-bg-surface border border-border p-24 flex flex-col gap-16">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold uppercase mb-8">
                        Payment Method
                      </h3>
                      <p className="text-text-secondary text-sm">
                        Visa ending in 4242
                      </p>
                    </div>
                    <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-sm text-accent hover:underline">
                    
                      Edit
                    </button>
                  </div>
                </div>
              </motion.div>
            }

            <div className="mt-48 flex gap-16">
              {step > 1 &&
              <Button
                type="button"
                variant="secondary"
                onClick={() => setStep(step - 1)}>
                
                  Back
                </Button>
              }
              <Button
                type="submit"
                size="lg"
                className="flex-1"
                isLoading={isProcessing}>
                
                {step === 3 ? 'Place Order' : 'Continue'}
              </Button>
            </div>
          </form>
        </div>

        {/* Order Summary Sidebar */}
        <div className="w-full lg:w-96 flex-shrink-0">
          <div className="bg-bg-surface border border-border p-32 sticky top-120">
            <h2 className="text-xl font-bold uppercase tracking-wider mb-24">
              Order Summary
            </h2>

            <div className="flex flex-col gap-16 border-b border-border pb-24 mb-24">
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">
                  Oversized Wool Coat (x1)
                </span>
                <span>$450</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-secondary">
                  Structured Leather Jacket (x2)
                </span>
                <span>$1780</span>
              </div>
            </div>

            <div className="flex flex-col gap-16 border-b border-border pb-24 mb-24">
              <div className="flex justify-between text-text-secondary">
                <span>Subtotal</span>
                <span>$2230</span>
              </div>
              <div className="flex justify-between text-text-secondary">
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-lg font-bold uppercase">Total</span>
              <span className="text-2xl font-bold text-accent">$2230</span>
            </div>
          </div>
        </div>
      </div>
    </div>);

};
