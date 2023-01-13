import React, { useState } from "react";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import {
  Alert,
  TextInput,
  View,
  ActivityIndicator,
  Platform,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { addDoc, collection } from "firebase/firestore";

import * as S from "./styles";
import { dbFirestore } from "../../../App";
import {
  Text,
  BottomSheet,
  ContainerInput,
  IconButton,
  PrimaryButton,
  Select,
} from "../../../UI";
import { theme } from "../../../theme";
import { convertDateIsoValidDate, renderCurrentDate } from "../../../utils";

interface IBottomSheetProps {
  refBottomSheet: {
    current: {
      close?: () => void;
      isActive?: () => boolean;
      scrollTo?: (destination: number) => void;
    };
  };
}

interface ISelectPriorityData {
  id: number;
  priority: string;
  emoji: string;
}

const priorityData: ISelectPriorityData[] = [
  { id: 1, priority: "Alta", emoji: "🔥" },
  { id: 2, priority: "Média", emoji: "🤏" },
  { id: 3, priority: "Baixa", emoji: "❄️" },
];

const BottomSheetTask = ({ refBottomSheet }: IBottomSheetProps) => {
  const [titleTask, setTitleTask] = useState<string>("Título da tarefa");
  const [datePickerIsVisible, setDatePickerIsVisible] =
    useState<boolean>(false);
  const [dateTask, setDateTask] = useState<string>(renderCurrentDate());
  const [selectPriorityData, setSelectPriorityData] =
    useState<ISelectPriorityData>(priorityData[0]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleShowDatePicker = () => {
    setDatePickerIsVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerIsVisible(false);
  };

  const renderDateFormatted = (date: Date) => {
    const languageUS = "pt-BR";

    if (Platform.OS === "android") {
      console.log("android", date);
      setDateTask(
        date.toISOString().replace(/T.*/, "").split("-").reverse().join("/")
      );
    } else {
      let selectedDate = convertDateIsoValidDate(date, languageUS);

      setDateTask(selectedDate);
    }
  };

  const handleConfirm = (date: Date) => {
    renderDateFormatted(date);

    hideDatePicker();
  };

  const handleOnSelectPriority = (item: any) => {
    setSelectPriorityData(item);
  };

  const handleCreateTask = async () => {
    try {
      setLoading(true);

      const columnRef = collection(dbFirestore, "tasks");

      const closeBottomSheet = () => {
        refBottomSheet.current?.close?.();
      };

      await addDoc(columnRef, {
        title: titleTask,
        date: dateTask,
        priority: selectPriorityData.priority,
      });

      Alert.alert("Tarefa criada com sucesso", "", [
        {
          text: "OK",
          onPress: () => {
            closeBottomSheet(), resetAllState();
          },
        },
      ]);

      setLoading(false);
    } catch (error: any) {
      Alert.alert("Erro ao criar tarefa");
      setLoading(false);
      return error.response;
    }
  };

  const resetAllState = () => {
    setTitleTask("Título da tarefa");
    setDateTask(renderCurrentDate());
    setSelectPriorityData(priorityData[0]);
  };

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
              onChangeText={(text: string) => {
                setTitleTask(text), console.log(text);
              }}
              value={titleTask}
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
                <IconButton
                  onPress={handleShowDatePicker}
                  backgroundColor={theme.colors.basic}
                >
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
                    {dateTask}
                  </Text>
                </View>
              </S.ContentValidateTask>
            </ContainerInput>
          </View>
          <View style={{ width: "48%" }}>
            <Select
              data={priorityData}
              value={selectPriorityData}
              onSelect={handleOnSelectPriority}
            />
          </View>
        </S.ContentValidateAndPriority>

        <S.ContainerSaveButton>
          <S.ContainerButtonCreateTask>
            <PrimaryButton
              onPress={handleCreateTask}
              backgroundColor={theme.colors.primaryMedium}
              disabled={titleTask === "" ? true : false}
            >
              {loading ? (
                <View style={{ paddingHorizontal: 24, paddingVertical: 8 }}>
                  <ActivityIndicator size="small" color="#fff" />
                </View>
              ) : (
                <Text type="h3">Salvar</Text>
              )}
            </PrimaryButton>
          </S.ContainerButtonCreateTask>
        </S.ContainerSaveButton>
      </S.ContainerBottomSheet>

      <DateTimePickerModal
        isVisible={datePickerIsVisible}
        mode="date"
        onConfirm={(date: Date) => {
          handleConfirm(date), console.log(date);
        }}
        onCancel={hideDatePicker}
        onChange={(date: any) => handleConfirm(date)}
        timeZoneOffsetInMinutes={0}
      />
    </BottomSheet>
  );
};
export default BottomSheetTask;
