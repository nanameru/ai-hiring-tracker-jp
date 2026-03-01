# Release Checklist

## Implemented
- [x] Next.js app scaffolded
- [x] Japanese UI pages
- [x] Convex schema + stats functions
- [x] Seed data mutation
- [x] Build succeeds (`npm run build`)
- [x] Vercel production deploy
- [x] GitHub repo push

## Pending only for Clerk login owner action
- [ ] Clerk dashboard login
- [ ] Create app in Clerk
- [ ] Copy publishable/secret keys
- [ ] Set Vercel env vars for Clerk
- [ ] Redeploy and verify auth flow

## Commands
```bash
# verify
npm run build
npx convex dev --once

# seed
npx convex run stats:seedDemoData '{"force": true}'
```
