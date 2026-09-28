import { describe, expect, it } from "vitest";

import armors from "./armors/armors";
import craftingLocations from "./craftingLocations";
import craftingRecipes from "./craftingRecipes";
import artisans from "./artisans";
import materials from "./materials";

const allArmors = Object.values(armors).flat();
const allMaterials = Object.values(materials).flat();

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

  it("defines unique artisan IDs", () => {
    const artisanIds = artisans.map((artisan) => artisan.id);

    expect(findDuplicates(artisanIds)).toEqual([]);
  });

  it("references an existing location from every artisan", () => {
    const knownLocationIds = new Set(
      craftingLocations.map((location) => location.id),
    );

    const invalidReferences = artisans
      .filter((artisan) => !knownLocationIds.has(artisan.locationId))
      .map((artisan) => ({
        artisanId: artisan.id,
        locationId: artisan.locationId,
      }));

    expect(invalidReferences).toEqual([]);
  });

  it("references existing materials from every artisan", () => {
    const knownMaterialIds = new Set(
      allMaterials.map((material) => material.id),
    );

    const invalidReferences = artisans.flatMap((artisan) =>
      artisan.craftedMaterialIds
        .filter((materialId) => !knownMaterialIds.has(materialId))
        .map((materialId) => ({
          artisanId: artisan.id,
          materialId,
        })),
    );

    expect(invalidReferences).toEqual([]);
  });

  it("does not duplicate materials within an artisan", () => {
    const duplicatedReferences = artisans.flatMap((artisan) =>
      findDuplicates(artisan.craftedMaterialIds).map((materialId) => ({
        artisanId: artisan.id,
        materialId,
      })),
    );

    expect(duplicatedReferences).toEqual([]);
  });

  it("provides at least one crafted material for every artisan", () => {
    const artisansWithoutMaterials = artisans
      .filter(
        (artisan) =>
          !Array.isArray(artisan.craftedMaterialIds) ||
          artisan.craftedMaterialIds.length === 0,
      )
      .map((artisan) => artisan.id);

    expect(artisansWithoutMaterials).toEqual([]);
  });

  it("provides a Guild Wars Wiki URL for every artisan", () => {
    const artisansWithoutWikiUrl = artisans
      .filter(
        (artisan) =>
          typeof artisan.wikiUrl !== "string" ||
          !artisan.wikiUrl.startsWith("https://wiki.guildwars.com/wiki/"),
      )
      .map((artisan) => artisan.id);

    expect(artisansWithoutWikiUrl).toEqual([]);
  });

  it("provides at least one artisan for every crafting recipe", () => {
    const recipeOutputsWithoutArtisan = craftingRecipes
      .filter(
        (recipe) =>
          !artisans.some((artisan) =>
            artisan.craftedMaterialIds.includes(recipe.outputMaterialId),
          ),
      )
      .map((recipe) => recipe.outputMaterialId);

    expect(recipeOutputsWithoutArtisan).toEqual([]);
  });
});
