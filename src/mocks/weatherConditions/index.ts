import IMAGES from "../../assets";

export const weatherConditionsMock = [
  {
    sunny: {
      name: "sunny",
      condition: "Sunny",
      nightCondition: "Clear",
      nightPhrase:
        "Céu limpo e sem risco de chuva, aproveite para curtir essa noite maravilhosa!",
      phrase:
        "Céu limpo e com muito sol, aproveite para fazer exercícios e organizar sua vida!",
    },
    cloud: {
      name: "cloud",
      condition: ["Cloudy", "Overcast"],
      phrase: "O céu está nublado, não se esqueça de se proteger!",
    },
    partlyCloud: {
      condition: ["Partly cloudy"],
      phrase:
        "O céu está parcialmente nublado, perfeito para realizar suas tarefas!",
      name: "partlyCloud",
    },

    rain: {
      name: "rain",
      condition: [
        "Patchy rain possible",
        "Patchy sleet possible",
        "Patchy freezing drizzle possible",
        "Thundery outbreaks possible",
        "Patchy light drizzle",
        "Freezing drizzle",
        "Patchy light rain",
        "Light rain",
        "Moderate rain at times",
        "Moderate rain",
        "Heavy rain at times",
        "Heavy rain",
        "Light freezing rain",
        "Moderate or heavy freezing rain",
        "Light sleet",
        "Moderate or heavy sleet",
        "Light rain shower",
        "Moderate or heavy rain shower",
        "Torrential rain shower",
        "Light sleet showers",
        "Moderate or heavy sleet showers",
        "Patchy light rain with thunder",
        "Moderate or heavy rain with thunder",
      ],
      phrase:
        "Tempo chuvoso, mas nada irá afetar sua vida, não perca o foco e realize suas tarefas!",
    },
    snow: {
      name: "snow",
      condition: [
        "Mist",
        "Patchy snow possible",
        "Blowing snow",
        "Blizzard",
        "Fog",
        "Freezing fog",
        "Light drizzle",
        "Heavy freezing drizzle",
        "Patchy light snow",
        "Light snow",
        "Patchy moderate snow",
        "Moderate snow",
        "Patchy heavy snow",
        "Heavy snow,",
        "Ice pellets",
        "Light snow showers",
        "Moderate or heavy snow showers",
        "Light showers of ice pellets",
        "Moderate or heavy showers of ice pellets",
        "Patchy light snow with thunder",
        "Moderate or heavy snow with thunder",
      ],
      phrase:
        "Tempo nevoso, se proteja bastante contra o frio e realize suas tarefas!",
    },
  },
];