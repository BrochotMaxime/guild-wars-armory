# Data model

## Purpose

This document describes the data model implemented in Guild Wars Armory V1.

Application data is stored locally in static JavaScript files. V1 does not use a backend, external API, or database.

Identifiers connect related records while keeping each data collection independent.

## Profession

Represents a playable profession.

- `id` — unique identifier;
- `name` — profession name;
- `icon` — profession icon used in the interface;
- `image` — profession character image used in the selection card.

## Campaign

Represents a campaign available in the application.

Eye of the North is treated as a campaign within the application workflow.

- `id` — unique identifier;
- `name` — campaign name;
- `image` — campaign image used in the selection card.

## Armor

Represents an armor set associated with a profession and campaign.

- `id` — unique identifier;
- `name` — armor name;
- `professionId` — identifier of the associated profession;
- `campaignId` — identifier of the campaign under which the armor is classified;
- `craftingLocationIds` — identifiers of the locations where the maximum-stat armor can be crafted;
- `pieces` — armor slots included in the set;
- `prestige` — whether the armor is a prestige armor set;
- `images.male` — male armor preview;
- `images.female` — female armor preview;
- `cost.gold` — total required gold;
- `cost.materials` — required materials and quantities;
- `wikiUrl` — optional Guild Wars Wiki reference.

Each material requirement in `cost.materials` contains:

- `materialId` — identifier of the required material;
- `quantity` — total required quantity.

The supported armor slots are:

- `head`;
- `chest`;
- `hands`;
- `legs`;
- `feet`.

Not every armor set contains all five pieces. The `pieces` array only contains the slots available for that set.

Armor costs represent the total cost of all available pieces with maximum armor statistics.

The campaign used to classify an armor and the campaign containing its crafting location may differ. For example, an armor classified under Prophecies may have its maximum-stat version crafted at a location in Factions.

## Crafting location

Represents a location associated with armor or material crafting.

- `id` — unique identifier;
- `name` — location name;
- `campaignId` — identifier of the campaign containing the location;
- `wikiUrl` — Guild Wars Wiki reference.

Crafting locations are centralized so that armor sets and artisans can reference the same location without duplicating its name, campaign, or Wiki URL.

An armor references one or more locations through `craftingLocationIds`.

An artisan references one location through `locationId`.

## Material

Represents a common or rare crafting material.

- `id` — unique identifier;
- `name` — material name;
- `type` — `common` or `rare`;
- `icon` — material icon;
- `wikiUrl` — Guild Wars Wiki reference;
- `acquisitionMethodIds` — identifiers of the available acquisition methods.

## Crafting recipe

Represents the requirements for crafting a material.

- `id` — unique identifier;
- `outputMaterialId` — identifier of the material produced;
- `outputQuantity` — quantity produced by one crafting operation;
- `ingredients` — required ingredient materials and quantities;
- `gold` — gold cost of one crafting operation.

Each ingredient contains:

- `materialId` — identifier of the required material;
- `quantity` — quantity required for one crafting operation.

## Acquisition method

Represents a way of obtaining a material.

- `id` — unique identifier;
- `name` — acquisition method name;
- `availableInMelandrusAccord` — whether the method is available in Melandru's Accord.

## Artisan

Represents an artisan who can craft one or more materials.

- `id` — unique identifier;
- `name` — artisan name;
- `locationId` — identifier of the artisan's location;
- `craftedMaterialIds` — identifiers of the materials the artisan can craft;
- `wikiUrl` — Guild Wars Wiki reference.

The artisan's campaign is determined from the crafting location referenced by `locationId`.

Crafting recipes do not store artisan identifiers. The application finds the relevant artisans by checking which records contain the recipe's `outputMaterialId` in `craftedMaterialIds`.

This avoids maintaining the same relationship in both crafting recipes and artisan records.

## Relationships

The main relationships between the models are:

```text
Profession ──→ Armor ←── Campaign
                 │
                 ├──→ Material
                 │
                 └──→ Crafting location ←── Artisan
                              │                 │
                              ↓                 └──→ Material
                          Campaign

Material ──→ Acquisition method

Crafting recipe
     ├──→ Output material
     └──→ Ingredient materials
```

- An armor belongs to one profession.
- An armor is classified under one campaign.
- An armor references one or more crafting locations.
- A crafting location belongs to one campaign.
- A crafting location may be referenced by multiple armors or artisans.
- An armor contains one or more available armor pieces.
- An armor requires one or more materials.
- A material can have one or more acquisition methods.
- A material may have a crafting recipe.
- A crafting recipe produces a material from one or more ingredient materials.
- An ingredient material may itself have a crafting recipe.
- An artisan is associated with one crafting location.
- An artisan can craft one or more materials.
- A craftable material may be offered by multiple artisans.

## Material types

Materials are divided into two categories:

- `common` — common crafting materials;
- `rare` — rare crafting materials.

Rare materials may have crafting recipes requiring common materials, other rare materials, or both.

This distinction allows the interface to group materials by type and calculate the actual requirements when missing rare materials must be crafted.

## Crafting logic

Crafting recipes reference materials through their identifiers.

A recipe defines:

- the material produced;
- the quantity produced by one crafting operation;
- the required ingredients and their quantities;
- the gold cost of one crafting operation.

The number of crafting operations is calculated from the missing output quantity and the recipe's `outputQuantity`.

Crafting requirements are calculated recursively. When a selected recipe requires another craftable rare material, the application can also calculate the ingredients required to craft that intermediate material.

The player inventory is considered at each crafting level. Only the missing quantity of a material is used to calculate its crafting requirements.

This data-driven structure supports recursive crafting calculations without introducing material-specific conditions into the application.

Artisan references are independent from crafting calculations. They provide acquisition information for recipe output materials without affecting ingredient quantities or gold calculations.

Artisans are resolved from `craftedMaterialIds` and grouped in the interface according to the campaign of their referenced crafting location.

## Runtime planning state

Inventory and planning results are runtime state rather than static data models.

The main calculated values include:

- owned material quantities;
- missing material quantities;
- selected crafting options;
- expanded crafting requirements;
- aggregated material requirements;
- additional crafting gold;
- material display order and crafting depth.

These values are calculated from the selected armor, static application data, and current inventory. They are not persisted between page reloads in V1.
