import React, { useCallback } from "react";
import * as AuthSession from "expo-auth-session";

import { setAuthenticated } from "../../redux/slices/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { ParamsGoogleTokenUser } from "../../types/responses";
import { StartSlidePage, Text } from "../../UI";
import * as S from "./styles";
import IMAGES from "../../assets";
import { RESPONSE_TYPE, SCOPE } from "../../config/Google.js";
import { useDispatchStorage } from "../../redux/hooks";
import { PrimaryButton } from "../../UI/components";
import { theme } from "../../theme";

interface IAuthSession {
  type: string;
  params: ParamsGoogleTokenUser;
}

const SignIn = () => {
  const dispatch = useDispatchStorage();

  const { CLIENT_ID } = process.env;
  const { REDIRECT_URI } = process.env;

  const handleSignIn = useCallback(async () => {
    try {
      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as IAuthSession;

      if (type === "success") {
        await AsyncStorage.setItem("@token", params.access_token);
        await AsyncStorage.setItem("@expires_in", params.expires_in.toString());

        dispatch(setAuthenticated(true));
      }
    } catch (error) {
      return error;
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
          <S.ContainerButton>
            <PrimaryButton
              backgroundColor={theme.colors.primaryMedium}
              onPress={handleSignIn}
            >
              <S.ContentButton>
                <S.ContentGoogleImage>
                  <S.GoogleImage source={IMAGES.login.google} />
                </S.ContentGoogleImage>
                <Text type="h4">Entrar com o google</Text>
              </S.ContentButton>
            </PrimaryButton>
          </S.ContainerButton>
        </S.ContentLogin>
      </S.Container>
    </>
  );
};
export default SignIn;
