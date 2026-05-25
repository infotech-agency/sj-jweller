export type ThemeType = 'rose-gold' | 'emerald' | 'black-gold';

export interface ThemeConfig {
  name: string;
  id: ThemeType;
  description: string;
}

export const themes: Record<ThemeType, ThemeConfig> = {
  'rose-gold': {
    name: 'Rose Gold Luxury',
    id: 'rose-gold',
    description: 'Soft blush tones with warm rose gold accents',
  },
  emerald: {
    name: 'Emerald Royal',
    id: 'emerald',
    description: 'Rich emerald greens with golden accents',
  },
  'black-gold': {
    name: 'Black Gold Premium',
    id: 'black-gold',
    description: 'Sophisticated black with gleaming gold',
  },
};

export const setTheme = (theme: ThemeType) => {
  if (typeof document !== 'undefined') {
    document.body.classList.remove('theme-rose-gold', 'theme-emerald', 'theme-black-gold');
    if (theme !== 'rose-gold') {
      document.body.classList.add(`theme-${theme}`);
    }
    localStorage.setItem('jewelry-theme', theme);
  }
};

export const getTheme = (): ThemeType => {
  if (typeof localStorage === 'undefined') return 'rose-gold';
  return (localStorage.getItem('jewelry-theme') as ThemeType) || 'rose-gold';
};

export const initTheme = () => {
  const theme = getTheme();
  setTheme(theme);
};
