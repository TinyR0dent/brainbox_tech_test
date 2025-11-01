import { ItemData } from "@/types/ItemData";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";
import { Typography } from "../Typography/Typography";
import { useStyles } from "./styles";

interface DataListItemProps {
  item: ItemData;
  onPress?: () => void;
}

export const DataListItem = ({ item, onPress }: DataListItemProps) => {
  const [isFavored, setIsFavored] = useState(false);
  const styles = useStyles();
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
          color={isFavored ? "#FFD600" : "#888"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={onPress ? 0.7 : 1}
        style={{ flex: 1 }}
        disabled={!onPress}
      >
        <Typography variant="header">{item.title}</Typography>
        <Typography variant="body" numberOfLines={2} ellipsizeMode="tail">
          {item.body}
        </Typography>
      </TouchableOpacity>
    </View>
  );
};
