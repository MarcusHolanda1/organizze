import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../../theme";
import { Platform } from "react-native";

export const ContainerBottomSheet = styled.View`
  padding: ${RFValue(theme.spacing.n16)}px;
`;

export const ContentAddTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContentValidateTask = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContentValidateAndPriority = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: ${RFValue(theme.spacing.n12)}px;
`;

export const ContainerButtonCreateTask = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  bottom: ${Platform.OS === "android" ? RFValue(-420) : RFValue(-450)}px;
  left: 0;
`;

export const ContentButton = styled.View`
  flex-direction: row;
`;

export const ContainerSaveButton = styled.View`
  flex-direction: column;

  padding: 0;
`;
