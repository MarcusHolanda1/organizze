import React from "react";

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { StyleProp, TextStyle } from "react-native";

interface IconProps {
  type: string;
  name: string;
  color: string;
  size: number;
  style?: StyleProp<TextStyle> | undefined;
}

export const FilterIcons: any = {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
};

const Icon = ({ type, name, color, size = 24, style }: IconProps) => {
  const fontSize: number = 24;
  const Tag: any = type;

  return (
    <>
      {type && name && (
        <Tag name={name} size={size || fontSize} color={color} style={style} />
      )}
    </>
  );
};
export default Icon;
