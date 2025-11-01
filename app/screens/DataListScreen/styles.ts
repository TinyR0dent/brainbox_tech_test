import { TextStyle, ViewStyle } from "react-native";

export const useStyles = () => {
  const container: ViewStyle = {
    padding: 16,
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  };

  const listContainer: ViewStyle = {
    padding: 15,
    paddingTop: 20,
    gap: 10,
  };

  const largeText: TextStyle = {
    fontSize: 18,
  };

  const errorContainer: ViewStyle = {
    gap: 16,
  };

  return { container, listContainer, largeText, errorContainer };
};
