import React, { useState, useEffect } from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import { Page, PrimaryButton, Text, Card } from "../../UI";
import { theme } from "../../theme";
import { useStorage } from "../../redux/hooks";
import { RootStackParamList } from "../../navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ActivitiesScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  "Tasks"
>;

const Activities = () => {
  const { dataUser } = useStorage();
  const navigation = useNavigation<ActivitiesScreenProps>();

  const handleRedirectToActivity = () => {
    navigation.navigate("Tasks");
  };

  return (
    <Page>
      <S.HelloContent>
        <Text
          type="h3"
          fontFamily={theme.fonts.bold.fontFamily}
          color={theme.colors.primaryBold}
        >
          Olá, {dataUser?.given_name}
        </Text>
      </S.HelloContent>
      <Card>
        <S.Container>
          <S.ContentLeft>
            <Text
              color={theme.colors.primaryBold}
              style={{ marginBottom: theme.spacing.n18 }}
            >
              Tarefas
            </Text>
            <Text
              color={theme.colors.primary}
              style={{ marginBottom: theme.spacing.n20 }}
            >
              Atualize suas tarefas diárias
            </Text>
            <Text
              type="small"
              color={theme.colors.primary}
              style={{ marginBottom: theme.spacing.n8 }}
            >
              Tarefas concluídas hoje
            </Text>
          </S.ContentLeft>
          <S.ContentButtonEnterActivity>
            <S.ButtonEnterActivity onPress={handleRedirectToActivity}>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color={theme.colors.background}
              />
            </S.ButtonEnterActivity>
          </S.ContentButtonEnterActivity>
        </S.Container>
      </Card>
      {/* <S.ContainerButtonCreateTask>
        <PrimaryButton
          onPress={() => {}}
          backgroundColor={theme.colors.primaryMedium}
        >
          <S.ContentButton>
            <S.ContentMoreText>
              <Text type="h3">+</Text>
            </S.ContentMoreText>
            <Text type="h3">Nova tarefa</Text>
          </S.ContentButton>
        </PrimaryButton>
      </S.ContainerButtonCreateTask> */}
    </Page>
  );
};
export default Activities;
