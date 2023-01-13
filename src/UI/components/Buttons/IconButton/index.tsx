import React from "react";

import * as S from "./styles";

interface IIconButtonProps {
  backgroundColor?: string;
  children: React.ReactNode;
  onPress?: () => void;
}

const IconButton = ({
  backgroundColor,
  children,
  onPress,
}: IIconButtonProps) => {
  return (
    <S.Container onPress={onPress} backgroundColor={backgroundColor}>
      {children}
    </S.Container>
  );
};
export default IconButton;
