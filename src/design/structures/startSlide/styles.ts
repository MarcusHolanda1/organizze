import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Dimensions } from "react-native";
import { Theme } from "../../../theme";

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
`;

export const ContentTop = styled.View`
  flex: 4;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentMid = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
`;

export const ContentBottom = styled.View`
  flex: 3;
  flex-direction: row;
  justify-content: space-between;
  padding: ${RFValue(24)}px;
`;

export const ContentBubbleLeft = styled.View`
  align-self: flex-start;
  margin-top: ${RFValue(60)}px;
`;

export const ContentBubbleRight = styled.View`
  align-self: flex-start;
`;

export const Bubble = styled.Image``;

export const StartImage = styled.Image`
  width: ${RFValue(310)}px;
  height: ${RFPercentage(30)}px;
`;

export const NextBubble = styled.ImageBackground`
  width: ${RFValue(160)}px;
  height: ${RFValue(200)}px;
`;

export const NextButton = styled.TouchableOpacity`
  align-self: flex-end;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: ${Math.round(
    Dimensions.get("window").width + Dimensions.get("window").height
  ) / 2};
  width: ${Dimensions.get("window").width * 0.2};
  height: ${Dimensions.get("window").width * 0.2};
  background-color: ${Theme.colors.primary};
`;

export const IconNext = styled.Image``;

export const ContentButtonNext = styled.View`
  align-self: flex-end;
  flex-direction: row;
  height: 100%;
`;

export const ContentBoxText = styled.View`
  max-width: ${RFValue(260)}px;
  /* background: red; */
  text-align: left;
`;

export const TextStart = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: "ShortStack_400Regular";
`;
