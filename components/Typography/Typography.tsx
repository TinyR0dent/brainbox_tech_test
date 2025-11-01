import { ReactNode } from "react";
import { Text, TextStyle } from "react-native";
import { useStyles } from "./styles";

import { TextProps } from "react-native";

interface TypographyProps
  extends Pick<TextProps, "numberOfLines" | "ellipsizeMode"> {
  variant:
    | "header"
    | "largeHeader"
    | "body"
    | "largeBody"
    | "error"
    | "largeError";
  center?: boolean;
  children: ReactNode;
  style?: TextStyle;
}
export const Typography = ({
  variant,
  center,
  children,
  style,
  numberOfLines,
  ellipsizeMode,
}: TypographyProps) => {
  const styles = useStyles();

  return (
    <Text
      style={[styles[variant], style, center && styles.center].filter(Boolean)}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {children}
    </Text>
  );
};
