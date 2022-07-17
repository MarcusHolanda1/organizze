import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { theme } from "../../../../theme";

interface CardProps {
  backgroundColor: string;
}

export const Container = styled.View<CardProps>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${RFValue(theme.spacing.n8)}px;
  padding: ${RFValue(theme.spacing.n8)}px ${RFValue(theme.spacing.n8)}px 0
    ${RFValue(theme.spacing.n8)}px;
`;
