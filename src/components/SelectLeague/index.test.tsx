import { screen } from "@testing-library/react";
import { describe } from "vitest";
import { SelectLeague } from ".";
import { setup } from "../../utils/setupTestRender";

describe("SelectLeague Component", () => {
  it("should render without crash", () => {
    setup(<SelectLeague />);

    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("should select an option from combobox", async () => {
    const { user } = setup(<SelectLeague />);

    await user.selectOptions(screen.getByRole("combobox"), "Bundesliga");
    expect(screen.getByRole("combobox")).toHaveValue("82");
  });
});
