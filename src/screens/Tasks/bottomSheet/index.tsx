import React, { useRef, useState } from "react";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { TextInput, TouchableOpacity, View } from "react-native";

import * as S from "./styles";
import { BottomSheetRefProps } from "../../../design/components/BottomSheet";
import {
  Text,
  BottomSheet,
  ContainerInput,
  IconButton,
  PrimaryButton,
} from "../../../design";
import { theme } from "../../../theme";

interface IBottomSheetProps {
  refBottomSheet: React.RefObject<Object>;
  handleCreateTask: () => void;
}

const BottomSheetTask = ({
  refBottomSheet,
  handleCreateTask,
}: IBottomSheetProps) => {
  const [value, onChangeText] = useState("Título da tarefa ");

  return (
    <BottomSheet ref={refBottomSheet}>
      <S.ContainerBottomSheet>
        <ContainerInput>
          <S.ContentAddTitle>
            <IconButton backgroundColor={theme.colors.basic}>
              <AntDesign
                name="plus"
                size={19}
                color={theme.colors.primaryMedium}
              />
            </IconButton>
            <TextInput
              multiline
              numberOfLines={2}
              onChangeText={(text: string) => onChangeText(text)}
              value={value}
              style={{
                color: theme.colors.background,
                padding: 10,
                maxWidth: 270,
              }}
              clearTextOnFocus
              maxLength={40}
            />
          </S.ContentAddTitle>
        </ContainerInput>

        <S.ContentValidateAndPriority>
          <View style={{ width: "48%" }}>
            <ContainerInput>
              <S.ContentValidateTask>
                <IconButton backgroundColor={theme.colors.basic}>
                  <Feather
                    name="calendar"
                    size={18}
                    color={theme.colors.primaryMedium}
                  />
                </IconButton>
                <View
                  style={{
                    height: 50,
                    justifyContent: "space-between",
                    flexDirection: "column",
                    paddingLeft: theme.spacing.n6,
                  }}
                >
                  <Text type="small">Data de vencimento</Text>
                  <Text
                    color={theme.colors.primaryMedium}
                    style={{ fontSize: 12 }}
                  >
                    30 de novembro
                  </Text>
                </View>
              </S.ContentValidateTask>
            </ContainerInput>
          </View>
          <View style={{ width: "48%" }}>
            <ContainerInput>
              <S.ContentValidateTask>
                <IconButton backgroundColor={theme.colors.basic}>
                  <Text type="h4">🤏</Text>
                </IconButton>

                <View
                  style={{
                    height: 50,
                    width: 110,
                    justifyContent: "space-between",
                    flexDirection: "row",
                    paddingLeft: theme.spacing.n6,
                  }}
                >
                  <View
                    style={{
                      justifyContent: "space-between",
                      flexDirection: "column",
                    }}
                  >
                    <Text type="small">Prioridade</Text>
                    <Text
                      color={theme.colors.primaryMedium}
                      style={{ fontSize: 12 }}
                    >
                      Média
                    </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <TouchableOpacity style={{}}>
                      <MaterialIcons
                        name="keyboard-arrow-down"
                        size={28}
                        color={theme.colors.primaryMedium}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </S.ContentValidateTask>
            </ContainerInput>
          </View>
        </S.ContentValidateAndPriority>

        <S.Container>
          <S.ContainerButtonCreateTask>
            <PrimaryButton
              onPress={handleCreateTask}
              backgroundColor={theme.colors.primaryMedium}
            >
              <S.ContentButton>
                <Text style={{ paddingHorizontal: 10 }} type="h3">
                  Salvar
                </Text>
              </S.ContentButton>
            </PrimaryButton>
          </S.ContainerButtonCreateTask>
        </S.Container>
      </S.ContainerBottomSheet>
    </BottomSheet>
  );
};
export default BottomSheetTask;
