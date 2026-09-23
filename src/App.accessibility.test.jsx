// @vitest-environment jsdom

import axe from "axe-core";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import App from "./App";

describe("App accessibility", () => {
  it("has no detectable accessibility violations in its initial state", async () => {
    const { container } = render(<App />);

    const results = await axe.run(container);

    expect(results.violations).toEqual([]);
  });

  it("has no detectable accessibility violations in the material checklist", async () => {
    const user = userEvent.setup();
    const { container } = render(<App />);

    await user.click(
      screen.getByRole("button", {
        name: /warrior/i,
      }),
    );

    await user.click(
      screen.getByRole("button", {
        name: /eye of the north/i,
      }),
    );

    await user.click(
      screen.getByRole("button", {
        name: /deldrimor armor/i,
      }),
    );

    await user.click(
      screen.getByRole("button", {
        name: /check materials/i,
      }),
    );

    expect(
      screen.getByRole("heading", {
        name: "Material checklist",
      }),
    ).toBeVisible();

    const results = await axe.run(container);

    expect(results.violations).toEqual([]);
  });
});
