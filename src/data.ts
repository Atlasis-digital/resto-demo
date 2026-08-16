import p1 from './assets/photos/photo_01.jpg';
import p2 from './assets/photos/photo_02.jpg';
import p3 from './assets/photos/photo_03.jpg';
import p4 from './assets/photos/photo_04.jpg';
import p5 from './assets/photos/photo_05.jpg';
import p6 from './assets/photos/photo_06.jpg';
import p7 from './assets/photos/photo_07.jpg';

export const photos = [p1, p2, p3, p4, p5, p6, p7];

export const contact = {
  name: 'Bab Tounès',
  phone: '+216 71 000 000',
  phoneDisplay: '+216 71 000 000',
  whatsapp: '21671000000',
  address: 'Médina de Tunis, Tunisie',
  rating: '4.8',
  city: 'Tunis',
  country: 'Tunisie',
};

export type Lang = 'fr' | 'en' | 'ar';

export const i18n: Record<string, any> = {
  nav_about: { fr: 'À propos', en: 'About', ar: 'من نحن' },
  nav_menu: { fr: 'La carte', en: 'Menu', ar: 'القائمة' },
  nav_gallery: { fr: 'Galerie', en: 'Gallery', ar: 'الصور' },
  nav_contact: { fr: 'Contact', en: 'Contact', ar: 'اتصل' },
  eyebrow: { fr: 'Restaurant & Brasserie', en: 'Restaurant & Brasserie', ar: 'مطعم وبراسري' },
  hero_lead: { fr: 'La table de Bab Tounès', en: 'The Bab Tounès table', ar: 'مائدة باب تونس' },
  about_title: { fr: 'La table de Bab Tounès', en: 'The Bab Tounès table', ar: 'مائدة باب تونس' },
  about: { fr: 'Au cœur de la médina de Tunis, Bab Tounès célèbre la cuisine de la côte : poissons de ligne, légumes du marché et épices qui racontent le détroit. Une adresse chaleureuse où l\'on s\'attable tard.', en: 'In the heart of Tunis medina, Bab Tounès celebrates coastal cooking: line-caught fish, market vegetables and spices that tell the story of the strait. A warm spot where tables linger late.', ar: 'في قلب مدينة تونس العتيقة، يحتفي باب تونس بمطبخ الساحل: سمك الصنارة، خضار السوق وتوابل تروي حكاية المضيق. وجهة دافئة حيث تتأخر الموائد.' },
  hours: { fr: 'Mar–Dim · 12h–23h', en: 'Tue–Sun · 12pm–11pm', ar: 'الثلاثاء–الأحد · 12ظ–11م' },
  menu_title: { fr: 'La carte', en: 'The menu', ar: 'القائمة' },
  menu: {
    fr: [
      { cat: 'Entrées', items: [{ n: 'Brick à l\'œuf', p: '12 TND', d: 'Feuille croustillante, œuf coulant, citron.' }, { n: 'Salade méchouia', p: '14 TND', d: 'Poivrons grillés, thon, œuf dur.' }, { n: 'Soupe lablabi', p: '10 TND', d: 'Pois chiches, ail, harissa.' }] },
      { cat: 'Plats', items: [{ n: 'Poisson du jour', p: '38 TND', d: 'Selon arrivage, grillé au fenouil.' }, { n: 'Couscous poisson', p: '32 TND', d: 'Le vendredi, façon de la côte.' }, { n: 'Tagine gambas', p: '36 TND', d: 'Tomate, citron confit, coriandre.' }] },
      { cat: 'Desserts', items: [{ n: 'Makroud', p: '9 TND', d: 'Semoule farcie, miel, datte.' }, { n: 'Baklava maison', p: '11 TND', d: 'Noix, fleur d\'oranger.' }] },
    ],
    en: [
      { cat: 'Starters', items: [{ n: 'Egg brick', p: '12 TND', d: 'Crisp pastry, runny egg, lemon.' }, { n: 'Mechouia salad', p: '14 TND', d: 'Grilled peppers, tuna, hard egg.' }, { n: 'Lablabi soup', p: '10 TND', d: 'Chickpeas, garlic, harissa.' }] },
      { cat: 'Mains', items: [{ n: 'Catch of the day', p: '38 TND', d: 'Market fish, grilled with fennel.' }, { n: 'Fish couscous', p: '32 TND', d: 'Fridays, coastal style.' }, { n: 'Prawn tagine', p: '36 TND', d: 'Tomato, preserved lemon, coriander.' }] },
      { cat: 'Desserts', items: [{ n: 'Makroud', p: '9 TND', d: 'Stuffed semolina, honey, date.' }, { n: 'House baklava', p: '11 TND', d: 'Walnuts, orange blossom.' }] },
    ],
    ar: [
      { cat: 'مقبلات', items: [{ n: 'بريك بالبيض', p: '12 د.ت', d: 'عجينة مقرمشة، بيض سائل، ليمون.' }, { n: 'سلطة مشوية', p: '14 د.ت', d: 'فلفل مشوي، تونة، بيض مسلوق.' }, { n: 'شوربة لبلبي', p: '10 د.ت', d: 'حمص، ثوم، هريسة.' }] },
      { cat: 'أطباق', items: [{ n: 'سمك اليوم', p: '38 د.ت', d: 'حسب الوارد، مشوي بالشمر.' }, { n: 'كسكس سمك', p: '32 د.ت', d: 'الجمعة، على طريقة الساحل.' }, { n: 'طاجين جمبري', p: '36 د.ت', d: 'طماطم، ليمون مخلل، كزبرة.' }] },
      { cat: 'حلويات', items: [{ n: 'مقروض', p: '9 د.ت', d: 'سميد محشو، عسل، تمر.' }, { n: 'بقلاوة منزلية', p: '11 د.ت', d: 'جوز، زهر البرتقال.' }] },
    ],
  } as Record<Lang, { cat: string; items: { n: string; p: string; d: string }[] }[]>,
  gallery_title: { fr: 'Galerie', en: 'Gallery', ar: 'الصور' },
  contact_title: { fr: 'À table ?', en: 'Ready to eat?', ar: 'جاهز للأكل؟' },
  contact_text: { fr: 'Réservez votre table ou écrivez-nous pour le service de groupe.', en: 'Book your table or message us for group service.', ar: 'احجز طاولتك أو راسلنا للخدمة الجماعية.' },
  whatsapp: { fr: 'Réserver sur WhatsApp', en: 'Book on WhatsApp', ar: 'احجز عبر واتساب' },
  call: { fr: 'Appeler', en: 'Call', ar: 'اتصل' },
  rights: { fr: 'Tous droits réservés', en: 'All rights reserved', ar: 'جميع الحقوق محفوظة' },
};
