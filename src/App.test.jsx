// @vitest-environment jsdom

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import App from "./App";

async function selectDeldrimorArmor(user) {
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
}

async function tabToElement(user, element, maximumTabs = 30) {
  let tabCount = 0;

  while (document.activeElement !== element && tabCount < maximumTabs) {
    await user.tab();
    tabCount += 1;
  }

  expect(element).toHaveFocus();
}

describe("App workflow", () => {
  it("displays the initial workflow state", () => {
    render(<App />);

    const professionTrigger = screen.getByRole("button", {
      name: /^profession/i,
    });

    const campaignTrigger = screen.getByRole("button", {
      name: /^campaign/i,
    });

    const armorTrigger = screen.getByRole("button", {
      name: /^armor/i,
    });

    expect(professionTrigger).toBeEnabled();
    expect(professionTrigger).toHaveAttribute("aria-expanded", "true");

    expect(campaignTrigger).toBeDisabled();
    expect(campaignTrigger).toHaveAttribute("aria-expanded", "false");

    expect(armorTrigger).toBeDisabled();
    expect(armorTrigger).toHaveAttribute("aria-expanded", "false");

    expect(
      screen.getByRole("button", {
        name: /warrior/i,
      }),
    ).toBeEnabled();
  });

  it("allows the user to select a profession, campaign, and armor", async () => {
    const user = userEvent.setup();

    render(<App />);

    const professionTrigger = screen.getByRole("button", {
      name: /^profession/i,
    });

    const campaignTrigger = screen.getByRole("button", {
      name: /^campaign/i,
    });

    const armorTrigger = screen.getByRole("button", {
      name: /^armor/i,
    });

    await user.click(
      screen.getByRole("button", {
        name: /warrior/i,
      }),
    );

    expect(professionTrigger).toHaveAttribute("aria-expanded", "false");
    expect(professionTrigger).toHaveTextContent("Warrior");

    expect(campaignTrigger).toBeEnabled();
    expect(campaignTrigger).toHaveAttribute("aria-expanded", "true");

    await user.click(
      screen.getByRole("button", {
        name: /eye of the north/i,
      }),
    );

    expect(campaignTrigger).toHaveAttribute("aria-expanded", "false");
    expect(campaignTrigger).toHaveTextContent("Eye of the North");

    expect(armorTrigger).toBeEnabled();
    expect(armorTrigger).toHaveAttribute("aria-expanded", "true");

    await user.click(
      screen.getByRole("button", {
        name: /deldrimor armor/i,
      }),
    );

    expect(armorTrigger).toHaveTextContent("Deldrimor Armor");

    expect(
      screen.getByRole("heading", {
        name: "Deldrimor Armor",
      }),
    ).toBeVisible();

    expect(
      screen.getByRole("heading", {
        name: "Requirements",
      }),
    ).toBeVisible();
  });

  it("resets the campaign and armor when the profession changes", async () => {
    const user = userEvent.setup();

    render(<App />);

    await selectDeldrimorArmor(user);

    expect(
      screen.getByRole("heading", {
        name: "Deldrimor Armor",
      }),
    ).toBeVisible();

    await user.click(
      screen.getByRole("button", {
        name: /^profession.*warrior/i,
      }),
    );

    await user.click(
      screen.getByRole("button", {
        name: /ranger/i,
      }),
    );

    const professionTrigger = screen.getByRole("button", {
      name: /^profession.*ranger/i,
    });

    const campaignTrigger = screen.getByRole("button", {
      name: /^campaign/i,
    });

    const armorTrigger = screen.getByRole("button", {
      name: /^armor/i,
    });

    expect(professionTrigger).toHaveTextContent("Ranger");

    expect(campaignTrigger).toBeEnabled();
    expect(campaignTrigger).toHaveTextContent("Not selected");
    expect(campaignTrigger).toHaveAttribute("aria-expanded", "true");

    expect(armorTrigger).toBeDisabled();
    expect(armorTrigger).toHaveTextContent("Not selected");
    expect(armorTrigger).toHaveAttribute("aria-expanded", "false");

    expect(
      screen.queryByRole("heading", {
        name: "Deldrimor Armor",
      }),
    ).not.toBeInTheDocument();
  });

  it("resets the armor and filters the list when the campaign changes", async () => {
    const user = userEvent.setup();

    render(<App />);

    await selectDeldrimorArmor(user);

    expect(
      screen.getByRole("heading", {
        name: "Deldrimor Armor",
      }),
    ).toBeVisible();

    await user.click(
      screen.getByRole("button", {
        name: /^campaign.*eye of the north/i,
      }),
    );

    await user.click(
      screen.getByRole("button", {
        name: /prophecies/i,
      }),
    );

    const professionTrigger = screen.getByRole("button", {
      name: /^profession.*warrior/i,
    });

    const campaignTrigger = screen.getByRole("button", {
      name: /^campaign.*prophecies/i,
    });

    const armorTrigger = screen.getByRole("button", {
      name: /^armor/i,
    });

    expect(professionTrigger).toHaveTextContent("Warrior");

    expect(campaignTrigger).toHaveTextContent("Prophecies");
    expect(campaignTrigger).toHaveAttribute("aria-expanded", "false");

    expect(armorTrigger).toBeEnabled();
    expect(armorTrigger).toHaveTextContent("Not selected");
    expect(armorTrigger).toHaveAttribute("aria-expanded", "true");

    expect(
      screen.queryByRole("heading", {
        name: "Deldrimor Armor",
      }),
    ).not.toBeInTheDocument();

    expect(
      screen.queryByRole("button", {
        name: /deldrimor armor/i,
      }),
    ).not.toBeInTheDocument();
  });

  it("resets the complete workflow from the home breadcrumb", async () => {
    const user = userEvent.setup();

    render(<App />);

    await selectDeldrimorArmor(user);

    expect(
      screen.getByRole("heading", {
        name: "Deldrimor Armor",
      }),
    ).toBeVisible();

    const homeButton = screen.getByRole("button", {
      name: "Return to home",
    });

    await user.click(homeButton);

    const professionTrigger = screen.getByRole("button", {
      name: /^profession/i,
    });

    const campaignTrigger = screen.getByRole("button", {
      name: /^campaign/i,
    });

    const armorTrigger = screen.getByRole("button", {
      name: /^armor/i,
    });

    expect(homeButton).toHaveAttribute("aria-current", "page");

    expect(professionTrigger).toBeEnabled();
    expect(professionTrigger).toHaveTextContent("Not selected");
    expect(professionTrigger).toHaveAttribute("aria-expanded", "true");

    expect(campaignTrigger).toBeDisabled();
    expect(campaignTrigger).toHaveTextContent("Not selected");
    expect(campaignTrigger).toHaveAttribute("aria-expanded", "false");

    expect(armorTrigger).toBeDisabled();
    expect(armorTrigger).toHaveTextContent("Not selected");
    expect(armorTrigger).toHaveAttribute("aria-expanded", "false");

    expect(
      screen.queryByRole("heading", {
        name: "Deldrimor Armor",
      }),
    ).not.toBeInTheDocument();
  });

  it("moves focus to the main content without keeping the URL fragment", async () => {
    const user = userEvent.setup();

    window.history.replaceState(null, "", "/#main-content");

    render(<App />);

    expect(window.location.hash).toBe("");

    const skipLink = screen.getByRole("link", {
      name: /skip to main content/i,
    });

    await user.tab();

    expect(skipLink).toHaveFocus();

    await user.keyboard("{Enter}");

    expect(screen.getByRole("main")).toHaveFocus();

    expect(window.location.hash).toBe("");
  });

  it("supports the main selection workflow using only the keyboard", async () => {
    const user = userEvent.setup();

    render(<App />);

    const warriorButton = screen.getByRole("button", {
      name: /warrior/i,
    });

    await tabToElement(user, warriorButton);
    await user.keyboard("{Enter}");

    const campaignTrigger = screen.getByRole("button", {
      name: /^campaign/i,
    });

    await waitFor(() => {
      expect(campaignTrigger).toHaveFocus();
    });

    const eyeOfTheNorthButton = screen.getByRole("button", {
      name: /eye of the north/i,
    });

    await tabToElement(user, eyeOfTheNorthButton);
    await user.keyboard(" ");

    const armorTrigger = screen.getByRole("button", {
      name: /^armor/i,
    });

    await waitFor(() => {
      expect(armorTrigger).toHaveFocus();
    });

    const deldrimorArmorButton = screen.getByRole("button", {
      name: /deldrimor armor/i,
    });

    await tabToElement(user, deldrimorArmorButton);
    await user.keyboard("{Enter}");

    const armorDetails = await screen.findByRole("region", {
      name: "Deldrimor Armor",
    });

    await waitFor(() => {
      expect(armorDetails).toHaveFocus();
    });

    expect(
      screen.getByRole("heading", {
        name: "Requirements",
      }),
    ).toBeVisible();
  });

  it("disables campaigns without armor for the selected profession", async () => {
    const user = userEvent.setup();

    render(<App />);

    await user.click(
      screen.getByRole("button", {
        name: /assassin/i,
      }),
    );

    const campaignTrigger = screen.getByRole("button", {
      name: /^campaign/i,
    });

    await waitFor(() => {
      expect(campaignTrigger).toHaveFocus();
    });

    const propheciesButton = screen.getByRole("button", {
      name: /prophecies.*no armor available/i,
    });

    const factionsButton = screen.getByRole("button", {
      name: /^factions$/i,
    });

    expect(propheciesButton).toBeDisabled();
    expect(factionsButton).toBeEnabled();

    await user.tab();

    expect(factionsButton).toHaveFocus();

    await user.click(propheciesButton);

    expect(campaignTrigger).toHaveTextContent("Not selected");

    const armorTrigger = screen.getByRole("button", {
      name: /^armor/i,
    });

    expect(armorTrigger).toBeDisabled();
  });
});
