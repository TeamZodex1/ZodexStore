import { Product } from '../types';

export const products: Product[] = [
{
  id: '1',
  name: 'Oversized Wool Coat',
  nameAr: 'معطف صوف واسع',
  category: 'Outerwear',
  price: 450,
  originalPrice: 550,
  images: [
  'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800'],

  colors: [
  { hex: '#000000', name: 'Black' },
  { hex: '#D2B48C', name: 'Camel' }],

  sizes: ['S', 'M', 'L', 'XL'],
  tags: ['winter', 'trending', 'new'],
  rating: 4.8,
  inStock: true,
  gender: 'women',
  description:
  'A luxurious oversized wool coat perfect for layering during the colder months. Features a double-breasted front and deep pockets.',
  descriptionAr:
  'معطف صوف واسع فاخر مثالي للارتداء في طبقات خلال الأشهر الباردة. يتميز بواجهة مزدوجة الصدر وجيوب عميقة.'
},
{
  id: '2',
  name: 'Structured Leather Jacket',
  nameAr: 'سترة جلدية مهيكلة',
  category: 'Outerwear',
  price: 890,
  images: [
  'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1520975954732-57dd22299614?auto=format&fit=crop&q=80&w=800'],

  colors: [{ hex: '#000000', name: 'Black' }],
  sizes: ['M', 'L', 'XL'],
  tags: ['leather', 'classic'],
  rating: 4.9,
  inStock: true,
  gender: 'men',
  description:
  'Premium full-grain leather jacket with a structured fit. Silver hardware and asymmetric zip closure.',
  descriptionAr:
  'سترة من الجلد الطبيعي الفاخر بقصة مهيكلة. إكسسوارات فضية وإغلاق بسحاب غير متماثل.'
},
{
  id: '3',
  name: 'Silk Slip Dress',
  nameAr: 'فستان حرير منزلق',
  category: 'Dresses',
  price: 280,
  images: [
  'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&q=80&w=800'],

  colors: [
  { hex: '#C9A96E', name: 'Gold' },
  { hex: '#800020', name: 'Burgundy' },
  { hex: '#000000', name: 'Black' }],

  sizes: ['XS', 'S', 'M', 'L'],
  tags: ['evening', 'elegant'],
  rating: 4.7,
  inStock: true,
  gender: 'women',
  description:
  '100% pure mulberry silk slip dress. Bias cut for a flattering drape with adjustable spaghetti straps.',
  descriptionAr:
  'فستان منزلق من حرير التوت الخالص 100٪. قصة مائلة لثنيات جذابة مع أحزمة سباغيتي قابلة للتعديل.'
},
{
  id: '4',
  name: 'Chunky Knit Sweater',
  nameAr: 'سترة محبوكة سميكة',
  category: 'Knitwear',
  price: 195,
  originalPrice: 250,
  images: [
  'https://images.unsplash.com/photo-1614975059251-992f11792b9f?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=800'],

  colors: [
  { hex: '#F5F5DC', name: 'Cream' },
  { hex: '#808080', name: 'Grey' }],

  sizes: ['S', 'M', 'L'],
  tags: ['winter', 'casual'],
  rating: 4.5,
  inStock: false,
  gender: 'unisex',
  description:
  'Hand-knitted chunky sweater made from a soft alpaca blend. Features a ribbed crew neck and dropped shoulders.',
  descriptionAr:
  'سترة سميكة محبوكة يدويًا مصنوعة من مزيج الألبكة الناعم. تتميز برقبة دائرية مضلعة وأكتاف منسدلة.'
},
{
  id: '5',
  name: 'Tailored Wool Trousers',
  nameAr: 'بنطلون صوف مفصل',
  category: 'Bottoms',
  price: 320,
  images: [
  'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&q=80&w=800'],

  colors: [
  { hex: '#1C1C1C', name: 'Charcoal' },
  { hex: '#000080', name: 'Navy' }],

  sizes: ['S', 'M', 'L', 'XL'],
  tags: ['formal', 'classic', 'new'],
  rating: 4.6,
  inStock: true,
  gender: 'men',
  description:
  'Impeccably tailored wool trousers with a slim-straight silhouette. Features pressed creases and a hidden clasp closure.',
  descriptionAr:
  'بنطلون صوف مفصل بإتقان بقصة مستقيمة ضيقة. يتميز بكسرات مكوية وإغلاق بمشبك مخفي.'
},
{
  id: '6',
  name: 'Minimalist Leather Bag',
  nameAr: 'حقيبة جلدية بسيطة',
  category: 'Accessories',
  price: 680,
  originalPrice: 780,
  images: [
  'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800'],

  colors: [
  { hex: '#000000', name: 'Black' },
  { hex: '#8B4513', name: 'Saddle Brown' }],

  sizes: ['One Size'],
  tags: ['accessories', 'trending'],
  rating: 4.9,
  inStock: true,
  gender: 'women',
  description:
  'Handcrafted Italian leather tote with clean lines and minimal hardware. Spacious interior with suede lining.',
  descriptionAr:
  'حقيبة توت من الجلد الإيطالي المصنوع يدويًا بخطوط نظيفة وإكسسوارات بسيطة. داخل واسع مع بطانة من الشامواه.'
},
{
  id: '7',
  name: 'Cashmere Turtleneck',
  nameAr: 'سترة كشمير برقبة عالية',
  category: 'Knitwear',
  price: 395,
  images: [
  'https://images.unsplash.com/photo-1434389677669-e08b4cda3a20?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1608234807905-4466023792f5?auto=format&fit=crop&q=80&w=800'],

  colors: [
  { hex: '#000000', name: 'Black' },
  { hex: '#F5F5DC', name: 'Ivory' },
  { hex: '#808080', name: 'Heather Grey' }],

  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  tags: ['winter', 'luxury', 'new'],
  rating: 4.8,
  inStock: true,
  gender: 'unisex',
  description:
  'Ultra-soft 100% Mongolian cashmere turtleneck. Lightweight yet warm with a relaxed fit and ribbed cuffs.',
  descriptionAr:
  'سترة برقبة عالية من الكشمير المنغولي الناعم 100٪. خفيفة الوزن ودافئة بقصة مريحة وأساور مضلعة.'
},
{
  id: '8',
  name: 'Suede Chelsea Boots',
  nameAr: 'حذاء تشيلسي من الشامواه',
  category: 'Shoes',
  price: 520,
  images: [
  'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&q=80&w=800'],

  colors: [
  { hex: '#D2B48C', name: 'Sand' },
  { hex: '#000000', name: 'Black' }],

  sizes: ['40', '41', '42', '43', '44', '45'],
  tags: ['shoes', 'classic'],
  rating: 4.7,
  inStock: true,
  gender: 'men',
  description:
  'Premium suede Chelsea boots with elastic side panels and a pull tab. Goodyear welted leather sole for durability.',
  descriptionAr:
  'حذاء تشيلسي من الشامواه الفاخر مع ألواح جانبية مطاطية وحلقة سحب. نعل جلدي ملحوم بتقنية جوديير للمتانة.'
},
{
  id: '9',
  name: 'Draped Midi Skirt',
  nameAr: 'تنورة ميدي مطوية',
  category: 'Bottoms',
  price: 245,
  originalPrice: 310,
  images: [
  'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1577900232427-18219b9166a0?auto=format&fit=crop&q=80&w=800'],

  colors: [
  { hex: '#000000', name: 'Black' },
  { hex: '#556B2F', name: 'Olive' }],

  sizes: ['XS', 'S', 'M', 'L'],
  tags: ['elegant', 'trending'],
  rating: 4.4,
  inStock: true,
  gender: 'women',
  description:
  'Fluid draped midi skirt in a luxe satin finish. Features an asymmetric hem and concealed side zip.',
  descriptionAr:
  'تنورة ميدي مطوية بشكل انسيابي بلمسة ساتان فاخرة. تتميز بحافة غير متماثلة وسحاب جانبي مخفي.'
},
{
  id: '10',
  name: 'Linen Blazer',
  nameAr: 'بليزر كتان',
  category: 'Outerwear',
  price: 475,
  images: [
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800'],

  colors: [
  { hex: '#F5F5DC', name: 'Natural' },
  { hex: '#000080', name: 'Navy' }],

  sizes: ['S', 'M', 'L', 'XL'],
  tags: ['summer', 'formal', 'new'],
  rating: 4.6,
  inStock: true,
  gender: 'men',
  description:
  'Unstructured linen blazer with a relaxed Mediterranean silhouette. Half-lined for breathability with horn buttons.',
  descriptionAr:
  'بليزر كتان غير مهيكل بقصة متوسطية مريحة. نصف مبطن للتهوية مع أزرار من القرن.'
},
{
  id: '11',
  name: 'Statement Earrings',
  nameAr: 'أقراط مميزة',
  category: 'Accessories',
  price: 165,
  images: [
  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800'],

  colors: [
  { hex: '#C9A96E', name: 'Gold' },
  { hex: '#C0C0C0', name: 'Silver' }],

  sizes: ['One Size'],
  tags: ['accessories', 'evening', 'new'],
  rating: 4.3,
  inStock: true,
  gender: 'women',
  description:
  'Architectural drop earrings in brushed gold vermeil. Lightweight design with a secure lever-back closure.',
  descriptionAr:
  'أقراط متدلية معمارية من الذهب المطلي المصقول. تصميم خفيف الوزن مع إغلاق رافعة آمن.'
},
{
  id: '12',
  name: 'Merino Polo Shirt',
  nameAr: 'قميص بولو من صوف الميرينو',
  category: 'Tops',
  price: 185,
  originalPrice: 225,
  images: [
  'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=800'],

  colors: [
  { hex: '#000000', name: 'Black' },
  { hex: '#FFFFFF', name: 'White' },
  { hex: '#000080', name: 'Navy' }],

  sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  tags: ['casual', 'summer'],
  rating: 4.5,
  inStock: true,
  gender: 'men',
  description:
  'Fine-gauge merino wool polo with a modern slim fit. Temperature-regulating and naturally odor-resistant.',
  descriptionAr:
  'قميص بولو من صوف الميرينو الناعم بقصة ضيقة عصرية. منظم للحرارة ومقاوم للروائح بشكل طبيعي.'
}];