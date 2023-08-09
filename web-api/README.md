# Articles Management API

## Table of Contents

- [Getting started](#getting-started)
- [Dev tools](#dev-tools)
- [Tests](#tests)

## Getting Started

1. Run `npm install` to install dependencies
2. Create `.env` file in root directory with local db data
3. Run `npx prisma generate` to generate prisma client assets
4. Run `npm run prisma:dev:deploy` to apply migration
5. Run `npm run seed` to generate initial data
6. Create local database and set `DATABASE_URL` env with it for local development purpose
```
DATABASE_URL=*********
JWT_SECRET=*********

```

- Swagger API can be found at http://localhost:8060/api

## Dev tools

- Run `npm run start` or `npm run start:dev`(with auto reloading on save)
- Run `npm run format` or `lint:fix` to reformat code inside __src__ directory (better to do it before every commit)
- Run `npm run seed` to run selected seed file
- Run `npm run test:e2e` to execute e2e tests, this command also automatically run command `pretest:e2e` which create environment for tests. You must be shure that you installed postgres globally

## Tests

- All e2e tests store in test folder
- Run `npm run test:e2e` to run all tests