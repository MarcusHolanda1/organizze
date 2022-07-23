import React from "react";
import * as S from "./styles";

interface PageProps {
  children?: any;
  isStack?: boolean;
  stack?: any;
  includesPadding?: boolean;
}

const Page = ({
  children,
  isStack,
  stack,
  includesPadding = true,
}: PageProps) => {
  return (
    <S.Container>
      {isStack ? (
        <>
          <S.HeaderStack>{stack}</S.HeaderStack>
          <S.Content includesPadding={includesPadding}>{children}</S.Content>
        </>
      ) : (
        <S.Content includesPadding={includesPadding}>{children}</S.Content>
      )}
    </S.Container>
  );
};
export default Page;
