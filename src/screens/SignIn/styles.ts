import styled from "styled-components/native";
import { theme } from "../../theme";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 0.6;
`;

export const ContentLogin = styled.View`
  justify-content: center;
  height: 100%;
  background-color: ${theme.colors.backgroundLogin};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const ButtonLogin = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  justify-content: center;
  flex-direction: row;
  align-items: center
  background-color: ${theme.colors.primary};
  padding: ${RFValue(18)}px;
  width: ${RFPercentage(52)}px;
  border-radius: 30px;
`;

export const ContentButtonLogin = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ContentGoogleImage = styled.View`
  left: ${RFValue(-45)}px;
`;
