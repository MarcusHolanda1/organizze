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
    n2: string;
    n4: string;
    n6: string;
    n8: string;
    n12: string;
    n16: string;
    n24: string;
    n32: string;
    n40: string;
  };
};
