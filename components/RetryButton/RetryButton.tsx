import React from "react";
import { TouchableOpacity } from "react-native";
import { Typography } from "../Typography";
import { useStyles } from "./styles";

interface RetryButtonProps {
  onPress: () => void;
}

export const RetryButton = ({ onPress }: RetryButtonProps) => {
  const styles = useStyles();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.4}
      style={styles.retryButton}
      accessibilityRole="button"
      accessibilityLabel="Retry"
      testID="retry-button"
    >
      <Typography variant="header">Retry</Typography>
    </TouchableOpacity>
  );
};
