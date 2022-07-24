import React, {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
} from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { theme } from "../../../theme";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export type BottomSheetRefProps = {
  scrollTo?: (destination: number) => void;
  isActive?: () => boolean;
};

type BottomSheetProps = {
  children?: React.ReactNode;
};

const BottomSheet = forwardRef<BottomSheetRefProps, BottomSheetProps>(
  (props, ref) => {
    const translationY = useSharedValue(0);
    const translationBackdrop = useSharedValue(0);

    const context = useSharedValue({ y: 0 });
    const active = useSharedValue(false);

    const gesture = Gesture.Pan()
      .onStart((_) => {
        context.value = { y: translationY.value };
      })
      .onUpdate((event) => {
        translationY.value = event.translationY + context.value.y;
        translationY.value = Math.max(translationY.value, -SCREEN_HEIGHT + 80);
      })
      .onEnd((event) => {
        if (translationY.value > -SCREEN_HEIGHT / 3) {
          active.value = false;
          translationY.value = withSpring(0, { damping: 90 });
          translationBackdrop.value = withSpring(0, { damping: 60 });
        }
      });

    const bottomSheetStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateY: translationY.value }],
      };
    });

    const bottomSheetStyleBackdrop = useAnimatedStyle(() => {
      return {
        transform: [{ translateY: translationBackdrop.value }],
      };
    });

    const scrollTo = useCallback((destination: number) => {
      active.value = destination !== 0;
      translationY.value = withSpring(destination, { damping: 50 });
      translationBackdrop.value = withSpring(-SCREEN_HEIGHT, { damping: 60 });
    }, []);

    const isActive = useCallback(() => {
      return active.value;
    }, []);

    useImperativeHandle(ref, () => ({ scrollTo, isActive }), [
      scrollTo,
      isActive,
    ]);

    return (
      <Animated.View
        style={[
          styles.containerBottomSheet,
          { backgroundColor: "rgba(0, 0,0,0.92)" },
          bottomSheetStyleBackdrop,
        ]}
      >
        <GestureDetector gesture={gesture}>
          <Animated.View
            style={[styles.containerBottomSheet, bottomSheetStyle]}
          >
            <View style={styles.line} />
            <View>{props.children}</View>
          </Animated.View>
        </GestureDetector>
      </Animated.View>
    );
  }
);

const styles = StyleSheet.create({
  containerBottomSheet: {
    height: SCREEN_HEIGHT,
    width: "100%",
    position: "absolute",
    top: SCREEN_HEIGHT,
    backgroundColor: theme.colors.primaryLight,
    borderRadius: 20,
  },
  line: {
    height: 5,
    width: 60,
    backgroundColor: theme.colors.primary,
    marginVertical: 15,
    alignSelf: "center",
    borderRadius: 10,
  },
});

export default BottomSheet;
