import React from "react";

import * as S from "./styles";

interface IContainerInputProps {
  children: React.ReactNode;
}

const ContainerInput = ({ children }: IContainerInputProps) => {
  return <S.Container>{children}</S.Container>;
};
export default ContainerInput;
