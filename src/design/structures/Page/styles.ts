import styled from "styled-components/native";
import { StatusBar, Platform } from "react-native";

import { theme } from "../../../theme";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.SafeAreaView`
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;

export const Content = styled.View`
  padding: ${RFValue(theme.spacing.n16)}px;
`;
