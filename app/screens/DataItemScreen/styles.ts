import { TextStyle, ViewStyle } from "react-native";

export const useStyles = () => {
  const container: ViewStyle = {
    flex: 1,
    padding: 16,
    gap: 10,
  };

  const header: ViewStyle = {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    position: "absolute",
    top: 0,
    left: 0,
  };

  const backButton: ViewStyle = {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    gap: 10,
    position: "absolute",
    top: 0,
    left: 0,
  };

  const backText: TextStyle = {
    fontSize: 18,
    fontWeight: "bold",
  };

  return { container, header, backButton, backText };
};
