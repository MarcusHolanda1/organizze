import React from "react";

import * as S from "./styles";

interface IContainerInputProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

const ContainerInput = ({
  children,
  backgroundColor,
}: IContainerInputProps) => {
  return <S.Container background={backgroundColor}>{children}</S.Container>;
};
export default ContainerInput;
