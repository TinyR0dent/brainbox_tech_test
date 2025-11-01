import { Typography } from "@/components/Typography";
import { render } from "@testing-library/react-native";

function flattenStyle(style: any) {
  return Array.isArray(style)
    ? Object.assign({}, ...style.filter(Boolean))
    : style;
}

describe("<Typography />", () => {
  it("renders header variant correctly", () => {
    const { getByText } = render(
      <Typography variant="header">Header Text</Typography>
    );
    const textElement = getByText("Header Text");
    expect(textElement).toBeTruthy();
    const style = flattenStyle(textElement.props.style);
    expect(style).toMatchObject({
      fontSize: 18,
      fontWeight: "bold",
    });
  });

  it("renders body variant correctly", () => {
    const { getByText } = render(
      <Typography variant="body">Body Text</Typography>
    );
    const textElement = getByText("Body Text");
    expect(textElement).toBeTruthy();
    const style = flattenStyle(textElement.props.style);
    expect(style).toMatchObject({
      fontSize: 12,
    });
  });

  it("renders error variant correctly", () => {
    const { getByText } = render(
      <Typography variant="error">Error Text</Typography>
    );
    const textElement = getByText("Error Text");
    expect(textElement).toBeTruthy();
    const style = flattenStyle(textElement.props.style);
    expect(style).toMatchObject({
      fontSize: 12,
      color: "red",
    });
  });
});
