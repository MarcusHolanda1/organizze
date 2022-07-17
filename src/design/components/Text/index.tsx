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
  switch (type) {
    case "h1":
      return (
        <S.H1 fontFamily={fontFamily} color={color}>
          {children}
        </S.H1>
      );
    case "h3":
      return (
        <S.H3 fontFamily={fontFamily} color={color}>
          {children}
        </S.H3>
      );
    case "h4":
      return (
        <S.H4 fontFamily={fontFamily} color={color}>
          {children}
        </S.H4>
      );
    case "small":
      return (
        <S.SMALL fontFamily={fontFamily} color={color}>
          {children}
        </S.SMALL>
      );
    default:
      return (
        <S.P fontFamily={fontFamily} color={color}>
          {children}
        </S.P>
      );
  }
};
export default Text;
