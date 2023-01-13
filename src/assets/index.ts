import { ImageProps } from "react-native";

type ImagesTypes = {
  startImages: {
    startDiary: ImageProps;
    startFood: ImageProps;
    startLogin: ImageProps;
    startTasks: ImageProps;
  };
  weatherImages: {
    weatherCloud: ImageProps;
    weatherRain: ImageProps;
    weatherSnow: ImageProps;
    weatherSunAndCloud: ImageProps;
    weatherSunny: ImageProps;
  };
  bubbles: {
    bubbleRight: ImageProps;
    bubbleLeft: ImageProps;
    arrowNext: ImageProps;
    doneNext: ImageProps;
  };
  login: {
    google: ImageProps;
    socialLogin: ImageProps;
  };
};

const IMAGES: ImagesTypes = {
  startImages: {
    startDiary: require("./images/startImages/startDiary.png"),
    startFood: require("./images/startImages/startFood.png"),
    startLogin: require("./images/startImages/startLogin.png"),
    startTasks: require("./images/startImages/startTasks.png"),
  },
  weatherImages: {
    weatherCloud: require("./images/weatherImages/weatherCloud.svg"),
    weatherRain: require("./images/weatherImages/weatherRain.svg"),
    weatherSnow: require("./images/weatherImages/weatherSnow.svg"),
    weatherSunAndCloud: require("./images/weatherImages/weatherSunAndCloud.svg"),
    weatherSunny: require("./images/weatherImages/weatherSunny.svg"),
  },
  bubbles: {
    bubbleRight: require("./images/bubbles/bubbleRight.png"),
    bubbleLeft: require("./images/bubbles/bubbleLeft.png"),
    arrowNext: require("./images/bubbles/arrowNext.png"),
    doneNext: require("./images/bubbles/doneNext.png"),
  },
  login: {
    google: require("./images/login/google.png"),
    socialLogin: require("./images/login/socialLogin.png"),
  },
};
export default IMAGES;
