import { render } from "@testing-library/react";
import App from "./App";

jest.mock("./pages/Main", () => ({
  Main: () => <div>Main</div>,
}));

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(document.body).toContainHTML("Main");
  });
});
