import React, { useEffect, useState } from "react";

import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

import * as S from "./styles";
import { Page, Text, CardHome } from "../../design";
import { theme } from "../../theme";
import { useStorage, useDispatchStorage } from "../../redux/hooks";
import { setDataUser } from "../../redux/slices/auth";
import request from "../../services /request";
import { WeatherData } from "../../types/responses";
import { getDateNow } from "../../utils";
import { weatherConditionsMock } from "../../mocks/weatherConditions";
import DynamicSvg from "../../design/components/DynamicSvg";

interface ILocationProps {
  coords: {
    accuracy: number;
    altitude: number;
    altitudeAccuracy: number;
    heading: number;
    latitude: number;
    longitude: number;
    speed: number;
  };
  timestamp: number;
}

interface ICurrentTemperature {
  name: string;
  phrase: string;
}

const Home = () => {
  const { GOOGLE_OAUTH2_API } = process.env;
  const { WEATHER_API } = process.env;
  const { WEATHER_KEY } = process.env;

  const [location, setLocation] = useState<ILocationProps | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const [currentTemperature, setCurrentTemperature] =
    useState<ICurrentTemperature | null>(null);

  const { dataUser } = useStorage();
  const dispatch = useDispatchStorage();

  const dateNow = getDateNow();

  const loadProfile = async () => {
    try {
      const token = await AsyncStorage.getItem("@token");

      const response = await request({
        url: `${GOOGLE_OAUTH2_API}/userinfo?alt=json&access_token=${token}`,
        method: "GET",
      });

      const userData = response.data;

      dispatch(setDataUser(userData));
    } catch (error: any) {
      throw new Error(error.response.data);
    }
  };

  const loadCurrentLocation = async () => {
    try {
      const response = await request({
        url: `${WEATHER_API}/current.json?key=${WEATHER_KEY}&q=${location?.coords.latitude},${location?.coords.longitude}&aqi=no`,
        method: "GET",
      });

      setWeatherData(response.data);
    } catch (error: any) {
      return error.response.data;
    }
  };

  const filterConditions = () => {
    weatherConditionsMock.filter((condition) => {
      if (weatherData) {
        if (
          condition.sunny.nightCondition.includes(
            weatherData?.current.condition.text
          )
        ) {
          setCurrentTemperature({
            phrase: condition.sunny.nightPhrase,
            name: condition.sunny.name,
          });
        }
        if (
          condition.sunny.condition.includes(
            weatherData?.current.condition.text
          )
        ) {
          setCurrentTemperature({
            phrase: condition.sunny.phrase,
            name: condition.sunny.name,
          });
        }
        if (
          condition.cloud.condition.includes(
            weatherData?.current.condition.text
          )
        ) {
          setCurrentTemperature({
            phrase: condition.cloud.phrase,
            name: condition.cloud.name,
          });
        }
        if (
          condition.partlyCloud.condition.includes(
            weatherData?.current.condition.text
          )
        ) {
          setCurrentTemperature({
            phrase: condition.partlyCloud.phrase,
            name: condition.partlyCloud.name,
          });
        }
        if (
          condition.rain.condition.includes(weatherData?.current.condition.text)
        ) {
          setCurrentTemperature({
            phrase: condition.rain.phrase,
            name: condition.rain.name,
          });
        }
        if (
          condition.snow.condition.includes(weatherData?.current.condition.text)
        ) {
          setCurrentTemperature({
            phrase: condition.snow.phrase,
            name: condition.snow.name,
          });
        }
      }
    });
  };

  useEffect(() => {
    loadProfile();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Oops...",
          "Você precisa habilitar as permissões de localização para utilizar as funcionalidades do aplicativo!"
        );
        return;
      }

      let location: any = await Location.getCurrentPositionAsync({});

      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    if (location) {
      loadCurrentLocation();
    }
  }, [location]);

  useEffect(() => {
    if (weatherData) {
      filterConditions();
    }
  }, [weatherData]);

  return (
    <Page>
      <S.HelloContent>
        <Text
          type="h3"
          fontFamily={theme.fonts.bold.fontFamily}
          color={theme.colors.primaryBold}
        >
          Olá, {dataUser?.given_name}
        </Text>
      </S.HelloContent>
      <CardHome>
        <S.ContentTitleAndData>
          <S.ContentTitle>
            <Text type="h4" color={theme.colors.primaryBold}>
              {currentTemperature?.phrase}
            </Text>
          </S.ContentTitle>
          <Text type="small">{dateNow}</Text>
        </S.ContentTitleAndData>
        <S.ContentImageAndInformation>
          <S.ContainertDegress>
            <Text
              type="h1"
              fontFamily={theme.fonts.bold.fontFamily}
              color={theme.colors.primaryMedium}
            >
              {weatherData?.current.temp_c}
              <S.ContentDegreesText>
                <Text type="p" color={theme.colors.primaryMedium}>
                  ºc
                </Text>
              </S.ContentDegreesText>
            </Text>
            <S.ContentLocationName>
              <Text type="small">{weatherData?.location.name}</Text>
            </S.ContentLocationName>
          </S.ContainertDegress>

          <S.ContentFooterCard>
            <DynamicSvg type={currentTemperature?.name} />
          </S.ContentFooterCard>
        </S.ContentImageAndInformation>
      </CardHome>
    </Page>
  );
};
export default Home;
