# Next.js starter

A full-stack Next.js starter with an example data flow and optional integrations.
Each project chooses its authentication, content and deployment policy.

## Included

- Next.js 16, React 19, strict TypeScript, and typed routes
- Tailwind CSS 4 and shadcn/ui
- PostgreSQL with Drizzle ORM
- Zod validation and `neverthrow` results
- Optional Sentry, GA4, SEO, and AI-discovery helpers
- Biome, Vitest, Husky, GitHub Actions, and Bun

The example feature demonstrates the repository's data flow. Rename or remove
it when the first real domain is introduced.

## Start locally

Use the Bun version declared in `package.json` and provide a disposable
PostgreSQL database.

```bash
bun install --frozen-lockfile
test -f .env.local || cp .env.example .env.local
```

Set `DATABASE_URL` in `.env.local` to the disposable database. After verifying
the target, apply the existing migrations with `bun run db:migrate`, then start
with `bun run dev`. Agents need explicit permission before running database
commands. Open `http://localhost:3000`. Run the complete local gate with:

```bash
bun run ci
```

The remaining scripts are declared in [`package.json`](package.json). Database
scripts can change schema or data; verify the target before running one.

Pull-request CI also starts an empty PostgreSQL service, applies every migration,
and runs the database integration test.

## Start a derived project

Follow [template adoption in CONTRIBUTING.md](CONTRIBUTING.md#template-adoption)
for branch and tracker setup, then use the
[project adoption checklist](docs/guides/project-adoption-guide.md) to record the
brief and replace demo behaviour. Keep product decisions in the derived
repository. Configure GitHub branch protection separately; template files do
not enable it.

## Before the first deployment

Before enabling protected mutations, replace the fail-closed action context
with a verified server-side session. Review the project-specific security, consent, analytics, monitoring, and
public-content decisions identified in the architecture review and the relevant
guides below.

## Documentation

| Document | Owns |
| --- | --- |
| [`docs/architecture.md`](docs/architecture.md) | Module placement, dependency direction, and source conventions |
| [`CONTRIBUTING.md`](CONTRIBUTING.md) | Branch, commit, review, and contribution workflow |
| [`AGENTS.md`](AGENTS.md) | Agent authorization and repository-specific operating rules |
| [`docs/guides/quality-guide.md`](docs/guides/quality-guide.md) | Verification gates, lint/CI/hooks, exceptions and review evidence |
| [`docs/guides/html-report-guide.md`](docs/guides/html-report-guide.md) | Standalone report layout, accessibility and verification |
| [`docs/guides/testing-guide.md`](docs/guides/testing-guide.md) | Test selection and test-suite policy |
| [`docs/guides/`](docs/guides) | Error handling, logging, analytics, Sentry, performance, and SEO |
| [`docs/reports/nextjs-starter-architecture-review.html`](docs/reports/nextjs-starter-architecture-review.html) | Dated audit findings and recommendations |

The HTML report is a point-in-time review, not an instruction manual. Current
working rules live in the Markdown documents above.
