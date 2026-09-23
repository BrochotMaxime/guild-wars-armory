# Roadmap

## Purpose

This roadmap provides a high-level overview of the development and current status of Guild Wars Armory.

Detailed tasks and implementation progress are managed through GitHub Issues and Milestones.

## Milestone 1 — Project foundation

**Status: Completed**

Establish the technical and documentation foundations of the project before feature development.

Completed objectives:

- initialize the React and Vite project;
- configure ESLint, Prettier, and EditorConfig;
- define the coding conventions;
- create the initial project documentation;
- define the data model;
- define the functional workflow;
- document the local static data architecture decision.

## Milestone 2 — Core application

**Status: Completed**

Build the complete armor-planning workflow and its main business logic.

Completed objectives:

- implement profession and campaign selection;
- implement armor selection and details;
- display armor costs, crafting locations, and material requirements;
- display male and female armor previews;
- allow users to enter their current materials;
- calculate missing materials;
- calculate crafting requirements for rare materials;
- support nested crafting requirements;
- account for recipe output quantities;
- aggregate overlapping material requirements;
- calculate additional crafting costs;
- display acquisition methods and Melandru's Accord warnings;
- provide Guild Wars Wiki links;
- implement breadcrumb and backward navigation;
- reset dependent selections and planning state when earlier choices change.

The core user journey follows:

```text
Profession
    ↓
Campaign
    ↓
Armor
    ↓
Requirements
    ↓
Planner and acquisition details
```

## Milestone 3 — Polish and release

**Status: In progress**

Finalize the application and prepare it for public use.

Completed objectives:

- refine the visual identity and application branding;
- improve the responsive interface;
- improve semantic structure and keyboard accessibility;
- add visible focus states and reduced-motion support;
- add unit, integration, keyboard workflow, and accessibility tests;
- add the favicon and social-sharing image;
- add the initial SEO and social metadata;
- validate the production build.

Remaining objectives:

- complete the final content and documentation review;
- deploy the production application;
- add the canonical production URL;
- add absolute social-sharing URLs;
- validate the complete workflow in production;
- integrate the finished project into the portfolio.

## Future evolution

Possible improvements beyond V1 include:

- inventory persistence;
- saved planning sessions;
- multiple armor tracking;
- character management;
- additional armor-planning tools;
- expanded Guild Wars data;
- more detailed acquisition information;
- optional dynamic data sources.

These features are intentionally excluded from V1. They may be evaluated individually after the production release when they provide a clear improvement to the core planning experience.
