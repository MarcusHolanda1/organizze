import React, { useState } from "react";
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
import { Provider } from "react-redux";

import IMAGES from "./assets";
import { theme } from "./theme";
import { StartSlidePage } from "./design";
import SignIn from "./screens/SignIn";
import SLIDES from "./mocks/slide";
import store from "./redux/store";

const styles = StyleSheet.create({
  buttonCircle: {
    width: RFValue(50),
    height: RFValue(50),
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});

const Stack = createNativeStackNavigator();

function App() {
  const [showHome, setShowHome] = useState<boolean>(false);

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
    // <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    // </Provider>
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
export default App;
