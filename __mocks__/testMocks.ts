import { ItemData } from "@/types/ItemData";
export const mockUseFetchAllData: jest.Mock<
  { data: ItemData[]; loading: boolean; error: string | null },
  any[]
> = jest.fn(() => ({ data: [], loading: false, error: null }));
export const mockUseFetchItemData = jest.fn();
export const mockUseRoute = jest.fn();
export const mockUseNavigation = jest.fn(() => ({
  goBack: jest.fn(),
  navigate: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
  setOptions: jest.fn(),
  isFocused: jest.fn(() => true),
  canGoBack: jest.fn(() => true),
}));

jest.mock("@/hooks/useFetchAllData", () => ({
  useFetchAllData: (retryKey?: number) => mockUseFetchAllData(retryKey),
}));

jest.mock("@/hooks/useFetchItemData", () => ({
  useFetchItemData: () => mockUseFetchItemData(),
}));

jest.mock("@react-navigation/native", () => {
  const actual = jest.requireActual("@react-navigation/native");
  return {
    ...actual,
    useRoute: () => mockUseRoute(),
    useNavigation: () => mockUseNavigation(),
  };
});
