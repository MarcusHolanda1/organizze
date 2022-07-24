import React from "react";

import * as S from "./styles";

interface IIconButtonProps {
  backgroundColor?: string;
  children: React.ReactNode;
}

const IconButton = ({ backgroundColor, children }: IIconButtonProps) => {
  return (
    <S.Container backgroundColor={backgroundColor}>{children}</S.Container>
  );
};
export default IconButton;
