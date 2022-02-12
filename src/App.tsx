import React, { useState } from "react";
import StartSlidePage from "./design/structures/startSlide";
import AppIntroSlider from "react-native-app-intro-slider";
import { Text, Image, StyleSheet, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import {
  useFonts,
  ShortStack_400Regular,
} from "@expo-google-fonts/short-stack";
import AppLoading from "expo-app-loading";
import IMAGES from "./assets";
import { Theme } from "./theme";

const slides = [
  {
    key: "1",
    image: IMAGES.startImages.startTasks,
    text: "Organize sua vida alinhando suas tarefas",
  },
  {
    key: "2",
    image: IMAGES.startImages.startFood,
    text: "Organize sua alimentação com a gente",
  },
  {
    key: "3",
    image: IMAGES.startImages.startDiary,
    text: "Desabafe sobre seu dia com nosso querido diário",
  },
];

const styles = StyleSheet.create({
  buttonCircle: {
    width: RFValue(50),
    height: RFValue(50),
    backgroundColor: Theme.colors.primary,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
});

function App() {
  const [showHome, setShowHome] = useState<boolean>(false);

  const [fontsLoaded] = useFonts({
    ShortStack_400Regular,
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

  if (showHome) {
    return <Text>Entrou home</Text>;
  } else {
    return (
      <AppIntroSlider
        renderItem={renderSlides}
        data={slides}
        activeDotStyle={{ backgroundColor: "#000" }}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
      />
    );
  }
}
export default App;
