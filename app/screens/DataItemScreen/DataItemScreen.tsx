import { RootStackParamList } from "@/app";
import { LoadingSpinner } from "@/components/LoadingSpinner";
import { ScreenContainer } from "@/components/ScreenContainer";
import { Typography } from "@/components/Typography";
import { useFetchItemData } from "@/hooks/useFetchItemData";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";
import { useStyles } from "./styles";

export const DataItemScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, "DataItem">>();
  const navigation = useNavigation();
  const { id } = route.params;
  const { data, loading, error } = useFetchItemData(id);
  const styles = useStyles();

  const Header = () => (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        testID="back-button"
        style={styles.backButton}
      >
        <Typography variant="header" style={styles.backText}>
          {"<"}
        </Typography>
        <Typography variant="header" style={styles.backText}>
          Back
        </Typography>
      </TouchableOpacity>
    </View>
  );

  if (loading) {
    return (
      <ScreenContainer center>
        <Header />
        <LoadingSpinner />
      </ScreenContainer>
    );
  }

  if (error) {
    return (
      <ScreenContainer center>
        <Header />
        <Typography variant="error">Error: {error}</Typography>
      </ScreenContainer>
    );
  }

  if (!data) {
    return (
      <ScreenContainer center>
        <Header />
        <Typography variant="body">Item not found</Typography>
      </ScreenContainer>
    );
  }

  return (
    <ScreenContainer center style={styles.container}>
      <Header />
      <Typography variant="largeHeader" center>
        {data.title}
      </Typography>
      <Typography variant="largeBody" center>
        {data.body}
      </Typography>
    </ScreenContainer>
  );
};
