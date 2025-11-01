import {
  mockUseFetchItemData,
  mockUseNavigation,
  mockUseRoute,
} from "@mocks/testMocks";

import { DataItemScreen } from "@/app/screens/DataItemScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { fireEvent, render } from "@testing-library/react-native";
import { act } from "react";

function renderWithNavigation(ui: React.ReactElement) {
  const Stack = createStackNavigator();
  return render(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DataItem">{() => ui}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

describe("<DataItemScreen />", () => {
  let mockGoBack: jest.Mock;
  beforeEach(() => {
    mockGoBack = jest.fn();
    mockUseRoute.mockReturnValue({ params: { id: 1 } });
    mockUseNavigation.mockReturnValue({
      goBack: mockGoBack,
      navigate: jest.fn(),
      addListener: jest.fn(),
      removeListener: jest.fn(),
      setOptions: jest.fn(),
      isFocused: jest.fn(() => true),
      canGoBack: jest.fn(() => true),
    });
  });

  it("renders loading state correctly", () => {
    mockUseFetchItemData.mockReturnValueOnce({
      data: null,
      loading: true,
      error: null,
    });
    const { getByTestId } = renderWithNavigation(<DataItemScreen />);
    expect(getByTestId("loading-spinner")).toBeTruthy();
  });

  it("renders error state correctly", () => {
    mockUseFetchItemData.mockReturnValueOnce({
      data: null,
      loading: false,
      error: "Some error",
    });
    const { getByText } = renderWithNavigation(<DataItemScreen />);
    expect(getByText(/Error:/)).toBeTruthy();
  });

  it("renders data correctly", () => {
    mockUseFetchItemData.mockReturnValueOnce({
      data: { id: 1, userId: 1, title: "Data Item", body: "Body" },
      loading: false,
      error: null,
    });
    const { getByText } = renderWithNavigation(<DataItemScreen />);
    expect(getByText("Data Item")).toBeTruthy();
    expect(getByText("Body")).toBeTruthy();
  });

  it("goes back on press", () => {
    mockUseFetchItemData.mockReturnValueOnce({
      data: { id: 1, userId: 1, title: "Data Item", body: "Body" },
      loading: false,
      error: null,
    });
    const { getByTestId } = renderWithNavigation(<DataItemScreen />);
    const backButton = getByTestId("back-button");
    act(() => {
      fireEvent.press(backButton);
    });
    expect(mockGoBack).toHaveBeenCalled();
  });
});
