import styled from "styled-components/native";

import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../../../theme";

interface Props {
  backgroundColor: string;
}

export const Button = styled.TouchableOpacity`
  background-color: ${({ backgroundColor }: Props) => backgroundColor};
  border-radius: 20px;
  padding: ${RFValue(theme.spacing.n16)}px;
`;
