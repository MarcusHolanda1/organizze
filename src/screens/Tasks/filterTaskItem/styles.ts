import styled from "styled-components/native";
import { StatusBar, Platform } from "react-native";

import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../../theme";

export const ContentFlatlist = styled.View`
  padding-left: ${RFValue(theme.spacing.n8)}px;
  padding-bottom: ${RFValue(theme.spacing.n8)}px;
`;
