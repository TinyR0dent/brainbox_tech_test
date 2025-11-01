import { ItemData } from "@/types/ItemData";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Typography } from "../Typography/Typography";
import { useStyles } from "./styles";

interface DataListItemProps {
  item: ItemData;
  onPress?: () => void;
}

export const DataListItem = ({ item, onPress }: DataListItemProps) => {
  const [isFavored, setIsFavored] = useState(false);
  const styles = useStyles();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={isFavored ? styles.favoredContainer : styles.unFavoredContainer}
      activeOpacity={onPress ? 0.7 : 1}
    >
      <TouchableOpacity
        style={styles.favButton}
        onPress={() => setIsFavored(!isFavored)}
        accessibilityLabel={isFavored ? "Unfavorite" : "Favorite"}
      >
        <MaterialIcons
          name={isFavored ? "star" : "star-border"}
          size={22}
          color={isFavored ? "#FFD600" : "#888"}
        />
      </TouchableOpacity>
      <Typography variant="header">{item.title}</Typography>
      <Typography variant="body" numberOfLines={2} ellipsizeMode="tail">
        {item.body}
      </Typography>
    </TouchableOpacity>
  );
};
