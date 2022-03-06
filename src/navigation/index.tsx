import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { RFValue } from "react-native-responsive-fontsize";
import {
  useFonts,
  BalsamiqSans_400Regular,
  BalsamiqSans_700Bold,
} from "@expo-google-fonts/balsamiq-sans";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useStorage } from "../redux/hooks";
import { StartSlidePage } from "../design";
import IMAGES from "../assets";
import BottomTabNavigate from "../design/structures/BottomTabNavigate";
import SignIn from "../screens/SignIn";
import SLIDES from "../mocks/slide";
import { theme } from "../theme";

const Stack = createNativeStackNavigator();

function MainApp({ navigation }: any) {
  const [showHome, setShowHome] = useState<boolean>(false);
  const { dataUser } = useStorage();

  const [fontsLoaded] = useFonts({
    BalsamiqSans_400Regular,
    BalsamiqSans_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const renderSlides = ({ item }: any) => {
    return <StartSlidePage source={item.image} text={item.text} />;
  };

  const renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Image source={IMAGES.bubbles.arrowNext} />
      </View>
    );
  };

  const renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Image source={IMAGES.bubbles.doneNext} />
      </View>
    );
  };

  return showHome ? (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{ headerShown: false }}
      >
        {dataUser ? (
          <Stack.Screen
            name="BottomTabNavigate"
            component={BottomTabNavigate}
          />
        ) : (
          <Stack.Screen name="SignIn" component={SignIn} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <AppIntroSlider
      renderItem={renderSlides}
      data={SLIDES}
      activeDotStyle={{ backgroundColor: "#000" }}
      renderNextButton={renderNextButton}
      renderDoneButton={renderDoneButton}
      onDone={() => {
        setShowHome(true);
      }}
    />
  );
}
export default MainApp;

export const styles = StyleSheet.create({
  buttonCircle: {
    width: RFValue(50),
    height: RFValue(50),
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  shadow: {
    shadowColor: "#9999",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
