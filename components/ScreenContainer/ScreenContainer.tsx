import React, { JSX } from "react";
import { View, ViewProps, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStyles } from "./styles";

interface ScreenContainerProps extends ViewProps {
  children: React.ReactNode;
  center?: boolean;
  style?: ViewStyle;
}

export function ScreenContainer({
  children,
  center,
  style,
  ...rest
}: ScreenContainerProps): JSX.Element {
  const styles = useStyles();

  return (
    <SafeAreaView style={styles.safeAreaWrapper}>
      <View
        style={[
          styles.fullScreenContainer,
          center && styles.centeredContent,
          style,
        ].filter(Boolean)}
        {...rest}
      >
        {children}
      </View>
    </SafeAreaView>
  );
}
