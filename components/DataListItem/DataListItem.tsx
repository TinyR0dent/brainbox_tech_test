import { ItemData } from "@/types/ItemData";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Typography } from "../Typography/Typography";
import { useStyles } from "./styles";

interface DataListItemProps {
  item: ItemData;
  searchQuery: string;
  onPress?: () => void;
}

export const DataListItem = ({
  item,
  searchQuery,
  onPress,
}: DataListItemProps) => {
  const [isFavored, setIsFavored] = useState(false);
  const styles = useStyles();

  // Added animation to improve UX
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: isFavored ? 1 : 0,
      duration: 250,
      useNativeDriver: false,
    }).start();
  }, [isFavored, animation]);

  const overlayScale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  // I wanted to hightlight the search query in the title for better UX
  const getHighlightedTitle = () => {
    if (!searchQuery)
      return <Typography variant="header">{item.title}</Typography>;
    const query = searchQuery.trim();
    if (!query) return <Typography variant="header">{item.title}</Typography>;
    const regex = new RegExp(
      `(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
      "ig"
    );
    const parts = item.title.split(regex);
    return (
      <Text>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <Text
              key={i}
              style={{ backgroundColor: "#ffe066", fontWeight: "bold" }}
            >
              {part}
            </Text>
          ) : (
            <Text key={i}>{part}</Text>
          )
        )}
      </Text>
    );
  };

  return (
    <View style={styles.unFavoredContainer}>
      <Animated.View
        pointerEvents="none"
        style={[
          StyleSheet.absoluteFill,
          {
            backgroundColor: styles.favoredContainer.backgroundColor,
            transform: [
              { scale: overlayScale },
              {
                translateX: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, 0],
                }),
              },
            ],
            borderRadius: styles.unFavoredContainer.borderRadius || 10,
            opacity: animation,
            alignItems: "flex-end",
            justifyContent: "flex-start",
          },
        ]}
      />
      <TouchableOpacity
        style={styles.favButton}
        onPress={() => setIsFavored(!isFavored)}
        accessibilityLabel={isFavored ? "Unfavorite" : "Favorite"}
      >
        <MaterialIcons
          name={isFavored ? "star" : "star-border"}
          size={22}
          color={isFavored ? "#FFD600" : "#6ab6aa"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={onPress ? 0.7 : 1}
        style={{ flex: 1 }}
        disabled={!onPress}
      >
        {getHighlightedTitle()}
        <Typography variant="body" numberOfLines={2} ellipsizeMode="tail">
          {item.body}
        </Typography>
      </TouchableOpacity>
    </View>
  );
};
