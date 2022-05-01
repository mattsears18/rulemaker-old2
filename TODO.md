# Frontend
## Anon Pages (unauthenticated user) - Might use SquareSpace for this
- About (could just be the home page)
- Use Cases
- Privacy Policy (required for Social OAuth)
- Terms of Service (required for Social OAuth)

## Main Pages (authenticated user)
- Settings
- User
  - Profile
    - Includes bio, etc.
  - Endorsements
  - Rules written
- Users
  - List & Search
  - Leaderboard?
- Organization
  - Profile
  - Endorsements
  - Rules written
- Organizations
  - List & Search
  - Leaderboard?
- Rule
  - Revision History
  - CRUD
- Rules
  - List & Search
  - Map

# Backend
- Authorization
  - Learn Redwood RBAC
- GraphQL API
  - Initial data schema
    - Users
      - Make this sync with auth0
        - Don't duplicate any fields, but create/delete the users in the DB when they're created/deleted in auth0
    - Rules
    - Organizations
    - Locations
  - Full CRUD
    - Authorization - table, row, and field RBAC
    - Limit, offset, search, filter, etc. same features as hasura
      - Redwood/Prisma probably already provides all of this, but confirm
- DevOps (CI/CD) Setup
  - GitHub Actions
    - Run tests
    - Code coverge and code quality checks
    - Typecheck
    - Prettify
