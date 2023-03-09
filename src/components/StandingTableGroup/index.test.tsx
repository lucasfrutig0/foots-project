import { screen } from "@testing-library/react";
import { describe } from "vitest";
import { StandingTableGroup } from ".";
import { setup } from "../../utils/setupTestRender";

describe("StandingTableGroup Component", () => {
  it("should render without crash", () => {
    setup(<StandingTableGroup />);

    expect(screen.getByText(/grupo a/i)).toBeInTheDocument();
  });
});
