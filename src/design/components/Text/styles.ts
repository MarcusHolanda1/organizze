import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../../theme";

interface Text {
  color: string;
  fontFamily: string;
}

export const H1 = styled.Text<Text>`
  color: ${(props) => props.color};

  font-size: ${RFValue(36)}px;
  font-family: ${(props) => props.fontFamily};
`;

export const H3 = styled.Text<Text>`
  color: ${(props) => props.color};
  font-size: ${RFValue(24)}px;
  font-family: ${(props) => props.fontFamily};
`;

export const H4 = styled.Text<Text>`
  color: ${(props) => props.color};
  font-size: ${RFValue(18)}px;
  font-family: ${(props) => props.fontFamily};
`;

export const P = styled.Text<Text>`
  color: ${(props) => props.color};
  font-size: ${RFValue(16)}px;
  font-family: ${(props) => props.fontFamily};
`;

export const SMALL = styled.Text<Text>`
  color: ${(props) => props.color};
  font-size: ${RFValue(8)}px;
  font-family: ${(props) => props.fontFamily};
`;
