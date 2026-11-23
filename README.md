# Next.js starter

A Next.js application starter with a sample data flow and optional integrations.
Shared engineering workflows live in the team's installed skills, outside this
repository. Start new-project delivery with `truedevs-project-delivery`.
It selects the relevant specialist skills and verifies the resulting application.

## Local setup

Use the Bun version declared in `package.json`.

```sh
bun install --frozen-lockfile
test -f .env.local || cp .env.example .env.local
```

Set `DATABASE_URL` to a disposable PostgreSQL database and public origins to the
local application. After verifying the exact target and obtaining explicit
migration authorization, run `bun run db:migrate`, then `bun run dev`.
Optional provider credentials can remain empty. Keep secrets out of Git.

Scripts and dependencies are declared in `package.json`. Local checks are
selected for the changed behavior. GitHub CI runs lint, types, all remaining
unit tests, migrations and database integration against disposable PostgreSQL,
the production build and the high-severity dependency audit. GitHub branch rules require
separate account configuration.

## Starter constraints

Protected example mutations reject requests until a project implements verified
server-side authentication and resource authorization. Analytics consent defaults
to denied. These are safe starting points, not finished product integrations.

The project owns its approved business facts, Figma references, account choices,
consent policy and local/preview/production configuration. Preserve necessary
project decisions and operating knowledge where contributors can recover them;
shared skills own the reusable process. Replace demo content and metadata before
launch. Verify preview indexing and external recipients against the actual
hosting environment, regardless of its build mode.
