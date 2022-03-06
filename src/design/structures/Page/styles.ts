import styled from "styled-components/native";
import { StatusBar, Platform } from "react-native";

import { theme } from "../../../theme";

export const Container = styled.SafeAreaView`
  padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
`;

export const Content = styled.View`
  padding: ${theme.spacing.n16};
`;
