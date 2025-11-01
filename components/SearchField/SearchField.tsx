import React from "react";
import { TextInput, View } from "react-native";
import { useStyles } from "./styles";

interface SearchFieldProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const SearchField = ({
  searchQuery,
  setSearchQuery,
}: SearchFieldProps) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <TextInput
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="Search..."
        style={styles.inputField}
      />
    </View>
  );
};
