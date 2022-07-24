export type Theme = {
  colors: {
    error: string;
    background: string;
    primary: string;
    primaryLight: string;
    primaryMedium: string;
    primaryBold: string;
    secondary: string;
    secondaryLight: string;
    green: string;
    greenLight: string;
    backgroundLogin: string;
    black: string;
    ice: string;
    basic: string;
  };
  fonts: {
    regular: {
      fontFamily: string;
    };
    bold: {
      fontFamily: string;
    };
  };
  spacing: {
    n2: number;
    n4: number;
    n6: number;
    n8: number;
    n10: number;
    n12: number;
    n16: number;
    n18: number;
    n20: number;
    n24: number;
    n32: number;
    n40: number;
  };
};
