import { screen } from "@testing-library/react";
import { describe } from "vitest";
import { Hero } from ".";
import { setup } from "../../utils/setupTestRender";

describe("Hero Component", () => {
  it("should render without crash", () => {
    setup(<Hero />);
    expect(
      screen.getByRole("heading", { name: /premier league/i })
    ).toBeInTheDocument();
  });
});