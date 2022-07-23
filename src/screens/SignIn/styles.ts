import styled from "styled-components/native";
import { theme } from "../../theme";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 0.8;
`;

export const ContentLogin = styled.View`
  justify-content: center;
  height: 100%;
  background-color: ${theme.colors.backgroundLogin};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: ${RFValue(theme.spacing.n12)}px;
`;

export const ContainerButton = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ContentGoogleImage = styled.View`
  left: ${RFValue(-45)}px;
`;

export const GoogleImage = styled.Image``;

export const ContentSocialLoginImage = styled.View`
  flex: 0.6;
  justify-content: center;
  align-items: center;
`;

export const SocialLoginImage = styled.Image`
  width: ${RFValue(380)}px;
  height: 100%;
`;

export const ContentButton = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;
