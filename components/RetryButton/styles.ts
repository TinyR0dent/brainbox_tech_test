import { ViewStyle } from "react-native";

export const useStyles = () => {
  const retryButton: ViewStyle = {
    backgroundColor: "#e2e6e9ff",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 6,
  };

  return { retryButton };
};
