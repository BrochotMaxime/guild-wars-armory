import { describe, expect, it } from "vitest";

import calculateMissingMaterials from "./calculateMissingMaterials";

describe("calculateMissingMaterials", () => {
  const requirements = [
    {
      materialId: "iron-ingot",
      quantity: 350,
    },
    {
      materialId: "deldrimor-steel-ingot",
      quantity: 35,
    },
  ];

  it("marks every required material as missing when the inventory is empty", () => {
    const result = calculateMissingMaterials(requirements, {});

    expect(result).toEqual([
      {
        materialId: "iron-ingot",
        required: 350,
        owned: 0,
        missing: 350,
      },
      {
        materialId: "deldrimor-steel-ingot",
        required: 35,
        owned: 0,
        missing: 35,
      },
    ]);
  });

  it("subtracts partially owned materials from the required quantities", () => {
    const inventory = {
      "iron-ingot": 150,
      "deldrimor-steel-ingot": 10,
    };

    const result = calculateMissingMaterials(requirements, inventory);

    expect(result).toEqual([
      {
        materialId: "iron-ingot",
        required: 350,
        owned: 150,
        missing: 200,
      },
      {
        materialId: "deldrimor-steel-ingot",
        required: 35,
        owned: 10,
        missing: 25,
      },
    ]);
  });

  it("returns zero missing materials when the inventory exactly matches the requirements", () => {
    const inventory = {
      "iron-ingot": 350,
      "deldrimor-steel-ingot": 35,
    };

    const result = calculateMissingMaterials(requirements, inventory);

    expect(result.every(({ missing }) => missing === 0)).toBe(true);
  });

  it("never returns a negative missing quantity for excessive inventory values", () => {
    const inventory = {
      "iron-ingot": 500,
      "deldrimor-steel-ingot": 50,
    };

    const result = calculateMissingMaterials(requirements, inventory);

    expect(result).toEqual([
      {
        materialId: "iron-ingot",
        required: 350,
        owned: 500,
        missing: 0,
      },
      {
        materialId: "deldrimor-steel-ingot",
        required: 35,
        owned: 50,
        missing: 0,
      },
    ]);
  });

  it("returns an empty array when no material is required", () => {
    const result = calculateMissingMaterials([], {});

    expect(result).toEqual([]);
  });
});
