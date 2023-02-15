import React, { useRef } from "react";

import { useNavigation } from "@react-navigation/native";

import { StyleSheet } from "react-native";

import * as S from "./styles";
import { Text, Page, PrimaryButton, Card } from "../../UI";
import { theme } from "../../theme";
import BottomSheetTask from "./bottomSheet";
import { dbFirestore } from "../../App";

import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { TouchableOpacity, View } from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { collection, query, getDocs } from "firebase/firestore";
import { RFValue } from "react-native-responsive-fontsize";
import { useEffect } from "react";
import FilterTaskItem from "./filterTaskItem";
import Swipe from "./swipe";

const Tasks = () => {
  const navigation = useNavigation();
  const refBottomSheet = useRef<any>(null);

  const handleGetDataFirestore = async () => {
    try {
      const ref = query(collection(dbFirestore, "tasks"));

      const querySnapthot = await getDocs(ref);

      const groups = querySnapthot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      console.log(groups);
    } catch (error) {}
  };

  const handleTriggerBottomSheet = () => {
    const isActive = refBottomSheet?.current?.isActive?.();

    if (isActive) {
      refBottomSheet?.current?.scrollTo?.(0);
    } else {
      refBottomSheet?.current?.scrollTo?.(-750);
    }
  };
  useEffect(() => {
    handleGetDataFirestore();
  }, []);

  return (
    <>
      <Page
        includesPadding={false}
        isStack
        stack={
          <S.ContentHeader>
            <TouchableOpacity onPress={navigation.goBack}>
              <MaterialIcons
                name="keyboard-arrow-left"
                size={28}
                color={theme.colors.primaryBold}
              />
            </TouchableOpacity>
            <Text type="h3" color={theme.colors.primaryBold}>
              Suas Tarefas
            </Text>
            <TouchableOpacity>
              <Feather
                name="trash"
                size={24}
                color={theme.colors.primaryLight}
              />
            </TouchableOpacity>
          </S.ContentHeader>
        }
      >
        <FilterTaskItem />
        <View style={styles.container}>
          <Swipe />
        </View>

        <S.Container>
          <S.ContainerButtonCreateTask>
            <PrimaryButton
              onPress={handleTriggerBottomSheet}
              backgroundColor={theme.colors.primaryMedium}
            >
              <Text type="h3">+ Nova tarefa</Text>
            </PrimaryButton>
          </S.ContainerButtonCreateTask>
        </S.Container>
      </Page>
      <BottomSheetTask refBottomSheet={refBottomSheet} />
    </>
  );
};
export default gestureHandlerRootHOC(Tasks);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: RFValue(20),
  },
});
