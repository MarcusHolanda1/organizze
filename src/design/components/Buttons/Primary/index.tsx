import React from "react";

import * as S from "./styles";

interface IPrimaryButtonProps {
  children: React.ReactNode;
  backgroundColor: string;
  onPress: () => void;
}

const PrimaryButton = ({
  children,
  backgroundColor,
  onPress,
}: IPrimaryButtonProps) => {
  return (
    <S.Button onPress={onPress} backgroundColor={backgroundColor}>
      {children}
    </S.Button>
  );
};
export default PrimaryButton;
