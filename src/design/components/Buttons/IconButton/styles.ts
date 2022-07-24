import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

import { theme } from "../../../../theme";

interface IStyledProps {
  backgroundColor?: string;
}

export const Container = styled.TouchableOpacity<IStyledProps>`
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  // padding: ${RFValue(theme.spacing.n12)}px;
  border-radius: 15px;
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  text-align: center;
  margin-top: 0;
  text-align-vertical: center;
`;
