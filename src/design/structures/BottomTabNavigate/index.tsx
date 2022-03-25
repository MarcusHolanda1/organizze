import React, { useEffect, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Animated,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Icon, { FilterIcons } from "../../components/Icons";
import Home from "../../../screens/Home";
import { theme } from "../../../theme";
import Profile from "../../../screens/Profile";
import Activities from "../../../screens/Activities";

interface MyTab {
  state: any;
  navigation: any;
  descriptors: any;
}

const TabArr: Array<{
  route: string;
  type: any;
  activeIcon: string;
  inActiveIcon: string;
  component: React.ComponentType<any>;
}> = [
  {
    route: "Activities",
    type: FilterIcons?.Feather,
    activeIcon: "calendar",
    inActiveIcon: "calendar",
    component: Activities,
  },
  {
    route: "Home",
    type: FilterIcons?.AntDesign,
    activeIcon: "appstore-o",
    inActiveIcon: "appstore-o",
    component: Home,
  },
  {
    route: "Profile",
    type: FilterIcons?.AntDesign,
    activeIcon: "user",
    inActiveIcon: "user",
    component: Profile,
  },
];

const { width } = Dimensions.get("window");
const MARGIN = 0;
const TAB_BAR_WIDTH = width - 2 * MARGIN;
const TAB_WIDTH = TAB_BAR_WIDTH / TabArr.length;

function MyTabBar({ state, descriptors, navigation }: MyTab) {
  const [translateX] = useState(new Animated.Value(0));

  const translateTab = (index: number) => {
    Animated.spring(translateX, {
      toValue: index * TAB_WIDTH,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    translateTab(state.index);
  }, [state.index]);

  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.slidingTabContainer}>
        <Animated.View
          style={[styles.slidingTab, { transform: [{ translateX }] }]}
        />
      </View>
      {state.routes.map(
        (route: { key: string | number; name: any }, index: any) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          const tabBarIcon = options.tabBarIcon;

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flex: 1, alignItems: "center" }}
            >
              <TabIcon
                tabIcon={tabBarIcon}
                isFocused={isFocused}
                index={state.index}
              />
            </TouchableOpacity>
          );
        }
      )}
    </View>
  );
}

interface TabIcons {
  isFocused: boolean;
  tabIcon: any;
  index: string;
}

const TabIcon = ({ isFocused, tabIcon, index }: TabIcons) => {
  const [translateY] = useState(new Animated.Value(0));

  const translateIcon = (value: number) => {
    Animated.spring(translateY, {
      toValue: value,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (isFocused) {
      translateIcon(RFValue(-29));
    } else {
      translateIcon(0);
    }
  }, [index]);

  return (
    <>
      <Animated.View style={{ transform: [{ translateY }] }}>
        <Icon
          name={isFocused ? tabIcon.activeIcon : tabIcon.inActiveIcon}
          type={tabIcon.type}
          size={RFValue(26)}
          color={theme.colors.background}
        />
      </Animated.View>
    </>
  );
};

const Tab = createBottomTabNavigator();

const BottomTabNavigate = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      {TabArr.map((_, index) => {
        return (
          <Tab.Screen
            key={index}
            name={_.route}
            component={_.component}
            options={{
              tabBarColor: theme.colors.black,
              tabColor: theme.colors.black,
              tabBarIcon: {
                activeIcon: _.activeIcon,
                inActiveIcon: _.inActiveIcon,
                type: _.type,
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    width: TAB_BAR_WIDTH,
    height: RFValue(65),
    position: "absolute",
    alignItems: "center",
    bottom: MARGIN,
    backgroundColor: theme.colors.primaryLight,
    borderTopLeftRadius: RFValue(16),
    borderTopRightRadius: RFValue(16),
    alignSelf: "center",
    justifyContent: "space-around",
    textAlign: "center",
  },
  slidingTabContainer: {
    width: TAB_WIDTH,
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
  },
  slidingTab: {
    width: RFValue(65),
    height: RFValue(65),
    borderRadius: RFValue(35),
    backgroundColor: theme.colors.primaryMedium,
    bottom: RFValue(30),
    // borderWidth: RFValue(6),
    // borderColor: theme.colors.primaryLight,
  },
});

export default BottomTabNavigate;
