import { extendTheme } from "@chakra-ui/react";

import { Accordion } from "./components/Accordion";
import { Button } from "./components/button";
import { Input } from "./components/input";
import { Link } from "./components/link";

const breakpoints = {
  sm: '388px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1464px',
}

const theme = extendTheme({
  breakpoints,
  components: {
    Accordion,
    Button, 
    Input, 
    Link,
  },
  
  fonts: {
    heading: 'Figtree',
    body: 'Figtree'
  },
  sizes: {
    container: {
      sm: '960px',
      md: '1040px',
      lg: '1160px',
      xl: '1280px',
      xxl: '1400px',
    },
  },
  colors: {
    primary: {
      0: '#000000',
      4: '#000E26',
      10: '#001b3f',
      12: '#041F43',
      17: '#112A4E',
      20: '#002f65',
      22: '#1E3559',
      25: '#003a7a',
      30: '#00458f',
      35: '#11519f',
      40: '#255dac',
      50: '#4477c7',
      60: '#6091e3',
      70: '#7cabff',
      80: '#abc7ff',
      90: '#d7e3ff',
      92: '#DFE8FF',
      94: '#E8EEFF',
      95: '#ecf0ff',
      96: '#F0F3FF',
      98: '#f9f9ff',
      99: '#fdfbff',
      100: '#ffffff',
    },
    secondary: {
      0: '#000000',
      4: '#00110D',
      10: '#06201b',
      12: '#0A241F',
      17: '#152E29',
      20: '#1c3530',
      22: '#213934',
      25: '#28403b',
      30: '#334b46',
      35: '#3e5751',
      40: '#4a635d',
      50: '#637c76',
      60: '#7c968f',
      70: '#96b1aa',
      80: '#b1ccc5',
      90: '#cde8e0',
      92: '#D2EEE6',
      94: '#D8F4EC',
      95: '#dbf7ef',
      96: '#DEFAF2',
      98: '#e5fff7',
      99: '#f3fffa',
      100: '#ffffff',
    },
    tertiary: {
      0: '#000000',
      10: '#001e2f',
      20: '#123348',
      25: '#1f3e54',
      30: '#2b4a60',
      35: '#38566c',
      40: '#446278',
      50: '#5c7a92',
      60: '#7694ad',
      70: '#90afc8',
      80: '#abcae5',
      90: '#c9e6ff',
      95: '#e6f2ff',
      98: '#f6faff',
      99: '#fcfcff',
      100: '#ffffff',
    },
    neutral: {
      0: '#000000',
      4: '#0D0E12',
      10: '#1a1b1f',
      12: '#1E1F23',
      17: '#292A2E',
      20: '#2f3033',
      22: '#343439',
      25: '#3a3b3f',
      30: '#46474a',
      35: '#525256',
      40: '#5e5e62',
      50: '#77777a',
      60: '#919094',
      70: '#ababaf',
      80: '#c7c6ca',
      90: '#e3e2e6',
      92: '#E9E7EC',
      94: '#EEEDF1',
      95: '#f2f0f4',
      96: '#F4F3F7',
      98: '#faf9fd',
      99: '#fdfbff',
      100: '#ffffff',
      },
    neutralVariant: {
      0: '#000000',
      4: '#07100E',
      10: '#141d1b',
      12: '#18211F',
      17: '#232C2A',
      20: '#293230',
      22: '#2D3734', 
      25: '#343d3b',
      30: '#3f4946',
      35: '#4b5452',
      40: '#57605d',
      50: '#6f7976',
      60: '#89938f',
      70: '#a3adaa',
      80: '#bec9c5',
      90: '#dae5e1',
      92: '#e0eae6',
      94: '#e6f0ec',
      95: '#e9f3ef',
      96: '#ecf6f2',
      98: '#f1fcf7',
      99: '#f4fffa',
      100: '#ffffff',
      },
    neutralWhite: {
      'background': 'var(--chakra-colors-neutral-100)',
      'on-background': 'var(--chakra-colors-neutral-10)',
      'surface-lowest': 'var(--chakra-colors-neutral-100)',
      'surface-low': 'var(--chakra-colors-neutral-96)',
      'surface': 'var(--chakra-colors-neutral-94)',
      'surface-high': 'var(--chakra-colors-neutral-92)',
      'surface-highest': 'var(--chakra-colors-neutral-90)',
      'on-surface': 'var(--chakra-colors-neutral-10)',
      'on-surface-dim': 'var(--chakra-colors-neutral-20)',
      'outline': 'var(--chakra-colors-neutralVariant-50)',
      'primary': 'var(--chakra-colors-primary-70)',
    },
    neutralLight: {
      'background': 'var(--chakra-colors-neutral-98)',
      'on-background': 'var(--chakra-colors-neutral-10)',
      'surface-lowest': 'var(--chakra-colors-neutral-100)',
      'surface-low': 'var(--chakra-colors-neutral-96)',
      'surface': 'var(--chakra-colors-neutral-94)',
      'surface-high': 'var(--chakra-colors-neutral-92)',
      'surface-highest': 'var(--chakra-colors-neutral-90)',
      'on-surface': 'var(--chakra-colors-neutral-10)',
      'on-surface-dim': 'var(--chakra-colors-neutral-20)',
      'outline': 'var(--chakra-colors-neutralVariant-50)',
      'primary': 'var(--chakra-colors-primary-70)',
    },
    neutralDark: {
      'background': 'var(--chakra-colors-neutral-4)',
      'on-background': 'var(--chakra-colors-neutral-90)',
      'surface-lowest': 'var(--chakra-colors-neutral-0)',
      'surface-low': 'var(--chakra-colors-neutral-10)',
      'surface': 'var(--chakra-colors-neutral-12)',
      'surface-high': 'var(--chakra-colors-neutral-17)',
      'surface-highest': 'var(--chakra-colors-neutral-22)',
      'on-surface': 'var(--chakra-colors-neutral-90)',
      'on-surface-dim': 'var(--chakra-colors-neutral-80)',
      'outline': 'var(--chakra-colors-neutralVariant-40)',
      'primary': 'var(--chakra-colors-primary-70)'
    },
    neutralVariantWhite: {
      'background': 'var(--chakra-colors-neutralVariant-100)',
      'on-background': 'var(--chakra-colors-neutralVariant-10)',
      'surface-lowest': 'var(--chakra-colors-neutralVariant-100)',
      'surface-low': 'var(--chakra-colors-neutralVariant-96)',
      'surface': 'var(--chakra-colors-neutralVariant-94)',
      'surface-high': 'var(--chakra-colors-neutralVariant-92)',
      'surface-highest': 'var(--chakra-colors-neutralVariant-90)',
      'on-surface': 'var(--chakra-colors-neutralVariant-10)',
      'outline': 'var(--chakra-colors-neutralVariantVariant-50)',
      'primary': 'var(--chakra-colors-primary-70)',
    },
    neutralVariantLight: {
      'background': 'var(--chakra-colors-neutralVariant-98)',
      'on-background': 'var(--chakra-colors-neutralVariant-10)',
      'surface-lowest': 'var(--chakra-colors-neutralVariant-100)',
      'surface-low': 'var(--chakra-colors-neutralVariant-96)',
      'surface': 'var(--chakra-colors-neutralVariant-94)',
      'surface-high': 'var(--chakra-colors-neutralVariant-92)',
      'surface-highest': 'var(--chakra-colors-neutralVariant-90)',
      'on-surface': 'var(--chakra-colors-neutralVariant-10)',
      'outline': 'var(--chakra-colors-neutralVariant-50)',
      'primary': 'var(--chakra-colors-primary-70)',
    },
    neutralVariantDark: {
      'background': 'var(--chakra-colors-neutralVariant-4)',
      'on-background': 'var(--chakra-colors-neutralVariant-90)',
      'surface-lowest': 'var(--chakra-colors-neutralVariant-0)',
      'surface-low': 'var(--chakra-colors-neutralVariant-10)',
      'surface': 'var(--chakra-colors-neutralVariant-12)',
      'surface-high': 'var(--chakra-colors-neutralVariant-17)',
      'surface-highest': 'var(--chakra-colors-neutralVariant-22)',
      'on-surface': 'var(--chakra-colors-neutralVariant-90)',
      'outline': 'var(--chakra-colors-neutralVariantVariant-40)',
      'primary': 'var(--chakra-colors-primary-70)'
    },
    primaryWhite: {
      'background': 'var(--chakra-colors-primary-100)',
      'on-background': 'var(--chakra-colors-primary-20)',
      'surface-lowest': 'var(--chakra-colors-primary-100)',
      'surface-low': 'var(--chakra-colors-primary-96)',
      'surface': 'var(--chakra-colors-primary-94)',
      'surface-high': 'var(--chakra-colors-primary-92)',
      'surface-highest': 'var(--chakra-colors-primary-90)',
      'on-surface': 'var(--chakra-colors-primary-20)',
      'container': 'var(--chakra-colors-primary-95)',
      'outline': 'var(--chakra-colors-neutral-70)',
      'primary': 'var(--chakra-colors-primary-70)',
    },
    primaryLight: {
      'background': 'var(--chakra-colors-primary-99)',
      'on-background': 'var(--chakra-colors-primary-30)',
      'surface-lowest': 'var(--chakra-colors-primary-100)',
      'surface-low': 'var(--chakra-colors-primary-96)',
      'surface': 'var(--chakra-colors-primary-94)',
      'surface-high': 'var(--chakra-colors-primary-92)',
      'surface-highest': 'var(--chakra-colors-primary-90)',
      'on-surface': 'var(--chakra-colors-primary-30)',
      'container': 'var(--chakra-colors-primary-95)',
      'outline': 'var(--chakra-colors-neutral-60)',
      'primary': 'var(--chakra-colors-primary-70)',
    },
    primaryDark: {
      'background': 'var(--chakra-colors-primary-4)',
      'on-background': 'var(--chakra-colors-primary-98)',
      'surface-lowest': 'var(--chakra-colors-primary-0)',
      'surface-low': 'var(--chakra-colors-primary-10)',
      'surface': 'var(--chakra-colors-primary-12)',
      'surface-high': 'var(--chakra-colors-primary-17)',
      'surface-highest': 'var(--chakra-colors-primary-22)',
      'on-surface': 'var(--chakra-colors-primary-98)',
      'outline': 'var(--chakra-colors-primaryVariant-40)',
      'primary': 'var(--chakra-colors-primary-70)'
    },
    secondaryWhite: {
      'background': 'var(--chakra-colors-secondary-100)',
      'on-background': 'var(--chakra-colors-neutral-30)',
      'surface-lowest': 'var(--chakra-colors-secondary-100)',
      'surface-low': 'var(--chakra-colors-secondary-96)',
      'surface': 'var(--chakra-colors-secondary-94)',
      'surface-high': 'var(--chakra-colors-secondary-92)',
      'surface-highest': 'var(--chakra-colors-secondary-90)',
      'on-surface': 'var(--chakra-colors-neutral-30)',
      'container': 'var(--chakra-colors-secondary-95)',
      'primary': 'var(--chakra-colors-secondary-70)',
    },
    secondaryLight: {
      'background': 'var(--chakra-colors-secondary-99)',
      'on-background': 'var(--chakra-colors-secondary-30)',
      'surface-lowest': 'var(--chakra-colors-secondary-100)',
      'surface-low': 'var(--chakra-colors-secondary-96)',
      'surface': 'var(--chakra-colors-secondary-94)',
      'surface-high': 'var(--chakra-colors-secondary-92)',
      'surface-highest': 'var(--chakra-colors-secondary-90)',
      'on-surface': 'var(--chakra-colors-secondary-30)',
      'container': 'var(--chakra-colors-secondary-95)',
      'primary': 'var(--chakra-colors-secondary-70)',
    },
    secondaryDark: {
      'background': 'var(--chakra-colors-secondary-4)',
      'on-background': 'var(--chakra-colors-secondary-90)',
      'surface-lowest': 'var(--chakra-colors-secondary-0)',
      'surface-low': 'var(--chakra-colors-secondary-10)',
      'surface': 'var(--chakra-colors-secondary-12)',
      'surface-high': 'var(--chakra-colors-secondary-17)',
      'surface-highest': 'var(--chakra-colors-secondary-22)',
      'on-surface': 'var(--chakra-colors-secondary-95)',
      'outline': 'var(--chakra-colors-secondaryVariant-40)',
      'primary': 'var(--chakra-colors-secondary-70)'
    },
    tertiaryWhite: {
      'background': 'var(--chakra-colors-tertiary-100)',
      'on-background': 'var(--chakra-colors-neutral-10)',
      'surface-lowest': 'var(--chakra-colors-tertiary-100)',
      'surface-low': 'var(--chakra-colors-tertiary-96)',
      'surface': 'var(--chakra-colors-tertiary-94)',
      'surface-high': 'var(--chakra-colors-tertiary-92)',
      'surface-highest': 'var(--chakra-colors-tertiary-90)',
      'on-surface': 'var(--chakra-colors-neutral-10)',
      'container': 'var(--chakra-colors-tertiary-95)',
      'primary': 'var(--chakra-colors-tertiary-70)',
    },
    tertiaryLight: {
      'background': 'var(--chakra-colors-tertiary-98)',
      'on-background': 'var(--chakra-colors-tertiary-10)',
      'surface-lowest': 'var(--chakra-colors-tertiary-100)',
      'surface-low': 'var(--chakra-colors-tertiary-96)',
      'surface': 'var(--chakra-colors-tertiary-94)',
      'surface-high': 'var(--chakra-colors-tertiary-92)',
      'surface-highest': 'var(--chakra-colors-tertiary-90)',
      'on-surface': 'var(--chakra-colors-tertiary-10)',
      'container': 'var(--chakra-colors-tertiary-95)',
      'primary': 'var(--chakra-colors-tertiary-70)',
    },
    tertiaryDark: {
      'background': 'var(--chakra-colors-tertiary-4)',
      'on-background': 'var(--chakra-colors-tertiary-90)',
      'surface-lowest': 'var(--chakra-colors-tertiary-0)',
      'surface-low': 'var(--chakra-colors-tertiary-10)',
      'surface': 'var(--chakra-colors-tertiary-12)',
      'surface-high': 'var(--chakra-colors-tertiary-17)',
      'surface-highest': 'var(--chakra-colors-tertiary-22)',
      'on-surface': 'var(--chakra-colors-tertiary-90)',
      'outline': 'var(--chakra-colors-tertiaryVariant-40)',
      'primary': 'var(--chakra-colors-tertiary-70)'
    },
  }
});

export default theme;
