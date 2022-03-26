import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { theme } from "../../theme";

export const ContentMyProfile = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: ${RFValue(theme.spacing.n24)}px;
`;

export const ContentPictureProfile = styled.View`
  justify-content: center;
  align-items: center;
  padding-bottom: ${RFValue(theme.spacing.n32)}px;
`;

export const ContentProfileInfos = styled.View`
  text-align: left;
  background-color: red;
`;

export const ContainerProfileInfo = styled.View``;

export const ContentProfileInfo = styled.View`
  padding-top: ${RFValue(theme.spacing.n8)}px;
  padding-bottom: ${RFValue(theme.spacing.n12)}px;
`;

export const LogoutButton = styled.TouchableOpacity``;

export const ContentLogout = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: ${RFValue(theme.spacing.n40)}px;
`;
