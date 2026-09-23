# Functional workflow

## Purpose

This document describes the main user workflow and business rules implemented in Guild Wars Armory V1.

The application follows three main stages:

```text
Armor → Requirements → Acquisition
```

## Armor selection

The user selects an armor through the following steps:

```text
Profession
    ↓
Campaign
    ↓
Armor
```

Eye of the North is treated as a campaign within the application.

### Profession selection

The profession step is available when the application loads.

Selecting a profession:

- stores the selected profession;
- closes the profession step;
- enables and opens the campaign step;
- resets the selected campaign, armor, and planner state when the profession changes.

### Campaign selection

The campaign step becomes available after a profession has been selected.

Selecting a campaign:

- stores the selected campaign;
- filters the armor list by profession and campaign;
- closes the campaign step;
- enables and opens the armor step;
- resets the selected armor and planner state when the campaign changes.

### Armor selection

The armor step becomes available after a campaign has been selected.

Armor sets are separated into standard and prestige groups when applicable.

Selecting an armor displays:

- the armor name;
- its prestige status when applicable;
- its crafting locations;
- male and female previews;
- its total gold cost;
- its required common materials;
- its required rare materials.

On smaller screens, users can switch between the male and female previews. Both previews are displayed together on larger screens.

## Requirements

Armor requirements are displayed immediately after selecting an armor.

Common and rare materials are presented in separate groups.

Each material displays:

- its name;
- its icon;
- the required quantity;
- a button for opening its acquisition details.

Selecting **Check materials** opens the material checklist and moves the user to it.

## Inventory input

The material checklist lists the materials involved in the current plan.

For each material, the user can enter the quantity they already own.

Inventory values follow these rules:

- values represent whole material quantities;
- the minimum accepted value is zero;
- an empty value is treated as zero;
- excessive inventory values are allowed;
- missing quantities never become negative.

The basic missing-material calculation is:

```text
Missing = max(Required - Owned, 0)
```

Inventory values are stored only for the current planning session and are not persisted after a page reload.

## Crafting requirements

When a missing rare material has a crafting recipe, the planner displays a **Craft missing** option.

Enabling this option replaces the missing rare material with the ingredients required to craft it.

The number of required crafting operations is calculated as:

```text
Crafting operations =
ceil(Missing output quantity / Recipe output quantity)
```

The ingredient requirements and gold cost are multiplied by the number of crafting operations.

Crafting requirements may introduce:

- additional common materials;
- additional rare materials;
- additional gold costs.

If an ingredient is another craftable rare material, the user can also choose to craft its missing quantity. This allows the planner to expand crafting requirements recursively.

The player's inventory is considered at every crafting level. Only missing quantities generate further crafting requirements.

## Actual material needs

The application aggregates overlapping requirements before applying the user's inventory.

```text
Direct armor requirements
+
Selected crafting requirements
=
Total material requirements

Total material requirements
-
Owned materials
=
Actual missing materials
```

A material owned by the user is deducted only once from its aggregated requirement.

This prevents the same inventory quantity from being counted separately toward direct armor requirements and crafting requirements.

The planner also preserves the distinction between:

- quantities required directly by the armor;
- quantities introduced by crafting;
- total required quantities;
- owned quantities;
- missing quantities.

Rare crafting dependencies are displayed beneath their parent material to make the relationship easier to understand.

The final calculation answers the main planning question:

> What should I actually keep while playing Melandru's Accord to eventually craft this armor?

## Additional crafting cost

Each enabled crafting recipe may introduce an additional gold cost.

The planner adds the gold cost of every required crafting operation and displays the combined additional crafting cost when it is greater than zero.

This cost is separate from the original armor cost.

## Acquisition details

Selecting **Details** for a material opens a modal containing its acquisition information.

Possible acquisition methods include:

- salvage;
- material trader;
- artisan.

When an acquisition method is unavailable in Melandru's Accord, the modal displays a warning.

If an artisan recipe is available, the modal also displays:

- the required ingredient materials;
- their quantities;
- the crafting gold cost.

A Guild Wars Wiki link opens additional information about the selected material in a new browser tab.

The modal can be closed with:

- its close button;
- the `Escape` key;
- a click on the backdrop.

Keyboard focus remains inside the native modal while it is open.

## Navigation

The workflow panels allow users to move between:

```text
Profession → Campaign → Armor
```

The breadcrumb represents the current selection path and allows users to return directly to an earlier step.

Navigation behavior includes:

- opening the selected workflow panel;
- scrolling the selected step into view;
- moving keyboard focus to the relevant control;
- respecting the user's reduced-motion preference.

Changing an earlier selection resets all dependent selections and planning data.

```text
Change campaign
→ reset armor
→ reset planner inventory and crafting selections

Change profession
→ reset campaign
→ reset armor
→ reset planner inventory and crafting selections
```

Selecting the home breadcrumb:

- clears the profession, campaign, and armor selections;
- clears the planner state;
- reopens the profession step;
- returns the user to the beginning of the workflow.

## Keyboard and accessibility behavior

The complete primary workflow can be operated with a keyboard.

The application provides:

- a skip link to move directly to the main content;
- visible focus indicators;
- labelled workflow controls;
- semantic headings and regions;
- accessible material inventory labels;
- accessible table headings;
- reduced-motion support.

The skip link moves focus without leaving a persistent URL fragment. Reloading the application returns users to the initial workflow state.
