import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { theme } from "../../../theme";

interface Props {
  backgroundColorDropdownButton?: string;
}

export const Content = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const ContentDropdown = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #e2e1e5;
  border-bottom-left-radius: ${RFValue(theme.spacing.n8)}px;
  border-bottom-right-radius: ${RFValue(theme.spacing.n8)}px;
  position: absolute;
  width: 100%;
  top: ${RFValue(60)}px;
`;

export const DropdownButton = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(50)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${RFValue(theme.spacing.n12)}px;
  background-color: ${(props: Props) => props.backgroundColorDropdownButton};
`;
