import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { theme } from "../../../theme";

export const Container = styled.View`
  padding: ${RFValue(theme.spacing.n8)}px;
  border: 1px solid ${theme.colors.ice};
  border-radius: 8px;
`;
