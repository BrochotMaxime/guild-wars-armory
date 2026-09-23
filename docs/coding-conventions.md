# Coding conventions

## Purpose

These conventions define the coding standards used in Guild Wars Armory.

The goal is to keep the codebase readable, consistent, accessible, testable, and maintainable without introducing unnecessary complexity.

These conventions may evolve when a change provides a clear improvement to the project.

## General principles

- Prefer readability over clever code.
- Keep each component, hook, or function focused on a clear responsibility.
- Use explicit and meaningful names.
- Avoid unnecessary abstractions and dependencies.
- Keep data, business logic, stateful behavior, interface components, and styles separated.
- Prefer data-driven behavior over armor-specific or material-specific conditions.
- Use Prettier for formatting.
- Use ESLint for static code analysis.
- Add or update tests when changing critical behavior.

## File naming

### React components

Use PascalCase for React component files:

```text
ArmorDetails.jsx
MaterialChecklistRow.jsx
MaterialDetails.jsx
```

### Hooks

Use camelCase beginning with `use` for custom hook files:

```text
useArmorPlanning.js
useWorkflowNavigation.js
```

### Utility and data files

Use camelCase for non-component JavaScript files:

```text
calculateMissingMaterials.js
prepareMaterialChecklistMaterials.js
craftingRecipes.js
```

### Tests

Place tests close to the code or workflow they validate.

Use the `.test.js` or `.test.jsx` suffix:

```text
calculateMissingMaterials.test.js
prepareMaterialChecklistMaterials.test.js
App.test.jsx
accessibility.test.jsx
```

### Styles

Use lowercase kebab-case names for Sass files.

Use an underscore prefix for partial stylesheets:

```text
_armor-card.scss
_material-details.scss
_workflow-panel.scss
```

## React components

- Use PascalCase for component names.
- Use function declarations for components.
- Keep components focused on one interface responsibility.
- Split components when they become difficult to understand or manage.
- Prefer props for passing data and callbacks.
- Keep shared selection state close to the common parent that needs it.
- Extract reusable stateful behavior into custom hooks.
- Avoid global state management unless application complexity clearly requires it.
- Use stable identifiers as React keys.
- Do not store values in state when they can be derived from existing props or state.

## Hooks

- Prefix custom hooks with `use`.
- Keep hooks focused on a reusable stateful responsibility.
- Return only the state and actions required by their consumers.
- Keep pure calculations outside hooks whenever they can be implemented as utility functions.
- Respect React hook rules and dependency requirements.

## Functions and variables

Use camelCase for functions and variables:

```js
calculateMissingMaterials();
selectedProfession;
craftingRequirements;
```

Use UPPER_SNAKE_CASE for fixed constants when appropriate:

```js
WORKFLOW_STEPS;
```

Use descriptive boolean names beginning with terms such as:

```text
is
has
can
should
```

Examples:

```js
isExpanded;
hasCraftingRecipe;
canCraft;
shouldReduceMotion;
```

Prefer small functions with explicit inputs and outputs.

## Data

Static Guild Wars data must remain separate from UI components.

Use identifiers to reference related records rather than duplicating complete objects across data files.

Business logic must remain separate from both data files and interface components.

Calculated runtime values, such as inventory status and crafting requirements, must not be added to static game data.

## Business logic

Core calculations should be implemented as pure utility functions whenever possible.

Utility functions should:

- avoid modifying their input values;
- return predictable results for the same inputs;
- remain independent from React and the DOM;
- avoid armor-specific or material-specific conditions;
- handle empty and excessive values safely;
- be covered by focused unit tests.

## Styling

Use Sass with SCSS syntax.

Follow a BEM-inspired class naming convention:

```text
armor-card
armor-card__content
armor-card--selected
```

Use shared variables for recurring values such as:

- colors;
- spacing;
- typography;
- breakpoints;
- border radii;
- shadows.

Keep component-specific styles in dedicated partials.

Provide responsive behavior from the smallest supported layout upward.

Respect `prefers-reduced-motion` when animations or smooth scrolling are used.

## Accessibility

Prefer semantic HTML elements before adding ARIA attributes.

Interactive elements must:

- use native buttons, links, inputs, or dialogs where appropriate;
- have clear accessible names;
- be operable with a keyboard;
- provide visible focus indicators;
- expose expanded, selected, pressed, or current states when necessary.

Decorative images must use an empty alternative text:

```jsx
alt = "";
```

Informative images must provide concise and meaningful alternative text.

Form controls must have visible or accessible labels.

ARIA attributes should only be added when native HTML does not already provide the required meaning.

## Imports

Group imports by responsibility when it improves readability:

1. React and external dependencies;
2. components;
3. data;
4. hooks;
5. utilities;
6. styles.

Avoid unused imports and circular dependencies.

## Formatting and quality

Before completing an issue, run the checks relevant to the changes:

```bash
npm run lint
npm run test:run
npx prettier . --check
npm run build
```

Use the production build check when changes may affect application compilation, assets, metadata, or deployment.

Formatting changes should be handled by Prettier rather than by manually enforcing stylistic preferences.
