import axios, { AxiosRequestConfig } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

import { checkIfTokenExpired } from "../utils";
import * as RootNavigation from "./navigation";
import ReduxStore from "../redux/store";
import { setAuthenticated } from "../redux/slices/auth";

axios.interceptors.response.use(async (config) => {
  try {
    const expires_in = await AsyncStorage.getItem("@expires_in");

    if (expires_in) {
      const tokenIsExpired = checkIfTokenExpired(expires_in);

      if (tokenIsExpired) {
        await AsyncStorage.removeItem("@token");

        Alert.alert(
          "Sessão expirada",
          "Por favor, faça o login novamente.",
          [
            {
              text: "OK",
              onPress: () => {
                ReduxStore.dispatch(setAuthenticated(false)),
                  RootNavigation.navigate("SignIn");
              },

              style: "cancel",
            },
          ],
          { cancelable: false }
        );
      }
    }
    return config;
  } catch (error: any) {
    return Promise.reject(error.response.data);
  }
});

const request = async ({ url, method, data }: AxiosRequestConfig) => {
  try {
    const config = {
      url,
      method,
      data,
    };

    const response = await axios(config);
    return {
      status: response.status,
      data: response.data,
    };
  } catch (error: any) {
    throw error.response.data;
  }
};

export default request;
