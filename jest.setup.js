jest.mock("react-native-gesture-handler", () =>
  require("./__mocks__/react-native-gesture-handler.js")
);

const mockUseFetchAllData = jest.fn();
jest.mock("@/hooks/useFetchAllData", () => ({
  useFetchAllData: () => mockUseFetchAllData(),
}));

global.mockUseFetchAllData = mockUseFetchAllData;

const mockUseFetchItemData = jest.fn();
jest.mock("@/hooks/useFetchItemData", () => ({
  useFetchItemData: () => mockUseFetchItemData(),
}));

global.mockUseFetchItemData = mockUseFetchItemData;

const mockUseRoute = jest.fn();
const mockUseNavigation = jest.fn();
jest.mock("@react-navigation/native", () => {
  const actual = jest.requireActual("@react-navigation/native");
  return {
    ...actual,
    useRoute: () => mockUseRoute(),
    useNavigation: () => mockUseNavigation(),
  };
});
global.mockUseRoute = mockUseRoute;
global.mockUseNavigation = mockUseNavigation;
