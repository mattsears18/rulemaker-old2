# Frontend
## Anon Pages (unauthenticated user)
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
- Authentication
  - Auth0
- Authorization
  - See what Redwood offers for RBAC
- GraphQL API
  - Initial data schema
    - Users
    - Rules
    - Organizations
    - Locations
  - Full CRUD
    - Authorization - table, row, and field RBAC
    - Limit, offset, search, filter, etc. same features as hasura
    - Auto-relationships based on foreign keys
- DevOps (CI/CD)
  - 100% auto-deploys from git
  - Super efficient testing
  - Code coverge and code quality checks
- Infrastructure as Code
  - Terraform? or Pulumi?
  - What works well with Redwood?
