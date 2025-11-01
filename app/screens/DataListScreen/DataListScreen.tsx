import { RootStackParamList } from "@/app/index";
import { DataListItem } from "@/components/DataListItem";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { RetryButton } from "@/components/RetryButton";
import { ScreenContainer } from "@/components/ScreenContainer";
import { SearchField } from "@/components/SearchField";
import { Typography } from "@/components/Typography";
import { useFetchAllData } from "@/hooks/useFetchAllData";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { useStyles } from "./styles";

export const DataListScreen = () => {
  const [retryKey, setRetryKey] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const { data, loading, error } = useFetchAllData(retryKey);
  const [filteredData, setFilteredData] = useState(data);
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, "DataList">>();
  const styles = useStyles();

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredData(data);
    } else {
      const lowerCaseQuery = searchQuery.toLowerCase();
      setFilteredData(
        data.filter((item) => item.title.toLowerCase().includes(lowerCaseQuery))
      );
    }
  }, [searchQuery, data]);

  const onRefresh = () => {
    setRefreshing(true);
    setRetryKey((key) => key + 1);
  };

  useEffect(() => {
    if (!loading) setRefreshing(false);
  }, [loading]);

  // I wanted to use the <Suspense> wrapper component, but ran into issues when using it with the use() hook for the data fetching.
  if (loading) {
    return (
      <ScreenContainer center>
        <LoadingSpinner />
      </ScreenContainer>
    );
  }

  if (error) {
    return (
      <ScreenContainer center style={styles.errorContainer}>
        <Typography variant="largeError">Error: {error}</Typography>
        <Typography variant="largeBody">
          Please check your connection and try again.
        </Typography>
        <RetryButton onPress={() => setRetryKey((key) => key + 1)} />
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer>
      <SearchField
        searchQuery={searchQuery}
        setSearchQuery={(query) => setSearchQuery(query)}
      />
      <ScrollView
        contentContainerStyle={styles.listContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {filteredData.length === 0 ? (
          <Typography variant="largeBody" style={styles.largeText}>
            No data available
          </Typography>
        ) : (
          filteredData.map((item) => (
            <DataListItem
              key={item.id}
              item={item}
              onPress={() =>
                navigation.navigate("DataItem", { id: String(item.id) })
              }
            />
          ))
        )}
      </ScrollView>
    </ScreenContainer>
  );
};
