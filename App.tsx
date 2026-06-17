import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './hooks/useLanguage';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { SignIn } from './pages/auth/SignIn';
import { SignUp } from './pages/auth/SignUp';
import { ForgotPassword } from './pages/auth/ForgotPassword';
import { ResetPassword } from './pages/auth/ResetPassword';
import { EmailVerification } from './pages/auth/EmailVerification';
import { Shop } from './pages/Shop';
import { Product } from './pages/Product';
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { OrderConfirmation } from './pages/OrderConfirmation';
import { Wishlist } from './pages/Wishlist';
import { AIAssistant } from './components/layout/AIAssistant';
// Dark mode initialization
const ThemeInitializer = () => {
  useEffect(() => {
    // Default to dark luxury theme
    document.documentElement.classList.add('dark');
  }, []);
  return null;
};
export function App() {
  return (
    <LanguageProvider>
      <ThemeInitializer />
      <Router>
        <div className="flex flex-col min-h-screen bg-bg-primary text-text-primary font-sans">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth/signin" element={<SignIn />} />
              <Route path="/auth/signup" element={<SignUp />} />
              <Route
                path="/auth/forgot-password"
                element={<ForgotPassword />} />
              
              <Route path="/auth/reset-password" element={<ResetPassword />} />
              <Route
                path="/auth/verify-email"
                element={<EmailVerification />} />
              
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route
                path="/order-confirmation"
                element={<OrderConfirmation />} />
              
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </main>
          <Footer />
          <AIAssistant />
        </div>
      </Router>
    </LanguageProvider>);

}