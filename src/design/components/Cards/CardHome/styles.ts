import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { theme } from "../../../../theme";

interface CardProps {
  backgroundColor: string;
}

export const Container = styled.View<CardProps>`
  padding-top: ${RFValue(theme.spacing.n8)}px;
  padding-left: ${RFValue(theme.spacing.n8)}px;
  padding-right: ${RFValue(theme.spacing.n8)}px;
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${RFValue(theme.spacing.n8)}px;
`;
