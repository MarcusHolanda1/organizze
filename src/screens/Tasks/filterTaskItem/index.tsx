import React, { useState } from "react";
import { Card, Text } from "../../../UI";
import * as S from "./styles";
import {
  FlatList,
  GestureResponderEvent,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../../../theme";

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
    title: "Todas",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Concluídas",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Não concluídas",
  },
  {
    id: "7777",
    title: "Em progresso",
  },
];

const FilterTaskItem = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

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

  const renderItem = ({
    item,
  }: {
    item: {
      id: string;
      title: string;
    };
  }) => {
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
    </>
  );
};
export default FilterTaskItem;
