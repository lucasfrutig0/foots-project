import { screen } from "@testing-library/react";
import { describe } from "vitest";
import { StandingTable } from ".";
import { setup } from "../../utils/setupTestRender";

describe("StandingTable Component", () => {
  it("should render without crash", () => {
    setup(<StandingTable />);

    expect(screen.getAllByText(/arsenal/i)[0]).toBeInTheDocument();
  });
});
