import { DataListScreen } from "@/app/screens/DataListScreen/DataListScreen";
import { ItemData } from "@/types/ItemData";
import { mockUseFetchAllData } from "@mocks/testMocks";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import React from "react";

describe("DataListScreen", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseFetchAllData.mockImplementation(() => ({
      data: [],
      loading: false,
      error: null,
    }));
  });

  describe("retry logic", () => {
    beforeEach(() => {
      mockUseFetchAllData
        .mockImplementationOnce(() => ({
          data: [],
          loading: false,
          error: "Test error",
        }))
        .mockImplementationOnce(() => ({
          data: mockData,
          loading: false,
          error: null,
        }));
    });

    it("calls useFetchAllData with incremented retryKey on retry", async () => {
      const { getByText, getByTestId } = renderWithNavigation(
        <DataListScreen />
      );
      await waitFor(() => expect(mockUseFetchAllData).toHaveBeenCalledWith(0));
      await waitFor(() => expect(getByText(/Error:/)).toBeTruthy());

      const retryButton = await waitFor(() => getByTestId("retry-button"));
      fireEvent.press(retryButton);

      await waitFor(() => expect(mockUseFetchAllData).toHaveBeenCalledWith(1));
    });
  });

  const mockData: ItemData[] = [
    {
      id: 1,
      userId: 1,
      title: "User 1 Test Title 1",
      body: "User 1 Test Body 1",
    },
    {
      id: 2,
      userId: 1,
      title: "User 1 Test Title 2",
      body: "User 1 Test Body 2",
    },
    {
      id: 3,
      userId: 2,
      title: "User 2 Test Title 1",
      body: "User 2 Test Body 1",
    },
    {
      id: 4,
      userId: 2,
      title: "User 2 Test Title 2",
      body: "User 2 Test Body 2",
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseFetchAllData.mockClear();
    mockUseFetchAllData
      .mockImplementationOnce(() => ({
        data: [],
        loading: false,
        error: "Test error",
      }))
      .mockImplementationOnce(() => ({
        data: [{ id: 1, userId: 1, title: "Test", body: "Body" }],
        loading: false,
        error: null,
      }));
  });

  function renderWithNavigation(ui: React.ReactElement) {
    const Stack = createStackNavigator();
    return render(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="DataList">{() => ui}</Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  describe("loading state", () => {
    beforeEach(() => {
      mockUseFetchAllData.mockReset();
      mockUseFetchAllData.mockImplementation(() => ({
        data: [],
        loading: true,
        error: null,
      }));
    });
    it("renders loading state correctly", () => {
      const { getByTestId } = renderWithNavigation(<DataListScreen />);
      expect(getByTestId("loading-spinner")).toBeTruthy();
    });
  });

  describe("empty data state", () => {
    beforeEach(() => {
      mockUseFetchAllData.mockReset();
      mockUseFetchAllData.mockImplementation(() => ({
        data: [],
        loading: false,
        error: null,
      }));
    });
    it("renders 'no data available' message when data is empty", () => {
      const { getByText } = renderWithNavigation(<DataListScreen />);
      expect(getByText("No data available")).toBeTruthy();
    });
  });

  describe("data list state", () => {
    beforeEach(() => {
      mockUseFetchAllData.mockReset();
      mockUseFetchAllData.mockImplementation(() => ({
        data: mockData,
        loading: false,
        error: null,
      }));
    });
    it("renders list of all data items", () => {
      const { getByText } = renderWithNavigation(<DataListScreen />);
      expect(getByText("User 1 Test Title 1")).toBeTruthy();
      expect(getByText("User 1 Test Body 1")).toBeTruthy();
      expect(getByText("User 1 Test Title 2")).toBeTruthy();
      expect(getByText("User 1 Test Body 2")).toBeTruthy();
      expect(getByText("User 2 Test Title 1")).toBeTruthy();
      expect(getByText("User 2 Test Body 1")).toBeTruthy();
      expect(getByText("User 2 Test Title 2")).toBeTruthy();
      expect(getByText("User 2 Test Body 2")).toBeTruthy();
    });
  });
});
