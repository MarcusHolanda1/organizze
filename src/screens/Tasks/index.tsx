import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import { FlatList, GestureResponderEvent } from "react-native";

import * as S from "./styles";
import { Text, Page, PrimaryButton, Card } from "../../design";
import { theme } from "../../theme";
import { TouchableOpacity, View } from "react-native";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import reactotron from "reactotron-react-native";

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

const Tasks = () => {
  const [selectedId, setSelectedId] = useState(null);

  const navigation = useNavigation();

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
  ];

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
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
            horizontal={true}
          />
        </S.ContentFlatlist>
        <S.Container>
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
