import React, { useCallback, useEffect } from "react";
import * as AuthSession from "expo-auth-session";
import { useDispatch } from "react-redux";
import { setDataUser } from "../../redux/slices/auth";
import { useStorage } from "../../redux/hooks";

import { AuthResponse } from "../../types/responses";
import { StartSlidePage, Text } from "../../design";
import * as S from "./styles";
import {
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPE,
} from "../../config/google";
import IMAGES from "../../assets";

const SignIn = ({ navigation }: any) => {
  const dispatch = useDispatch();

  const { dataUser } = useStorage();

  const handleSignIn = useCallback(async () => {
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
    const { type, params } = (await AuthSession.startAsync({
      authUrl,
    })) as AuthResponse;

    if (type === "success") {
      dispatch(setDataUser(params.access_token));
      navigation.navigate("BottomTabNavigate");
    }
  }, []);

  const loadProfile = async () => {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${dataUser}`
    );
    const userInfo = await response.json();
    console.log("infors aki ", userInfo);
  };

  useEffect(() => {
    loadProfile();
  }, []);

  useEffect(() => {
    if (dataUser) {
      navigation.navigate("BottomTabNavigate");
    }
  }, []);

  return (
    <>
      <StartSlidePage />
      <S.ContentSocialLoginImage>
        <S.SocialLoginImage source={IMAGES.login.socialLogin} />
      </S.ContentSocialLoginImage>
      <S.Container>
        <S.ContentLogin>
          <S.ContentButtonLogin>
            <S.ButtonLogin onPress={handleSignIn}>
              <S.ContentGoogleImage>
                <S.GoogleImage source={IMAGES.login.google} />
              </S.ContentGoogleImage>
              <Text type="h4">Entrar com o google</Text>
            </S.ButtonLogin>
          </S.ContentButtonLogin>
        </S.ContentLogin>
      </S.Container>
    </>
  );
};
export default SignIn;
