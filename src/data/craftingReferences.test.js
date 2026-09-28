import { describe, expect, it } from "vitest";

import armors from "./armors/armors";
import craftingLocations from "./craftingLocations";

const allArmors = Object.values(armors).flat();

function findDuplicates(values) {
  return values.filter((value, index) => values.indexOf(value) !== index);
}

describe("crafting reference data", () => {
  it("defines unique crafting location IDs", () => {
    const locationIds = craftingLocations.map((location) => location.id);

    expect(findDuplicates(locationIds)).toEqual([]);
  });

  it("defines unique armor IDs", () => {
    const armorIds = allArmors.map((armor) => armor.id);

    expect(findDuplicates(armorIds)).toEqual([]);
  });

  it("provides at least one crafting location for every armor", () => {
    const armorsWithoutLocations = allArmors
      .filter(
        (armor) =>
          !Array.isArray(armor.craftingLocationIds) ||
          armor.craftingLocationIds.length === 0,
      )
      .map((armor) => armor.id);

    expect(armorsWithoutLocations).toEqual([]);
  });

  it("references existing crafting locations from every armor", () => {
    const knownLocationIds = new Set(
      craftingLocations.map((location) => location.id),
    );

    const invalidReferences = allArmors.flatMap((armor) =>
      armor.craftingLocationIds
        .filter((locationId) => !knownLocationIds.has(locationId))
        .map((locationId) => ({
          armorId: armor.id,
          locationId,
        })),
    );

    expect(invalidReferences).toEqual([]);
  });

  it("provides a Guild Wars Wiki URL for every crafting location", () => {
    const locationsWithoutWikiUrl = craftingLocations
      .filter(
        (location) =>
          typeof location.wikiUrl !== "string" ||
          !location.wikiUrl.startsWith("https://wiki.guildwars.com/wiki/"),
      )
      .map((location) => location.id);

    expect(locationsWithoutWikiUrl).toEqual([]);
  });
});
