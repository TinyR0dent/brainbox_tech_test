import { RetryButton } from "@/components/RetryButton";
import { fireEvent, render } from "@testing-library/react-native";

describe("<RetryButton/>", () => {
  it("renders correctly and responds to press", () => {
    const onPressMock = jest.fn();
    const { getByTestId, getByText } = render(
      <RetryButton onPress={onPressMock} />
    );

    const button = getByTestId("retry-button");
    expect(button).toBeTruthy();

    const buttonText = getByText("Retry");
    expect(buttonText).toBeTruthy();

    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
