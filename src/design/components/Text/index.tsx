import React from "react";

import { StyleProp, TextStyle } from "react-native";

import * as S from "./styles";
import { theme } from "../../../theme";

interface Props {
  children: any;
  type?: "h1" | "h3" | "h4" | "p" | "small" | "p12";
  color?: string;
  fontFamily?: string;
  style?: StyleProp<TextStyle>;
}

const Text = ({
  children,
  type = "p",
  color = theme.colors.background,
  fontFamily = theme.fonts.regular.fontFamily,
  style,
}: Props) => {
  const TextComponent = {
    h1: S.H1,
    h3: S.H3,
    h4: S.H4,
    p: S.P,
    p12: S.P12,
    small: S.SMALL,
  }[type];
  return (
    <TextComponent color={color} fontFamily={fontFamily} style={style}>
      {children}
    </TextComponent>
  );
};
export default Text;
