# Guild Wars Armory

> Plan your armor. Track your materials.

Guild Wars Armory is a fan-made planning application for Guild Wars armor sets. It helps players explore available armor, review crafting requirements, track their inventory, and calculate the materials they still need.

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

## Technologies

- React
- Vite
- JavaScript
- Sass
- Vitest
- ESLint
- Prettier

Application data is currently stored locally as static JavaScript data.

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

Unit tests cover the core armor-planning calculations, including:

- Missing material calculations
- Empty, partial, sufficient, and excessive inventory values
- Rare material crafting requirements
- Crafting recipe output quantities
- Nested crafting requirements
- Common material aggregation
- Rare material grouping and ordering
- Additional crafting costs

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
docs/                 Project documentation and architecture decisions
public/               Static assets
src/
├── components/       React interface components
├── data/             Local application data
├── hooks/            Reusable state and navigation logic
├── styles/           Sass stylesheets
├── utils/            Pure calculation and preparation functions
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
- [Architecture Decision Records](docs/adr/README.md)

## Project status

Guild Wars Armory is currently under active development. The first version uses local static data and focuses on the core armor-planning workflow.

## Disclaimer

Guild Wars and all related names, trademarks, and visual assets belong to their respective owners, including ArenaNet and NCSOFT.

Guild Wars Armory is an unofficial fan-made project. It is not affiliated with, endorsed by, or sponsored by ArenaNet or NCSOFT.
