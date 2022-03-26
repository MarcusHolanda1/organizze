import React from "react";

import * as S from "./styles";
import { Image, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Page, Text } from "../../design";
import { useStorage } from "../../redux/hooks";
import { theme } from "../../theme";
import { useDispatch } from "react-redux";
import { setLogoutUser } from "../../redux/slices/auth";

const Profile = () => {
  const { dataUser } = useStorage();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setLogoutUser());
  };

  const alertLogout = () =>
    Alert.alert("Sair", "Deseja realmente sair da sua conta?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      { text: "Sair", onPress: () => handleLogout() },
    ]);

  return (
    <Page>
      <S.ContentMyProfile>
        <Text type="h3" color={theme.colors.primaryBold}>
          Meu perfil
        </Text>
      </S.ContentMyProfile>
      <S.ContentPictureProfile>
        <Image
          source={{ uri: dataUser?.picture }}
          style={{ width: 124, height: 124, borderRadius: 150 / 2 }}
        />
      </S.ContentPictureProfile>
      <S.ContainerProfileInfo>
        <S.ContentProfileInfo>
          <Text type="p" color={theme.colors.primaryBold}>
            Nome
          </Text>
          <Text type="p" color={theme.colors.primary}>
            {dataUser?.name}
          </Text>
        </S.ContentProfileInfo>
        <S.ContentProfileInfo>
          <Text type="p" color={theme.colors.primaryBold}>
            Email
          </Text>
          <Text type="p" color={theme.colors.primary}>
            {dataUser?.email}
          </Text>
        </S.ContentProfileInfo>
      </S.ContainerProfileInfo>
      <S.ContentLogout>
        <S.LogoutButton onPress={alertLogout}>
          <MaterialCommunityIcons
            name="location-exit"
            size={32}
            color={theme.colors.primaryLight}
          />
        </S.LogoutButton>
      </S.ContentLogout>
    </Page>
  );
};
export default Profile;
