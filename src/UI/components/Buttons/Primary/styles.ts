import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../../../theme";

interface Props {
  backgroundColor: string;
  disabled?: boolean;
}

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${(props: Props) =>
    props.disabled ? theme.colors.basic : props.backgroundColor};
  border-radius: 20px;
  padding: ${RFValue(theme.spacing.n16)}px;
`;
