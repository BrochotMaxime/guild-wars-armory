# Project Vision

## Project overview

Guild Wars Armory is a lightweight web application designed to help Guild Wars players plan the acquisition of armor sets.

The application focuses on the following workflow:

```text
Armor → Requirements → Acquisition
```

Players select a profession and campaign, choose an armor set, review its requirements, compare them with their current inventory, and identify the materials they still need.

The application is particularly useful for players using Melandru's Accord, where material traders are unavailable and careful resource management becomes more important.

## Problem

The Guild Wars Wiki provides detailed information about armor costs and material requirements.

However, players still need to determine manually:

- which required materials they already own;
- which materials are still missing;
- which common materials must be kept to craft missing rare materials;
- how many crafting operations are required;
- how much additional gold and material is required when crafting rare materials;
- which acquisition methods remain relevant when playing Melandru's Accord.

Guild Wars Armory simplifies this planning process by bringing these calculations together in a single workflow.

## Target users

The primary target users are Guild Wars players who want to prepare the acquisition of an armor set.

The application is especially useful for players using Melandru's Accord, where access to material traders is restricted and materials must often be obtained through salvage or crafting.

## Main user goal

The application should answer the following question:

> What should I actually keep while playing Melandru's Accord to eventually craft this armor?

## V1 scope

The first version allows users to:

- select a profession;
- select a campaign;
- browse the corresponding armor sets;
- view male and female armor previews;
- view armor crafting locations;
- view the total gold and material requirements;
- enter the materials they currently own;
- calculate missing materials;
- calculate the common materials required to craft missing rare materials;
- aggregate direct armor requirements and crafting requirements;
- calculate additional crafting costs;
- view relevant acquisition methods;
- identify acquisition methods unavailable in Melandru's Accord;
- access Guild Wars Wiki links for additional material information;
- navigate backward through the profession, campaign, and armor selections;
- reset dependent selections when an earlier choice changes;
- complete the main workflow using keyboard navigation;
- use the application across mobile and desktop layouts.

## Out of scope for V1

The first version does not include:

- user accounts;
- authentication;
- backend services;
- databases;
- saved inventories;
- local storage persistence;
- multiple armor tracking;
- character management;
- farming guides;
- detailed drop locations;
- dynamic material prices;
- build planning.

## Product principles

The application should remain:

- simple to understand;
- simple to use;
- simple to maintain;
- accessible through semantic and keyboard-friendly interactions;
- focused on the armor-planning workflow;
- lightweight in its technical architecture.

Features should only be introduced when they clearly improve the core user experience.
