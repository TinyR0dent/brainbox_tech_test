import { ActivityIndicator } from "react-native";

export const LoadingSpinner = () => {
  return (
    <ActivityIndicator size="large" color="#6ab6aa" testID="loading-spinner" />
  );
};
