import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { theme } from "../../theme";

export const Container = styled.View`
  padding: ${RFValue(theme.spacing.n8)}px ${RFValue(theme.spacing.n8)}px 0
    ${RFValue(theme.spacing.n8)}px;
`;

export const HelloContent = styled.View`
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: ${RFValue(theme.spacing.n12)}px;
`;

export const ContentTitleAndData = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentTitle = styled.View`
  width: ${RFPercentage(36)}px;
`;

export const ContentImageAndInformation = styled.View`
  justify-content: space-between;
  padding-top: ${RFValue(theme.spacing.n8)}px;
  flex-direction: row;
`;

export const ContentDegreesText = styled.View`
  padding-bottom: ${RFValue(theme.spacing.n18)}px;
`;

export const ContainertDegress = styled.View`
  justify-content: space-between;
  flex-direction: column;
`;

export const ContentFooterCard = styled.View``;

export const ContentImage = styled.View``;

export const ContentLocationName = styled.View`
  justify-content: flex-end;
  padding-bottom: ${RFValue(theme.spacing.n8)}px;
`;
