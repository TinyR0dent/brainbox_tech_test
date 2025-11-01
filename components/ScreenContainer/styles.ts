import { ViewStyle } from "react-native";

export const useStyles = () => {
  const safeAreaWrapper: ViewStyle = {
    flex: 1,
  };

  const fullScreenContainer: ViewStyle = {
    flex: 1,
  };

  const centeredContent: ViewStyle = {
    justifyContent: "center",
    alignItems: "center",
  };

  return { safeAreaWrapper, fullScreenContainer, centeredContent };
};
