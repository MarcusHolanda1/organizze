import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "../../../theme";

interface Props {
  background?: string;
}

export const Container = styled.View`
  padding: ${RFValue(theme.spacing.n8)}px;
  border: 1px solid ${theme.colors.ice};
  border-radius: 8px;
  background-color: ${(props: Props) => props.background};
`;
