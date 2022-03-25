import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface CardProps {
  backgroundColor: string;
}

export const Container = styled.View<CardProps>`
  padding-top: ${RFValue(8)}px
  padding-left: ${RFValue(8)}px
  padding-right: ${RFValue(8)}px
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${RFValue(8)}px;
`;
