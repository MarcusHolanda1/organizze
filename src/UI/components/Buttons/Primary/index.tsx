import React from "react";
import { ActivityIndicator } from "react-native";

import * as S from "./styles";
import { Text } from "../../../../UI/components";

interface IPrimaryButtonProps {
  children: React.ReactNode;
  backgroundColor: string;
  onPress: () => void;
  disabled?: boolean;
}

const PrimaryButton = ({
  children,
  backgroundColor,
  onPress,
  disabled,
}: IPrimaryButtonProps) => {
  return (
    <S.Button
      disabled={disabled}
      onPress={onPress}
      backgroundColor={backgroundColor}
    >
      {children}
    </S.Button>
  );
};
export default PrimaryButton;
