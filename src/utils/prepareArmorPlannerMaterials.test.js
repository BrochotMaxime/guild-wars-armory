import { describe, expect, it } from "vitest";

import prepareArmorPlannerMaterials from "./prepareArmorPlannerMaterials";

describe("prepareArmorPlannerMaterials", () => {
  const materials = [
    {
      id: "iron-ingot",
      type: "common",
    },
    {
      id: "final-rare-material",
      type: "rare",
    },
    {
      id: "intermediate-rare-material",
      type: "rare",
    },
    {
      id: "nested-rare-material",
      type: "rare",
    },
    {
      id: "orphan-rare-material",
      type: "rare",
    },
  ];

  function createMaterialStatus(materialId, required) {
    return {
      materialId,
      required,
      owned: 0,
      missing: required,
    };
  }

  it("merges planner materials without duplicating existing material IDs", () => {
    const materialStatus = [
      createMaterialStatus("iron-ingot", 350),
      createMaterialStatus("final-rare-material", 35),
    ];

    const actualMaterialNeeds = [
      createMaterialStatus("iron-ingot", 420),
      createMaterialStatus("intermediate-rare-material", 12),
    ];

    const craftingRequirements = [
      {
        materialId: "final-rare-material",
        ingredients: [
          {
            materialId: "intermediate-rare-material",
            quantity: 12,
          },
        ],
        gold: 250,
      },
    ];

    const result = prepareArmorPlannerMaterials({
      materialStatus,
      actualMaterialNeeds,
      materials,
      craftingRequirements,
    });

    expect(result).toEqual({
      commonPlannerMaterials: [createMaterialStatus("iron-ingot", 420)],
      orderedRareMaterials: [
        {
          ...createMaterialStatus("final-rare-material", 35),
          depth: 0,
        },
        {
          ...createMaterialStatus("intermediate-rare-material", 12),
          depth: 1,
        },
      ],
      additionalCraftingGold: 250,
    });
  });

  it("orders nested rare materials from parent to child", () => {
    const materialStatus = [createMaterialStatus("final-rare-material", 2)];

    const actualMaterialNeeds = [
      createMaterialStatus("nested-rare-material", 9),
      createMaterialStatus("intermediate-rare-material", 4),
    ];

    const craftingRequirements = [
      {
        materialId: "final-rare-material",
        ingredients: [
          {
            materialId: "intermediate-rare-material",
            quantity: 4,
          },
        ],
        gold: 200,
      },
      {
        materialId: "intermediate-rare-material",
        ingredients: [
          {
            materialId: "nested-rare-material",
            quantity: 9,
          },
        ],
        gold: 150,
      },
    ];

    const result = prepareArmorPlannerMaterials({
      materialStatus,
      actualMaterialNeeds,
      materials,
      craftingRequirements,
    });

    expect(result.orderedRareMaterials).toEqual([
      {
        ...createMaterialStatus("final-rare-material", 2),
        depth: 0,
      },
      {
        ...createMaterialStatus("intermediate-rare-material", 4),
        depth: 1,
      },
      {
        ...createMaterialStatus("nested-rare-material", 9),
        depth: 2,
      },
    ]);

    expect(result.additionalCraftingGold).toBe(350);
  });

  it("keeps unrelated rare materials at the root level", () => {
    const materialStatus = [createMaterialStatus("final-rare-material", 2)];

    const actualMaterialNeeds = [
      createMaterialStatus("orphan-rare-material", 5),
    ];

    const result = prepareArmorPlannerMaterials({
      materialStatus,
      actualMaterialNeeds,
      materials,
      craftingRequirements: [],
    });

    expect(result.orderedRareMaterials).toEqual([
      {
        ...createMaterialStatus("final-rare-material", 2),
        depth: 0,
      },
      {
        ...createMaterialStatus("orphan-rare-material", 5),
        depth: 0,
      },
    ]);
  });

  it("ignores materials whose type cannot be found", () => {
    const unknownMaterial = createMaterialStatus("unknown-material", 10);

    const result = prepareArmorPlannerMaterials({
      materialStatus: [unknownMaterial],
      actualMaterialNeeds: [],
      materials,
      craftingRequirements: [],
    });

    expect(result.commonPlannerMaterials).toEqual([]);
    expect(result.orderedRareMaterials).toEqual([]);
  });

  it("returns empty groups and zero gold when no materials are provided", () => {
    const result = prepareArmorPlannerMaterials({
      materialStatus: [],
      actualMaterialNeeds: [],
      materials,
      craftingRequirements: [],
    });

    expect(result).toEqual({
      commonPlannerMaterials: [],
      orderedRareMaterials: [],
      additionalCraftingGold: 0,
    });
  });
});
