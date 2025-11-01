import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { DataItemScreen } from "./screens/DataItemScreen";
import { DataListScreen } from "./screens/DataListScreen";

export type RootStackParamList = {
  DataList: undefined;
  DataItem: { id: string };
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    // Safe area provider because new iphones with dynamic island, and some phones with notches sometimes don't render properly without it
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="DataList"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="DataList" component={DataListScreen} />
          <Stack.Screen name="DataItem" component={DataItemScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
