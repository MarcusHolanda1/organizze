import styled from "styled-components/native";

import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { theme } from "../../theme";

export const Container = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: ${RFValue(theme.spacing.n8)}px 0 0 ${RFValue(theme.spacing.n8)}px;
`;

export const HelloContent = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: ${RFValue(theme.spacing.n12)}px;
`;

export const ContentLeft = styled.View`
  width: ${RFPercentage(30)}px;
`;

export const ButtonEnterActivity = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: ${RFValue(58)}px;
  height: ${RFValue(42)}px;
  background: ${theme.colors.primaryMedium};
  border-top-left-radius: ${RFValue(theme.spacing.n10)}px;
  border-bottom-right-radius: ${RFValue(theme.spacing.n10)}px;
`;

export const ContentButtonEnterActivity = styled.TouchableOpacity`
  justify-content: flex-end;
`;
