import { atom, selector } from 'recoil';
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    textInvert: string;
    white: string;
    unit: number;
  }
}

const darkTheme: DefaultTheme = {
  primary: '#520052',
  secondary: 'orange',
  background: '#18191b',
  text: 'white',
  textInvert: '#222',
  white: '#fff',
  unit: 4,
};

const lightTheme: DefaultTheme = {
  primary: '#690169',
  secondary: 'orange',
  background: '#fafafa',
  text: '#232323',
  textInvert: '#fff',
  white: '#fff',
  unit: 4,
};

export type Theme = 'light' | 'dark';

export const themeAtom = atom<'light' | 'dark'>({
  key: 'theme',
  default: 'light',
});

export const themeObjectSelector = selector({
  key: 'themeObject',
  get({ get }) {
    const themeName = get(themeAtom);

    return themeName === 'light' ? lightTheme : darkTheme;
  },
});
