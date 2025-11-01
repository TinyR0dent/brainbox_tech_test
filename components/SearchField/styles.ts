import { TextStyle, ViewStyle } from "react-native";

export const useStyles = () => {
  const container: ViewStyle = {
    padding: 8,
    backgroundColor: "#f0f0f0",
  };

  const inputField: TextStyle = {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 8,
  };

  return { container, inputField };
};
