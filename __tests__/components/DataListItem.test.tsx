import { DataListItem } from "@/components/DataListItem/DataListItem";
import { render } from "@testing-library/react-native";

const mockData = {
  id: 1,
  userId: 1,
  title: "User 1 Test Title 1",
  body: "User 1 Test Body 1",
};

describe("<DataListItem />", () => {
  it("renders title and body correctly", () => {
    const { getByText } = render(<DataListItem item={mockData} />);
    expect(getByText("User 1 Test Title 1")).toBeTruthy();
    expect(getByText("User 1 Test Body 1")).toBeTruthy();
  });
});
