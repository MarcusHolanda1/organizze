import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../../theme";

interface Text {
  color: string;
}

export const H1 = styled.Text<Text>`
  color: ${(props) => props.color};
  font-size: ${RFValue(36)}px;
  font-family: ${theme.fonts.bold.fontFamily};
`;

export const H3 = styled.Text<Text>`
  color: ${(props) => props.color};
  font-size: ${RFValue(24)}px;
  font-family: ${theme.fonts.regular.fontFamily};
`;

export const H4 = styled.Text<Text>`
  color: ${(props) => props.color};
  font-size: ${RFValue(18)}px;
  font-family: ${theme.fonts.bold.fontFamily};
`;

export const P = styled.Text<Text>`
  color: ${(props) => props.color};
  font-size: ${RFValue(16)}px;
  font-family: ${theme.fonts.regular.fontFamily};
`;

export const SMALL = styled.Text<Text>`
  color: ${(props) => props.color};
  font-size: ${RFValue(8)}px;
  font-family: ${theme.fonts.regular.fontFamily};
`;
