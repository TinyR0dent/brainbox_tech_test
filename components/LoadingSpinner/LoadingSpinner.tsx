import { ActivityIndicator } from "react-native";

export const LoadingSpinner = () => {
  return (
    <ActivityIndicator size="large" color="#0000ff" testID="loading-spinner" />
  );
};
