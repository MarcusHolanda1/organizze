import React from "react";
import { theme } from "../../../../theme";

import * as S from "./styles";

interface Props {
  children: any;
}

const CardHome = ({ children }: Props) => {
  return (
    <S.Container backgroundColor={theme.colors.primaryLight}>
      {children}
    </S.Container>
  );
};
export default CardHome;
