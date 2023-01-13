import styled from "styled-components/native";
import { StatusBar, Platform } from "react-native";

import { theme } from "../../../theme";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

interface Props {
  includesPadding?: boolean;
}

export const Container = styled.SafeAreaView`
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;

export const Content = styled.View<Props>`
  padding: ${(props) =>
    props.includesPadding ? RFValue(theme.spacing.n16) : 0}px;
  height: ${RFPercentage(95)}px;
`;

export const HeaderStack = styled.View`
  width: 100%;
  padding: ${RFValue(theme.spacing.n8)}px;
`;
