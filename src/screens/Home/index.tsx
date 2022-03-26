import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import * as S from "./styles";
import { Page, Text, CardHome } from "../../design";
import { theme } from "../../theme";
import { useStorage } from "../../redux/hooks";
import { setDataUser } from "../../redux/slices/auth";

const Home = () => {
  const { responseAuth, dataUser } = useStorage();
  const dispatch = useDispatch();

  const loadProfile = async () => {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${responseAuth}`
    );
    const userInfo = await response.json();
    dispatch(setDataUser(userInfo));
  };

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <Page>
      <S.HelloContent>
        <Text type="h3" color={theme.colors.primaryBold}>
          Olá, {dataUser?.given_name}
        </Text>
      </S.HelloContent>
      <CardHome>
        <Text type="h1">STroo</Text>
      </CardHome>
    </Page>
  );
};
export default Home;
