import { DataListScreen } from "@/app/screens/DataListScreen/DataListScreen";
import { mockUseFetchAllData } from "@mocks/testMocks";
import { fireEvent, render } from "@testing-library/react-native";

describe("DataListScreen retry", () => {
  beforeEach(() => {
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

  it("calls useFetchAllData with incremented retryKey on retry", () => {
    const { getByText, getByTestId } = render(<DataListScreen />);
    expect(mockUseFetchAllData).toHaveBeenCalledWith(undefined);
    expect(getByText(/Error:/)).toBeTruthy();

    const retryButton = getByTestId("retry-button");
    fireEvent.press(retryButton);

    expect(mockUseFetchAllData).toHaveBeenCalledWith(1);
  });
});
