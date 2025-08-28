# Kaushiki Mishra – Portfolio

A minimal, modern, and responsive personal portfolio built with Next.js, React, Tailwind CSS, shadcn-style components, Framer Motion, and lucide-react icons.

## Tech Stack
- Next.js (App Router, TypeScript)
- Tailwind CSS
- shadcn/ui-inspired primitives
- Framer Motion
- next-themes (light/dark)
- lucide-react

## Local Development
```bash
npm install
npm run dev
```
The app will be available at http://localhost:3000

## Content Editing
All content is sourced from `src/content/site.json`. Update fields like name, tagline, skills, projects, experience, education, achievements, certifications, and contact.

## GitHub → Vercel Deployment
1. Create a new GitHub repository and push the code:
```bash
git init
git remote add origin https://github.com/<your-username>/<repo>.git
git add .
git commit -m "Initial commit"
git branch -M main
git push -u origin main
```
2. In Vercel, import the GitHub repo.
3. Set the following Project Secrets (if using the GitHub Action deploy step):
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`

Alternatively, you can rely solely on Vercel’s GitHub Integration (recommended). On every push to `main`, Vercel will auto-build and deploy.

## GitHub Actions
A workflow is included at `.github/workflows/deploy.yml` to build and optionally deploy using Vercel CLI via `amondnet/vercel-action`. If you use Vercel’s GitHub Integration, the workflow still validates the build on every push.

## License
MIT
