import { screen } from "@testing-library/react";
import { describe } from "vitest";
import { CardTopScorers } from ".";
import { setup } from "../../utils/setupTestRender";

describe("CardTopScorers Component", () => {
  it("should render without crash", () => {
    setup(<CardTopScorers />);

    expect(screen.getByText("PSG")).toBeInTheDocument();
  });
});
