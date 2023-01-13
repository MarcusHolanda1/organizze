import React from "react";

import WeatherCloudSvg from "../../../assets/images/weatherImages/weatherCloud.svg";
import WeatherSunSvg from "../../../assets/images/weatherImages/weatherCloud.svg";
import WeatherRainSvg from "../../../assets/images/weatherImages/weatherRain.svg";
import WeatherSnowSvg from "../../../assets/images/weatherImages/weatherSnow.svg";
import WeatherSunAndCloudSvg from "../../../assets/images/weatherImages/weatherSunAndCloud.svg";

interface IDynamicSvg {
  type?: "cloud" | "sunny" | "rain" | "snow" | "partlyCloud" | string;
  width?: number;
  height?: number;
}

const DynamicSvg: React.FC<IDynamicSvg> = ({
  type,
  width = 228,
  height = 106,
}) => {
  if (type) {
    const SvgComponent = {
      cloud: WeatherCloudSvg,
      sunny: WeatherSunSvg,
      rain: WeatherRainSvg,
      snow: WeatherSnowSvg,
      partlyCloud: WeatherSunAndCloudSvg,
    }[type];
    return <SvgComponent width={width} height={height} />;
  }
  return <></>;
};
export default DynamicSvg;
