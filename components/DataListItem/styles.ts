import { ViewStyle } from "react-native";

const defaultContainer: ViewStyle = {
  padding: 8,
  borderRadius: 10,
  paddingRight: 35,
  backgroundColor: "#e2e6e9ff",
};
export const useStyles = () => {
  const unFavoredContainer: ViewStyle = {
    ...defaultContainer,
  };

  const favoredContainer: ViewStyle = {
    ...defaultContainer,
    backgroundColor: "#a7aff1ff",
  };

  const favButton: ViewStyle = {
    position: "absolute",
    top: 8,
    right: 8,
  };

  return { unFavoredContainer, favoredContainer, favButton };
};
