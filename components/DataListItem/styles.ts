import { ViewStyle } from "react-native";

const defaultContainer: ViewStyle = {
  padding: 8,
  borderRadius: 10,
  paddingRight: 35,
  backgroundColor: "#FFFF",
};
export const useStyles = () => {
  const unFavoredContainer: ViewStyle = {
    ...defaultContainer,
  };

  const favoredContainer: ViewStyle = {
    ...defaultContainer,
    backgroundColor: "#6ab6aa",
  };

  const favButton: ViewStyle = {
    position: "absolute",
    top: 8,
    right: 8,
  };

  return { unFavoredContainer, favoredContainer, favButton };
};
