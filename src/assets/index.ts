type ImagesTypes = {
  startImages: {
    startDiary: string;
    startFood: string;
    startLogin: string;
    startTasks: string;
  };
  weatherImages: {
    weatherCloud: string;
    weatherRain: string;
    weatherSnow: string;
    weatherSunAndCloud: string;
    weatherSunny: string;
  };
  bubbles: {
    bubbleRight: string;
    bubbleLeft: string;
    arrowNext: string;
    doneNext: string;
  };
  login: {
    google: string;
    socialLogin: string;
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
