import React, { useCallback } from "react";
import { Image } from "react-native";
import * as AuthSession from "expo-auth-session";
import { useNavigation } from "@react-navigation/native";

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

const SignIn = () => {
  const handleSignIn = useCallback(async () => {
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
    const { type, params } = (await AuthSession.startAsync({
      authUrl,
    })) as AuthResponse;
  }, []);

  return (
    <>
      <StartSlidePage />
      <S.Container>
        <S.ContentLogin>
          <S.ContentButtonLogin>
            <S.ButtonLogin onPress={handleSignIn}>
              <S.ContentGoogleImage>
                <Image source={IMAGES.login.google} />
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
