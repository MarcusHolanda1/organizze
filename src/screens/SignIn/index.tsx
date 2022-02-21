import React, { useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import * as AuthSession from "expo-auth-session";
import { useNavigation } from "@react-navigation/native";

import { AuthResponse } from "../../types/responses";
import {
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPE,
} from "../../config/google";

const SignIn = () => {
  const handleSignIn = useCallback(async () => {
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
    const { type, params } = (await AuthSession.startAsync({
      authUrl,
    })) as AuthResponse;
  }, []);

  return (
    <View>
      <Text>GOogle</Text>
      <TouchableOpacity onPress={handleSignIn}>
        <Text>CLica ai</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SignIn;
