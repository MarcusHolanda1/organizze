import React from "react";
import IMAGES from "../../../assets";
import * as S from "./styles";

type Props = {
  source: any;
  text: string;
};

const StartSlidePage = ({ source, text }: Props) => {
  return (
    <S.Container>
      <S.ContentTop>
        <S.ContentBubbleLeft>
          <S.Bubble source={IMAGES.bubbles.bubbleLeft} />
        </S.ContentBubbleLeft>
        <S.ContentBubbleRight>
          <S.Bubble source={IMAGES.bubbles.bubbleRight} />
        </S.ContentBubbleRight>
      </S.ContentTop>
      <S.ContentMid>
        <S.StartImage source={source} />
      </S.ContentMid>
      <S.ContentBottom>
        <S.ContentBoxText>
          <S.TextStart>{text}</S.TextStart>
        </S.ContentBoxText>
        {/* <S.ContentButtonNext>
          <S.NextButton>
            <S.IconNext source={IMAGES.bubbles.arrowNext} />
          </S.NextButton>
        </S.ContentButtonNext> */}
      </S.ContentBottom>
    </S.Container>
  );
};
export default StartSlidePage;
