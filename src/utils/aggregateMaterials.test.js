import { describe, expect, it } from "vitest";

import aggregateMaterials from "./aggregateMaterials";

describe("aggregateMaterials", () => {
  const materials = [
    {
      id: "iron-ingot",
      type: "common",
    },
    {
      id: "charcoal",
      type: "common",
    },
    {
      id: "deldrimor-steel-ingot",
      type: "rare",
    },
    {
      id: "steel-ingot",
      type: "rare",
    },
  ];

  it("includes direct common requirements and excludes direct rare requirements", () => {
    const materialStatus = [
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
    ];

    const result = aggregateMaterials(materialStatus, [], {}, materials);

    expect(result).toEqual([
      {
        materialId: "iron-ingot",
        required: 350,
        owned: 0,
        missing: 350,
      },
    ]);
  });

  it("combines overlapping direct and crafting requirements", () => {
    const materialStatus = [
      {
        materialId: "iron-ingot",
        required: 350,
        owned: 0,
        missing: 350,
      },
    ];

    const craftingRequirements = [
      {
        ingredients: [
          {
            materialId: "iron-ingot",
            quantity: 50,
          },
          {
            materialId: "charcoal",
            quantity: 10,
          },
        ],
      },
      {
        ingredients: [
          {
            materialId: "iron-ingot",
            quantity: 20,
          },
        ],
      },
    ];

    const result = aggregateMaterials(
      materialStatus,
      craftingRequirements,
      {},
      materials,
    );

    expect(result).toEqual([
      {
        materialId: "iron-ingot",
        required: 420,
        owned: 0,
        missing: 420,
      },
      {
        materialId: "charcoal",
        required: 10,
        owned: 0,
        missing: 10,
      },
    ]);
  });

  it("includes rare materials required as crafting ingredients", () => {
    const craftingRequirements = [
      {
        ingredients: [
          {
            materialId: "steel-ingot",
            quantity: 12,
          },
        ],
      },
    ];

    const result = aggregateMaterials([], craftingRequirements, {}, materials);

    expect(result).toEqual([
      {
        materialId: "steel-ingot",
        required: 12,
        owned: 0,
        missing: 12,
      },
    ]);
  });

  it("subtracts inventory without returning negative missing quantities", () => {
    const materialStatus = [
      {
        materialId: "iron-ingot",
        required: 350,
        owned: 0,
        missing: 350,
      },
      {
        materialId: "charcoal",
        required: 10,
        owned: 0,
        missing: 10,
      },
    ];

    const inventory = {
      "iron-ingot": 100,
      charcoal: 20,
    };

    const result = aggregateMaterials(materialStatus, [], inventory, materials);

    expect(result).toEqual([
      {
        materialId: "iron-ingot",
        required: 350,
        owned: 100,
        missing: 250,
      },
      {
        materialId: "charcoal",
        required: 10,
        owned: 20,
        missing: 0,
      },
    ]);
  });

  it("returns an empty array when there are no applicable requirements", () => {
    const result = aggregateMaterials([], [], {}, materials);

    expect(result).toEqual([]);
  });
});
