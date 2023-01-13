import React from "react";
import { theme } from "../../../theme";

import * as S from "./styles";

interface Props {
  children: any;
  backgroundColor?: string;
}

const Card = ({
  children,
  backgroundColor = theme.colors.primaryLight,
}: Props) => {
  return (
    <S.Container backgroundColor={backgroundColor}>{children}</S.Container>
  );
};
export default Card;
