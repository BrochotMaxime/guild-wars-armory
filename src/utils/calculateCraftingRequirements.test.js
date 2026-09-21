import { describe, expect, it } from "vitest";

import calculateCraftingRequirements from "./calculateCraftingRequirements";

describe("calculateCraftingRequirements", () => {
  const materials = [
    {
      id: "crafted-rare-material",
      type: "rare",
    },
    {
      id: "nested-rare-material",
      type: "rare",
    },
    {
      id: "common-material",
      type: "common",
    },
  ];

  const craftingRecipes = [
    {
      outputMaterialId: "crafted-rare-material",
      outputQuantity: 2,
      ingredients: [
        {
          materialId: "common-material",
          quantity: 10,
        },
      ],
      gold: 250,
    },
    {
      outputMaterialId: "nested-rare-material",
      outputQuantity: 1,
      ingredients: [
        {
          materialId: "common-material",
          quantity: 3,
        },
      ],
      gold: 50,
    },
  ];

  it("returns no requirements when crafting is not selected", () => {
    const materialStatus = [
      {
        materialId: "crafted-rare-material",
        required: 5,
        owned: 0,
        missing: 5,
      },
    ];

    const result = calculateCraftingRequirements(
      materialStatus,
      materials,
      craftingRecipes,
      {},
      {},
    );

    expect(result).toEqual([]);
  });

  it("calculates crafting operations, ingredients, and gold", () => {
    const materialStatus = [
      {
        materialId: "crafted-rare-material",
        required: 5,
        owned: 0,
        missing: 5,
      },
    ];

    const result = calculateCraftingRequirements(
      materialStatus,
      materials,
      craftingRecipes,
      {
        "crafted-rare-material": true,
      },
      {},
    );

    expect(result).toEqual([
      {
        materialId: "crafted-rare-material",
        missing: 5,
        craftingOperations: 3,
        ingredients: [
          {
            materialId: "common-material",
            quantity: 30,
          },
        ],
        gold: 750,
      },
    ]);
  });

  it("reduces crafting operations according to owned materials", () => {
    const materialStatus = [
      {
        materialId: "crafted-rare-material",
        required: 5,
        owned: 3,
        missing: 2,
      },
    ];

    const result = calculateCraftingRequirements(
      materialStatus,
      materials,
      craftingRecipes,
      {
        "crafted-rare-material": true,
      },
      {
        "crafted-rare-material": 3,
      },
    );

    expect(result).toEqual([
      {
        materialId: "crafted-rare-material",
        missing: 2,
        craftingOperations: 1,
        ingredients: [
          {
            materialId: "common-material",
            quantity: 10,
          },
        ],
        gold: 250,
      },
    ]);
  });

  it("returns no requirement when enough crafted material is already owned", () => {
    const materialStatus = [
      {
        materialId: "crafted-rare-material",
        required: 5,
        owned: 5,
        missing: 0,
      },
    ];

    const result = calculateCraftingRequirements(
      materialStatus,
      materials,
      craftingRecipes,
      {
        "crafted-rare-material": true,
      },
      {
        "crafted-rare-material": 5,
      },
    );

    expect(result).toEqual([]);
  });

  it("calculates nested crafting requirements", () => {
    const nestedRecipes = [
      {
        outputMaterialId: "crafted-rare-material",
        outputQuantity: 1,
        ingredients: [
          {
            materialId: "nested-rare-material",
            quantity: 2,
          },
        ],
        gold: 100,
      },
      craftingRecipes[1],
    ];

    const materialStatus = [
      {
        materialId: "crafted-rare-material",
        required: 2,
        owned: 0,
        missing: 2,
      },
    ];

    const result = calculateCraftingRequirements(
      materialStatus,
      materials,
      nestedRecipes,
      {
        "crafted-rare-material": true,
        "nested-rare-material": true,
      },
      {
        "nested-rare-material": 1,
      },
    );

    expect(result).toEqual([
      {
        materialId: "crafted-rare-material",
        missing: 2,
        craftingOperations: 2,
        ingredients: [
          {
            materialId: "nested-rare-material",
            quantity: 4,
          },
        ],
        gold: 200,
      },
      {
        materialId: "nested-rare-material",
        missing: 3,
        craftingOperations: 3,
        ingredients: [
          {
            materialId: "common-material",
            quantity: 9,
          },
        ],
        gold: 150,
      },
    ]);
  });

  it("ignores selected materials without a valid rare material recipe", () => {
    const materialStatus = [
      {
        materialId: "common-material",
        required: 10,
        owned: 0,
        missing: 10,
      },
    ];

    const result = calculateCraftingRequirements(
      materialStatus,
      materials,
      craftingRecipes,
      {
        "common-material": true,
      },
      {},
    );

    expect(result).toEqual([]);
  });
});
