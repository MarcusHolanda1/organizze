import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View, Platform } from "react-native";

import * as S from "./styles";
import { RowMap, SwipeListView } from "react-native-swipe-list-view";
import { Feather } from "@expo/vector-icons";

import { collection, query, getDocs } from "firebase/firestore";
import { dbFirestore } from "../../../App";
import { Card, Text } from "../../../UI";
import { theme } from "../../../theme";
import { RFValue } from "react-native-responsive-fontsize";
import { Task, TaskItem } from "./interface";

export default function Swipe() {
  const [listData, setListData] = useState<Task[]>([]);

  const handleGetDataFirestore = async () => {
    try {
      const ref = query(collection(dbFirestore, "tasks"));

      const querySnapthot = await getDocs(ref);

      const groups = querySnapthot.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      setListData(groups);
    } catch (error) {}
  };

  const closeRow = (
    rowObjects: { [key: string]: { closeRow: () => void } },
    selectedRowId: string
  ) => {
    const { closeRow } = rowObjects[selectedRowId] || {};
    closeRow && closeRow();
  };

  const deleteRow = (
    rowObjects: { [key: string]: { closeRow: () => void } },
    selectedRowId: string
  ) => {
    closeRow(rowObjects, selectedRowId);

    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.id === selectedRowId);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  useEffect(() => {
    handleGetDataFirestore();
  }, []);

  const renderItem = (data: TaskItem) => (
    <S.ContainerTasks>
      <Card>
        <S.ContentCardTasks>
          <S.ContentLeft>
            <Text
              type="h4"
              color={theme.colors.primaryBold}
              style={{ marginBottom: 24 }}
            >
              {data.item.title}
            </Text>
            <S.ContentCalendar>
              <Feather
                name="calendar"
                size={18}
                color={theme.colors.primaryMedium}
                style={{ paddingRight: 8, paddingBottom: 4 }}
              />
              <Text type="p12" color={theme.colors.primaryMedium}>
                20/11/200
              </Text>
            </S.ContentCalendar>
          </S.ContentLeft>
          <S.ContentRight>
            <S.StatusCircle></S.StatusCircle>
          </S.ContentRight>
        </S.ContentCardTasks>
      </Card>
    </S.ContainerTasks>
  );

  const renderHiddenItem = (data: { item: Task }, rowMap: RowMap<any>) => (
    <View style={styles.rowBack}>
      <Text>Left</Text>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        onPress={() => {
          closeRow(rowMap, data.item.id);
        }}
      >
        <Feather
          name="trash-2"
          size={28}
          color={theme.colors.black}
          style={{ paddingRight: 8, paddingBottom: 4 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, data.item.id)}
      >
        <Feather
          name="check-square"
          size={28}
          color={theme.colors.successLight}
          style={{ paddingRight: 8, paddingBottom: 4 }}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={0}
        rightOpenValue={-150}
        previewRowKey={"0"}
        previewOpenValue={-40}
        previewOpenDelay={1000}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },

  backTextWhite: {
    color: "#FFF",
  },
  rowFront: {
    alignItems: "center",
    justifyContent: "center",
  },
  rowBack: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  backRightBtnLeft: {
    backgroundColor: theme.colors.primaryMedium,
    right: RFValue(90),
    height: Platform.OS === "android" ? RFValue(84) : RFValue(77),
  },
  backRightBtnRight: {
    width: 90,
    backgroundColor: theme.colors.primaryMedium,
    right: 18,
    borderTopRightRadius: RFValue(theme.spacing.n8),
    borderBottomRightRadius: RFValue(theme.spacing.n8),
    height: Platform.OS === "android" ? RFValue(84) : RFValue(77),
  },
  trash: {
    height: 25,
    width: 25,
  },
  item: {
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
  },
});
