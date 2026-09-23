# Architecture

## Purpose

This document describes the main architectural principles and technical organization of Guild Wars Armory V1.

The architecture remains simple, readable, and appropriate for the current scope of the application.

## Architecture principles

### Single responsibility

Each part of the application has one clear responsibility:

- components handle the user interface;
- hooks manage reusable stateful behavior;
- utility functions handle calculations and data preparation;
- data files contain static Guild Wars data;
- stylesheets define the visual presentation and responsive behavior;
- `App.jsx` coordinates the main application workflow.

### Simplicity

The application avoids unnecessary abstractions, dependencies, and architectural complexity.

New patterns or tools should only be introduced when they solve a concrete problem.

### Separation of concerns

The application separates its main responsibilities:

```text
data/
→ Static Guild Wars data

utils/
→ Pure business logic and calculations

hooks/
→ Reusable state and navigation behavior

components/
→ User interface and user interactions

styles/
→ Global, component, and responsive styles

App.jsx
→ Main workflow coordination and shared selections
```

### Data-driven design

Professions, campaigns, armor sets, materials, acquisition methods, and crafting recipes are represented as data.

New game content should primarily be added through the data layer rather than through armor-specific or material-specific interface logic.

### Testability

Core calculations are implemented as pure utility functions whenever possible.

This separation allows the business rules to be tested independently from the React interface. Integration tests then validate the critical user workflow and accessibility behavior.

## Technology stack

V1 uses:

- React for the user interface;
- Vite for development and production builds;
- JavaScript for application logic and data;
- Sass with SCSS syntax for styling;
- Vitest for unit and integration tests;
- React Testing Library and `user-event` for interface tests;
- axe-core for automated accessibility checks;
- ESLint for static code analysis;
- Prettier for code formatting.

V1 does not require:

- a backend;
- an external API;
- a database;
- authentication;
- an external state management library.

## Project structure

```text
docs/                  Project documentation and architecture decisions

public/
└── images/            Branding, backgrounds, armor, profession,
                       campaign, currency, and material assets

src/
├── components/        React interface components
├── data/              Static application data
├── hooks/             Reusable state and navigation logic
├── styles/            Sass stylesheets
├── utils/             Pure calculations and data preparation
├── App.jsx            Main application component
└── main.jsx           Application entry point
```

Components are grouped by their interface responsibility, including armor, layout, material, selector, UI, and workflow components.

## Data and business logic

Guild Wars data is stored locally and kept separate from the user interface.

Core business logic is handled through reusable utility functions, including:

```text
calculateMissingMaterials()
calculateCraftingRequirements()
aggregateMaterials()
prepareArmorPlannerMaterials()
```

These functions calculate missing materials, expand crafting requirements, aggregate overlapping requirements, and prepare materials for display in the armor planner.

Calculations remain generic and data-driven rather than containing armor-specific or material-specific conditions.

## State management

The main profession, campaign, and armor selections are coordinated by `App.jsx`.

Reusable stateful behavior is extracted into custom hooks:

- `useArmorPlanning` manages inventory values, crafting selections, and calculated material requirements;
- `useWorkflowNavigation` manages the active workflow step, scrolling, focus movement, and reduced-motion behavior.

Components receive data through props and communicate changes through callbacks.

No external state management library is required for the current application scope.

## Styling and responsive behavior

The interface uses Sass stylesheets organized by responsibility.

Shared variables define colors, spacing, typography, breakpoints, borders, and shadows. Component styles define the presentation of individual interface areas.

Responsive layouts support mobile and desktop use. Reduced-motion preferences and visible keyboard focus states are also respected.

## Testing strategy

Unit tests validate the core calculation and material-preparation functions.

Integration tests validate:

- the initial workflow state;
- profession, campaign, and armor selection;
- dependent selection resets;
- breadcrumb navigation;
- keyboard-only navigation;
- skip-link behavior.

Automated axe-core tests supplement manual accessibility checks. They help detect common accessibility problems but do not replace keyboard and visual testing.

## External resources

Guild Wars Armory complements rather than replaces the Guild Wars Wiki.

The application focuses on answering:

```text
What do I need?

What am I missing?

What should I keep?
```

The Guild Wars Wiki remains the external reference for detailed acquisition information and additional game documentation.
