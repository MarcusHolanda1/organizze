import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import * as S from "./styles";
import { ContainerInput, IconButton, Text } from "../..";
import { theme } from "../../../theme";
import { renderColorPriority } from "../../../utils";

interface ISelectPriorityData {
  id: number;
  priority: string;
  emoji: string;
}

interface ISelectEmoji {
  data: ISelectPriorityData[];
  value: any;
  onSelect: (value: any) => void;
}

const Select = ({ data, value, onSelect }: ISelectEmoji) => {
  const [dropdownisOpen, setDropdownIsOpen] = useState(false);

  const handleOpenAndCloseDropdown = () => {
    setDropdownIsOpen(!dropdownisOpen);
  };

  const handleSelectItem = (option: ISelectPriorityData) => {
    onSelect(option);
    setDropdownIsOpen(false);
  };

  const renderBackgroundIconButton = (priority: string) => {
    const background = {
      Média: theme.colors.background,
      Alta: theme.colors.secondaryLight,
      Baixa: theme.colors.greenLight,
    }[priority];
    return background;
  };

  return (
    <>
      <ContainerInput backgroundColor={renderColorPriority(value.priority)}>
        <S.Content>
          <View style={{ paddingTop: 3 }}>
            <IconButton
              onPress={handleOpenAndCloseDropdown}
              backgroundColor={renderBackgroundIconButton(value.priority)}
            >
              <Text type="h4">{value.emoji}</Text>
            </IconButton>
          </View>

          <View
            style={{
              height: 50,
              width: 110,
              justifyContent: "space-between",
              flexDirection: "row",
              paddingLeft: theme.spacing.n8,
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "column",
              }}
            >
              <Text type="small" color={theme.colors.primaryMedium}>
                Prioridade
              </Text>
              <Text color={theme.colors.primaryMedium} style={{ fontSize: 12 }}>
                {value.priority}
              </Text>
            </View>
            <View
              style={{
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={handleOpenAndCloseDropdown}>
                {dropdownisOpen ? (
                  <MaterialIcons
                    name="keyboard-arrow-up"
                    size={28}
                    color={theme.colors.primaryMedium}
                  />
                ) : (
                  <MaterialIcons
                    name="keyboard-arrow-down"
                    size={28}
                    color={theme.colors.primaryMedium}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </S.Content>
      </ContainerInput>
      {dropdownisOpen && (
        <S.ContentDropdown>
          {data.map((option: ISelectPriorityData, index: number) => {
            return (
              <S.DropdownButton
                backgroundColorDropdownButton={renderColorPriority(
                  option.priority
                )}
                key={index}
                onPress={() => handleSelectItem(option)}
              >
                <IconButton
                  onPress={() => handleSelectItem(option)}
                  backgroundColor={renderBackgroundIconButton(option.priority)}
                >
                  <Text type="h4">{option.emoji}</Text>
                </IconButton>
                <Text type="p" color={theme.colors.primaryMedium}>
                  {option.priority}
                </Text>
              </S.DropdownButton>
            );
          })}
        </S.ContentDropdown>
      )}
    </>
  );
};
export default Select;
