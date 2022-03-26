import React, { useCallback, useEffect } from "react";
import * as AuthSession from "expo-auth-session";
import { useDispatch } from "react-redux";
import {
  setIsAuthFalse,
  setIsAuthTrue,
  setResponseLoginUser,
} from "../../redux/slices/auth";

import { AuthResponse } from "../../types/responses";
import { StartSlidePage, Text } from "../../design";
import * as S from "./styles";
import { RESPONSE_TYPE, SCOPE } from "../../config/google";
import IMAGES from "../../assets";
import { useStorage } from "../../redux/hooks";

const { CLIENT_ID } = process.env;
const { REDIRECT_URI } = process.env;

const SignIn = () => {
  const dispatch = useDispatch();
  const { responseAuth } = useStorage();

  useEffect(() => {
    if (responseAuth) {
      dispatch(setIsAuthFalse());
    }
  }, []);

  const handleSignIn = useCallback(async () => {
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
    const { type, params } = (await AuthSession.startAsync({
      authUrl,
    })) as AuthResponse;

    if (type === "success") {
      dispatch(setResponseLoginUser(params.access_token));
      dispatch(setIsAuthTrue());
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
