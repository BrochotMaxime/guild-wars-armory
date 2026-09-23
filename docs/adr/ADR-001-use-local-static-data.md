# ADR-001 — Use local static data

## Status

Accepted

## Context

Guild Wars Armory requires data about professions, campaigns, armor sets, materials, crafting recipes, and acquisition methods.

This game data is relatively stable and does not require user-generated content or server-side processing in V1.

The application also does not require accounts, authentication, saved inventories, or shared planning data.

Introducing a backend, external API, or database would add development, deployment, security, and maintenance complexity without providing a clear benefit for the current scope.

## Decision

Guild Wars Armory V1 stores its application data locally in static JavaScript files under `src/data/`.

The interface imports and consumes this data directly.

Relationships between records use identifiers so that professions, campaigns, armor sets, materials, crafting recipes, and acquisition methods can remain in separate data collections.

No backend, external API, or database is used for application data in V1.

Inventory values, crafting selections, and calculated planning results exist only as runtime state. They are not stored in the static dataset or persisted between page reloads.

## Consequences

### Positive

- the application has a simple and lightweight architecture;
- development and local testing require no external services;
- production deployment only requires static hosting;
- no backend infrastructure, database, or API needs to be maintained;
- game data remains directly available to the application;
- data files can be versioned and reviewed with the source code;
- the application remains usable without runtime requests to an external data service.

### Negative

- game data must be collected, reviewed, and maintained manually;
- every data correction or addition requires a new application deployment;
- the client bundle and repository may grow as more Guild Wars content is added;
- data cannot be updated independently from the application release;
- inventories and planning sessions cannot be saved without introducing a separate persistence solution.

## Future considerations

This decision applies to V1 and remains appropriate while the dataset is manageable and application data changes infrequently.

A future ADR should reconsider the storage architecture if the project introduces requirements such as:

- user accounts;
- saved inventories or planning sessions;
- frequently updated data;
- collaborative or shared planning;
- an administrative data-management interface;
- a dataset too large to maintain efficiently in the client application.

Until one of these needs becomes concrete, local static data remains the preferred solution.
