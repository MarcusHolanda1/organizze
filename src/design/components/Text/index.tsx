import React from "react";
import * as S from "./styles";
import { theme } from "../../../theme";

interface Props {
  children: any;
  type?: "h1" | "h3" | "h4" | "p" | "small";
  color?: string;
  fontFamily?: string;
}

const Text = ({
  children,
  type = "p",
  color = theme.colors.background,
  fontFamily = theme.fonts.regular.fontFamily,
}: Props) => {
  const TextComponent = {
    h1: S.H1,
    h3: S.H3,
    h4: S.H4,
    p: S.P,
    small: S.SMALL,
  }[type];
  return (
    <TextComponent color={color} fontFamily={fontFamily}>
      {children}
    </TextComponent>
  );
};
export default Text;
