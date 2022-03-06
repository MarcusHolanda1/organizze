import React from "react";
import * as S from "./styles";

interface PageProps {
  children: any;
}

const Page = ({ children }: PageProps) => {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};
export default Page;
