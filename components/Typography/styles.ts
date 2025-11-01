import { TextStyle } from "react-native";

export const useStyles = () => {
  const body: TextStyle = {
    fontSize: 12,
    color: "#333333",
  };

  const largeBody: TextStyle = {
    fontSize: 18,
    color: "#333333",
  };

  const header: TextStyle = {
    fontSize: 18,
    color: "#333333",
    fontWeight: "bold",
  };

  const largeHeader: TextStyle = {
    fontSize: 24,
    color: "#333333",
    fontWeight: "bold",
  };

  const error: TextStyle = {
    color: "red",
    fontSize: 12,
  };

  const largeError: TextStyle = {
    color: "red",
    fontSize: 18,
  };

  const center: TextStyle = {
    textAlign: "center",
  };

  return { body, largeBody, header, largeHeader, error, largeError, center };
};
