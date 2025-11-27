export const locales = ['de', 'uk'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'de';

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

// UI translations for static text
export const ui = {
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.places': 'Orte',
    
    // Homepage
    'hero.title.line1': 'ukrainische',
    'hero.title.line2': 'orte',
    'filter.all': 'Alle Orte',
    'filter.restaurants': 'Restaurants',
    'filter.organizations': 'Organisationen',
    'filter.medical': 'Medizinisch',
    
    // Place card
    'place.verified': 'Verifiziert',
    'place.address': 'Adresse',
    'place.hours': 'Öffnungszeiten',
    'place.phone': 'Telefon',
    'place.price': 'Preis',
    'place.insurance': 'Versicherung',
    'place.tags': 'Tags',
    
    // Submit card
    'submit.label': 'Gemeinschaft',
    'submit.title': 'Ort einreichen',
    'submit.description': 'Kennst du ein ukrainisches Geschäft, eine Organisation oder einen Service, der hier aufgeführt werden sollte? Hilf uns, unser Verzeichnis zu erweitern.',
    'submit.button': 'Ort einreichen',
    
    // Detail page
    'back.link': 'Zurück zu allen Orten',
    
    // Pagination
    'pagination.prev': 'Zurück',
    'pagination.next': 'Weiter',
    'pagination.page': 'Seite',
    'pagination.of': 'von',
    
    // Footer
    'footer.slava': 'Slava Ukraini',
    
    // Language switcher
    'lang.de': 'Deutsch',
    'lang.uk': 'Українська',
  },
  uk: {
    // Navigation
    'nav.home': 'Головна',
    'nav.places': 'Місця',
    
    // Homepage
    'hero.title.line1': 'українські',
    'hero.title.line2': 'місця',
    'filter.all': 'Усі місця',
    'filter.restaurants': 'Ресторани',
    'filter.organizations': 'Організації',
    'filter.medical': 'Медицина',
    
    // Place card
    'place.verified': 'Перевірено',
    'place.address': 'Адреса',
    'place.hours': 'Години роботи',
    'place.phone': 'Телефон',
    'place.price': 'Ціна',
    'place.insurance': 'Страхування',
    'place.tags': 'Теги',
    
    // Submit card
    'submit.label': 'Спільнота',
    'submit.title': 'Додати місце',
    'submit.description': 'Знаєте український бізнес, організацію чи сервіс, який має бути в списку? Допоможіть розширити наш довідник.',
    'submit.button': 'Додати місце',
    
    // Detail page
    'back.link': 'Назад до всіх місць',
    
    // Pagination
    'pagination.prev': 'Назад',
    'pagination.next': 'Далі',
    'pagination.page': 'Сторінка',
    'pagination.of': 'з',
    
    // Footer
    'footer.slava': 'Слава Україні',
    
    // Language switcher
    'lang.de': 'Deutsch',
    'lang.uk': 'Українська',
  },
} as const;

export function t(locale: Locale, key: keyof typeof ui.de): string {
  return ui[locale][key] || ui[defaultLocale][key] || key;
}

export function getLocaleFromPath(path: string): Locale {
  const segments = path.split('/').filter(Boolean);
  const firstSegment = segments[0];
  if (isValidLocale(firstSegment)) {
    return firstSegment;
  }
  return defaultLocale;
}

export function getLocalizedPath(path: string, locale: Locale): string {
  // Remove existing locale prefix if present
  const segments = path.split('/').filter(Boolean);
  if (isValidLocale(segments[0])) {
    segments.shift();
  }
  // Add new locale prefix
  return `/${locale}/${segments.join('/')}`;
}

