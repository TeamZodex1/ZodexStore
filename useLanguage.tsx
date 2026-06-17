import React, { useEffect, useState, createContext, useContext, ReactNode } from 'react';
type Language = 'en' | 'ar';
interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}
const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Home',
    'nav.shop': 'Shop',
    'nav.men': 'Men',
    'nav.women': 'Women',
    'nav.search': 'Search products...',
    'hero.title': 'REDEFINE YOUR STYLE',
    'hero.subtitle':
    'Discover the latest luxury fashion trends curated for the modern aesthetic.',
    'hero.cta': 'Shop Collection',
    'section.trending': 'Trending Now',
    'section.categories': 'Shop by Category',
    'footer.about': 'About Us',
    'footer.shop': 'Shop',
    'footer.support': 'Support',
    'footer.newsletter': 'Newsletter',
    'footer.newsletter.desc':
    'Subscribe to receive updates, access to exclusive deals, and more.',
    'footer.subscribe': 'Subscribe',
    'footer.rights': '© 2026 LUXE. All rights reserved.',
    'product.addToCart': 'Add to Cart',
    'product.outOfStock': 'Out of Stock',
    'product.quickView': 'Quick View',
    'auth.signIn': 'Sign In',
    'auth.signUp': 'Sign Up',
    'auth.email': 'Email Address',
    'auth.password': 'Password',
    'auth.forgotPassword': 'Forgot Password?',
    'auth.rememberMe': 'Remember me',
    'auth.noAccount': "Don't have an account?",
    'auth.hasAccount': 'Already have an account?'
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.shop': 'المتجر',
    'nav.men': 'رجال',
    'nav.women': 'نساء',
    'nav.search': 'ابحث عن المنتجات...',
    'hero.title': 'أعد تعريف أسلوبك',
    'hero.subtitle':
    'اكتشف أحدث صيحات الموضة الفاخرة المصممة للجماليات الحديثة.',
    'hero.cta': 'تسوق التشكيلة',
    'section.trending': 'الأكثر رواجاً',
    'section.categories': 'تسوق حسب الفئة',
    'footer.about': 'معلومات عنا',
    'footer.shop': 'المتجر',
    'footer.support': 'الدعم',
    'footer.newsletter': 'النشرة الإخبارية',
    'footer.newsletter.desc':
    'اشترك لتلقي التحديثات والوصول إلى العروض الحصرية والمزيد.',
    'footer.subscribe': 'اشترك',
    'footer.rights': '© 2026 LUXE. جميع الحقوق محفوظة.',
    'product.addToCart': 'أضف إلى السلة',
    'product.outOfStock': 'نفدت الكمية',
    'product.quickView': 'نظرة سريعة',
    'auth.signIn': 'تسجيل الدخول',
    'auth.signUp': 'إنشاء حساب',
    'auth.email': 'البريد الإلكتروني',
    'auth.password': 'كلمة المرور',
    'auth.forgotPassword': 'هل نسيت كلمة المرور؟',
    'auth.rememberMe': 'تذكرني',
    'auth.noAccount': 'ليس لديك حساب؟',
    'auth.hasAccount': 'لديك حساب بالفعل؟'
  }
};
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);
export const LanguageProvider = ({ children }: {children: ReactNode;}) => {
  const [language, setLanguage] = useState<Language>('en');
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);
  const toggleLanguage = () => {
    setLanguage((prev) => prev === 'en' ? 'ar' : 'en');
  };
  const t = (key: string): string => {
    return translations[language][key] || key;
  };
  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        t,
        dir: language === 'ar' ? 'rtl' : 'ltr'
      }}>
      
      {children}
    </LanguageContext.Provider>);

};
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};