import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { theme } from "../../theme";

export const HelloContent = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: ${RFValue(theme.spacing.n12)}px;
`;
