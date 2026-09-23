# Guild Wars Armory

> Plan your armor. Track your materials.

Guild Wars Armory is an unofficial, fan-made planning application for Guild Wars armor sets. It helps players explore available armor, review crafting requirements, track owned materials, and calculate what they still need.

## Live application

Guild Wars Armory is available at:

[https://guildwarsarmory.com](https://guildwarsarmory.com)

## Features

- Select a profession and campaign
- Browse the corresponding armor sets
- View male and female armor previews
- Review armor costs and crafting locations
- View common and rare material requirements
- Enter owned material quantities
- Calculate missing materials
- Include materials required to craft rare materials
- Calculate additional crafting costs
- Review material acquisition methods
- Access related Guild Wars Wiki pages
- Navigate the complete workflow with a keyboard
- Use the application across mobile and desktop layouts

## Technology stack

- React
- Vite
- JavaScript
- Sass
- Vitest
- React Testing Library
- axe-core
- ESLint
- Prettier

Application data is stored locally as static JavaScript data for V1.

## Installation

Clone the repository:

```bash
git clone https://github.com/BrochotMaxime/guild-wars-armory.git
```

Open the project directory:

```bash
cd guild-wars-armory
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Available scripts

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Start the Vite development server    |
| `npm run build`    | Create a production build            |
| `npm run preview`  | Preview the production build locally |
| `npm run lint`     | Run ESLint on the project            |
| `npm test`         | Run Vitest in watch mode             |
| `npm run test:run` | Run the complete test suite once     |

## Testing

The project uses Vitest for unit and integration testing.

### Unit tests

Unit tests cover the core armor-planning calculations, including:

- Missing material calculations
- Empty, partial, sufficient, and excessive inventory values
- Rare material crafting requirements
- Crafting recipe output quantities
- Nested crafting requirements
- Common material aggregation
- Rare material grouping and ordering
- Additional crafting costs

### Integration and accessibility tests

Integration tests use React Testing Library, `user-event`, and `jsdom` to cover the main application workflow, including:

- Initial workflow state
- Profession, campaign, and armor selection
- Armor filtering and details display
- Reset behavior when changing profession or campaign
- Complete reset from the home breadcrumb
- Skip-link behavior
- Keyboard-only navigation
- Automated accessibility checks with axe-core

Run the tests in watch mode while developing:

```bash
npm test
```

Run the complete test suite once:

```bash
npm run test:run
```

## Code quality

Check the project with ESLint:

```bash
npm run lint
```

Check formatting with Prettier:

```bash
npx prettier . --check
```

Apply formatting when necessary:

```bash
npx prettier . --write
```

## Project structure

```text
docs/                  Project documentation and architecture decisions

public/                Static assets

src/
├── components/        React interface components
├── data/              Local application data
├── hooks/             Reusable state and navigation logic
├── styles/            Sass stylesheets
├── utils/             Pure calculation and preparation functions
├── App.jsx            Main application component
└── main.jsx           Application entry point
```

## Documentation

Additional project documentation is available in the [`docs/`](docs/) directory:

- [Project vision](docs/project-vision.md)
- [Architecture](docs/architecture.md)
- [Data model](docs/data-model.md)
- [Functional workflow](docs/functional-workflow.md)
- [Roadmap](docs/roadmap.md)
- [Coding conventions](docs/coding-conventions.md)
- [Architecture Decision Records](docs/adr/README.md)

## Project status

Guild Wars Armory V1 is complete and deployed in production.

The application uses local static data and focuses on the core armor-planning workflow. Future improvements and possible extensions are documented in the project roadmap.

## Attribution and external resources

Armor, material, and acquisition information is based on Guild Wars resources and references from the [Guild Wars Wiki](https://wiki.guildwars.com/).

External links to Guild Wars Wiki are provided to help users find additional information about materials and acquisition methods.

## Disclaimer

Guild Wars and all related names, trademarks, and visual assets belong to their respective owners, including ArenaNet and NCSOFT.

Guild Wars Armory is an unofficial fan-made project. It is not affiliated with, endorsed by, or sponsored by ArenaNet or NCSOFT.
