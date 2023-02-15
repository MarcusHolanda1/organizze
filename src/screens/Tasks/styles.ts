import styled from "styled-components/native";
import { StatusBar, Platform } from "react-native";

import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../theme";

export const ContentHeader = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Container = styled.View`
  flex-direction: column;

  padding: 0;
`;

export const ContainerTasks = styled.View`
  flex-direction: column;

  padding: 0 ${RFValue(theme.spacing.n16)}px ${RFValue(theme.spacing.n12)}px
    ${RFValue(theme.spacing.n16)}px;
`;

export const ContainerButtonCreateTask = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  bottom: ${Platform.OS === "android" ? RFValue(60) : RFValue(30)}px;
  left: 0;
`;
export const ContentButton = styled.View`
  flex-direction: row;
`;

export const ContentMoreText = styled.View`
  padding-right: ${RFValue(10)}px;
`;

export const Header = styled.View`
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
  padding: ${RFValue(theme.spacing.n8)}px;
`;

export const ContentCardTasks = styled.View`
  padding: ${RFValue(theme.spacing.n8)}px;

  flex-direction: row;
  justify-content: space-between;
`;

export const ContentCalendar = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const StatusCircle = styled.View`
  width: ${RFValue(12)}px;
  height: ${RFValue(12)}px;
  border-radius: ${44 / 2}px;
  background: red;
`;

export const ContentLeft = styled.View``;

export const ContentRight = styled.View`
  justify-content: center;
  align-items: center;
`;

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
