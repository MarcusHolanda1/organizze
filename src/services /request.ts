import axios, { AxiosRequestConfig } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

import * as RootNavigation from "./navigation";
import ReduxStore from "../redux/store";
import { setAuthenticated } from "../redux/slices/auth";

axios.interceptors.response.use(
  async (response) => {
    return response;
  },
  async function (error) {
    if (error.response.status === 401) {
      Alert.alert(
        "Sessão expirada",
        "Por favor, faça o login novamente.",
        [
          {
            text: "OK",
            onPress: async () => {
              ReduxStore.dispatch(setAuthenticated(false)),
                RootNavigation.navigate("SignIn"),
                await AsyncStorage.removeItem("@token");
            },

            style: "cancel",
          },
        ],
        { cancelable: false }
      );
    }
    return Promise.reject(error);
  }
);

const request = async ({ url, method, data, headers }: AxiosRequestConfig) => {
  try {
    const config = {
      url,
      method,
      data,
      headers,
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
