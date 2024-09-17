import { Inter, Poppins, Lato } from 'next/font/google';
import { IFont } from '@/app/interface/Fonts';

export const fallbackFonts = 'sans-serif';
export const inter = Inter({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
export const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
export const lato = Lato({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['100', '300', '400', '700', '900'],
});

export const fontsFamily: IFont = {
  gorva: `'Gorva-Demo'`,
  inter: inter.style.fontFamily,
  lato: lato.style.fontFamily,
  poppins: poppins.style.fontFamily,
};

export default fontsFamily;
