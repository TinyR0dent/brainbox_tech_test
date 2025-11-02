import { TextStyle, ViewStyle } from "react-native";

export const useStyles = () => {
  const container: ViewStyle = {
    padding: 8,
    backgroundColor: "#f0f0f0",
    flexDirection: "row",
    alignItems: "center",
  };

  const inputField: TextStyle = {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 8,
    flex: 1,
  };

  const clearButton: ViewStyle = {
    marginLeft: 8,
    padding: 4,
  };

  const clearButtonText: TextStyle = {
    fontSize: 26,
    color: "#888",
  };

  return { container, inputField, clearButton, clearButtonText };
};
