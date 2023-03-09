import { screen } from "@testing-library/react";
import { describe } from "vitest";
import { CardMatchOfDay } from ".";
import { setup } from "../../utils/setupTestRender";

describe("CardMatchOfDay Component", () => {
  it("should render without crash", () => {
    setup(<CardMatchOfDay />);

    expect(screen.getAllByText(/manchester/i)[0]).toBeInTheDocument();
  });
});
