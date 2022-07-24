import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { FlatList, GestureResponderEvent, StyleSheet } from "react-native";

import * as S from "./styles";
import { Text, Page, PrimaryButton, Card } from "../../design";
import { theme } from "../../theme";
import { TouchableOpacity, View } from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import { SwipeListView } from "react-native-swipe-list-view";
import { RFValue } from "react-native-responsive-fontsize";
import Animated from "react-native-reanimated";

interface IScrollItems {
  id: string;
  title: string;
}

interface IItemProps {
  item: IScrollItems;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  backgroundColor: string;
  textColor: string;
}

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "7777",
    title: "Third Item",
  },
  {
    id: "7777",
    title: "Third Item",
  },
  {
    id: "7777",
    title: "Third Item",
  },
  {
    id: "7777",
    title: "Third Item",
  },
  {
    id: "7777",
    title: "Third Item",
  },
  {
    id: "7777",
    title: "Third Item",
  },
];

const DATA2 = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "7777",
    title: "Third Item",
  },
];

const initialList = DATA.map((data, index) => ({ ...data, key: `${index}` }));
const rowSwipeAnimatedValues: any = {};
initialList.forEach((_, i) => {
  rowSwipeAnimatedValues[`${i}`] = new Animated.Value(0);
});

type Item = typeof initialList[0];
const renderItem2 = () => (
  <S.ContainerTasks>
    <Card>
      <S.ContentCardTasks>
        <S.ContentLeft>
          <Text
            type="h4"
            color={theme.colors.primaryBold}
            style={{ marginBottom: 24 }}
          >
            Testar aplicativo
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

const Tasks = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [listData, setListData] = useState(initialList);

  const navigation = useNavigation();

  const closeRow = (rowMap: any, rowKey: string) => {
    console.log("this is the rowMap: ", rowMap);
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap: Map<string, Object>, rowKey: string) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = (rowKey: string) => {
    console.log("This row opened", rowKey);
  };

  const onSwipeValueChange = ({
    key,
    value,
  }: {
    key: string;
    value: number;
  }) => {
    rowSwipeAnimatedValues[key].setValue(Math.abs(value));
  };

  const renderHiddenItem = ({ item }: { item: Item }, rowMap: any) => (
    <View style={styles.rowBack}>
      <View style={[styles.backRightBtn, styles.backRightBtnLeft]}>
        <TouchableOpacity onPress={() => closeRow(rowMap, item.key)}>
          <Feather name="trash" size={24} color={theme.colors.primaryLight} />
        </TouchableOpacity>
      </View>
      <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
        <Animated.View
          style={[
            styles.trash,
            {
              transform: [
                {
                  scale: rowSwipeAnimatedValues[item.key].interpolate({
                    inputRange: [45, 90],
                    outputRange: [0, 1],
                    extrapolate: "clamp",
                  }),
                },
              ],
            },
          ]}
        >
          <TouchableOpacity onPress={() => deleteRow(rowMap, item.key)}>
            <Feather
              name="check-square"
              size={24}
              color={theme.colors.greenLight}
            />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </View>
  );

  const Item = ({ item, onPress, backgroundColor, textColor }: IItemProps) => (
    <View style={{ flexDirection: "column", paddingHorizontal: 8 }}>
      <Card backgroundColor={backgroundColor}>
        <TouchableOpacity onPress={onPress} style={{ padding: 6 }}>
          <Text style={{ fontSize: 14 }} color={textColor}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </Card>
    </View>
  );

  const renderItem = ({ item }: any) => {
    const backgroundColor =
      item.id === selectedId ? theme.colors.primaryMedium : theme.colors.ice;
    const color =
      item.id === selectedId
        ? theme.colors.background
        : theme.colors.primaryBold;

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

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
        <S.ContentFlatlist>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={DATA2}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
            horizontal={true}
          />
        </S.ContentFlatlist>

        <View style={styles.container}>
          <SwipeListView
            data={listData}
            renderItem={renderItem2}
            renderHiddenItem={renderHiddenItem}
            rightOpenValue={-150}
            previewRowKey={"0"}
            previewOpenValue={-41}
            previewOpenDelay={3000}
            onRowDidOpen={onRowDidOpen}
            onSwipeValueChange={onSwipeValueChange}
          />
        </View>

        <S.Container>
          <S.ContainerButtonCreateTask>
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
          </S.ContainerButtonCreateTask>
        </S.Container>
      </Page>
    </>
  );
};
export default Tasks;

const styles = StyleSheet.create({
  container: {
    // height: "100%",
  },
  backTextWhite: {
    color: "#FFF",
  },
  rowFront: {
    alignItems: "center",
    // backgroundColor: "#CCC",

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
    height: RFValue(78),
  },
  backRightBtnRight: {
    width: 90,
    backgroundColor: theme.colors.primaryMedium,
    right: 18,
    borderTopRightRadius: RFValue(theme.spacing.n8),
    borderBottomRightRadius: RFValue(theme.spacing.n8),
    height: RFValue(78),
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
