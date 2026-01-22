---
description: 快速创建带有 Better Auth 和 Supabase 集成的 Next.js 应用程序。当用户想要"创建 nextjs 应用"、"开始新项目"、"设置 better-auth"、"引导 web 应用程序"或询问如何从 GitHub 模板创建新的 web 应用时使用此技能。
---

# Create Next.js App Skill

This skill helps you quickly create a new Next.js application using the [nextjs-better-auth](https://github.com/jabirdev/nextjs-better-auth) template with Supabase database and Better Auth authentication pre-configured.

## When This Skill Activates

This skill activates when you:
- Ask to create a new Next.js application
- Want to scaffold a web project with authentication
- Request a starter template with Supabase
- Ask about setting up a出海 web application (global web app)

## What This Skill Does

This skill will:
1. Create a new project directory with your desired app name
2. Clone the nextjs-better-auth template from GitHub
3. Set up environment variables (.env file)
4. Configure Supabase database connection
5. Configure Better Auth
6. Install project dependencies
7. Initialize the database
8. Push the project to GitHub

## Usage Flow

### Step 1: Ask User for Required Information

Before starting, collect the following information from the user:

```
🎯 Creating Your Next.js Application

I'll help you create a new web application using a pre-configured Next.js template.

Please provide the following information:

1. 📁 App Name: What would you like to name your application?
   (Example: article-to-image, my-saas-app, awesome-project)

2. 🗄️ Supabase Database Password: What is your Supabase database password?
   (Get this from your Supabase project settings)

3. 🔐 Better Auth Secret: What secret key would you like to use for authentication?
   (Generate a secure random string, or leave empty for auto-generation)

4. 🐙 GitHub Repository: Do you want to push to GitHub?
   - If yes, provide your GitHub username
   - If no, we'll skip this step
```

Use the `AskUserQuestion` tool to collect these inputs if not provided.

### Step 2: Create Project Directory

// turbo
```bash
# Navigate to the parent directory where you want to create the project
cd ~

# Create the project directory
mkdir -p <APP_NAME>
cd <APP_NAME>
```

### Step 3: Clone Template

// turbo
```bash
# Clone the nextjs-better-auth template
git clone https://github.com/jabirdev/nextjs-better-auth.git .

# Remove the existing .git to start fresh
rm -rf .git
```

### Step 4: Create .env File

Copy the template env file and configure it:

// turbo
```bash
cp env.example .env
```

Then update `.env` with the user's provided values:

```env
# Connect to Supabase via connection pooling with Supavisor.
DATABASE_URL="postgresql://postgres.mcfbrfevkbfgnuotgfsw:<USER_PASSWORD>@aws-1-ap-southeast-1.pooler.supabase.com:6543/postgres?pgbouncer=true"

# Direct connection to the database. Used for migrations.
DIRECT_URL="postgresql://postgres.mcfbrfevkbfgnuotgfsw:<USER_PASSWORD>@aws-1-ap-southeast-1.pooler.supabase.com:5432/postgres"

# Better Auth
BETTER_AUTH_SECRET="<USER_SECRET_OR_GENERATED>"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

**Important Security Notes:**
- The `.env` file should be in `.gitignore` (already configured in template)
- Never commit `.env` to git repositories
- Use different secrets for development and production

### Step 5: Install Dependencies

// turbo
```bash
npm install
```

### Step 6: Initialize Database

// turbo
```bash
# Generate database migrations
npm run db:generate

# Push schema to Supabase
npm run db:migrate
```

Expected output:
```
4 tables
account 13 columns 0 indexes 1 fks
session 8 columns 0 indexes 1 fks
user 11 columns 0 indexes 0 fks
verification 6 columns 0 indexes 0 fks
```

### Step 7: Initialize Git Repository

// turbo
```bash
# Initialize new git repo
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Next.js app with Better Auth and Supabase"
```

### Step 8: Push to GitHub (Optional)

If the user provided GitHub credentials:

```bash
# Add remote origin
git remote add origin https://github.com/<GITHUB_USERNAME>/<APP_NAME>.git

# Create repository on GitHub first, then push
git branch -M main
git push -u origin main
```

**Note:** The GitHub repository must be created manually at https://github.com/new before pushing.

### Step 9: Verify Setup

// turbo
```bash
# Start the development server
npm run dev
```

The app should be available at `http://localhost:3000`

## Post-Setup Instructions

After the project is created, inform the user about:

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run db:generate  # Generate database migrations
npm run db:migrate   # Push migrations to database
npm run db:studio    # Open Drizzle Studio (database GUI)
```

### Project Structure

```
<APP_NAME>/
├── src/
│   ├── app/          # Next.js app router pages
│   ├── components/   # React components
│   ├── db/          # Database schema and client
│   └── lib/         # Utility functions
├── drizzle/         # Database migrations
├── public/          # Static assets
└── package.json
```

### Next Steps

1. **Customize the app**: Edit files in `src/app/` and `src/components/`
2. **Modify database schema**: Update `src/db/schema/index.ts`
3. **Add new features**: The template includes authentication and database setup ready to use

## Environment Variables Reference

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | Supabase connection pool (port 6543) | `postgresql://...:6543/postgres?pgbouncer=true` |
| `DIRECT_URL` | Direct DB connection for migrations (port 5432) | `postgresql://...:5432/postgres` |
| `BETTER_AUTH_SECRET` | Secret key for authentication | Random 32+ character string |
| `NEXT_PUBLIC_BASE_URL` | Public URL of the app | `http://localhost:3000` |

## Troubleshooting

### Database Connection Issues

If `npm run db:migrate` hangs or fails:
1. Verify `DIRECT_URL` uses port `5432` (not 6543)
2. Verify `DATABASE_URL` uses port `6543` with `?pgbouncer=true`
3. Check Supabase project is active
4. Verify database credentials are correct

### Git Push Fails

If `git push` fails with connection error:
1. Check GitHub repository exists at the URL
2. Verify GitHub credentials are set up
3. Try using SSH instead of HTTPS:
   ```bash
   git remote set-url origin git@github.com:<USERNAME>/<APP_NAME>.git
   ```

### Dependencies Fail to Install

1. Try clearing npm cache: `npm cache clean --force`
2. Delete `node_modules` and `package-lock.json`
3. Run `npm install` again

## Template Information

- **Source**: https://github.com/jabirdev/nextjs-better-auth
- **Framework**: Next.js 16 with App Router
- **Authentication**: Better Auth
- **Database**: Supabase (PostgreSQL) with Drizzle ORM
- **Styling**: Tailwind CSS with shadcn/ui components

## Example Output

When the skill completes successfully, show this summary:

```
✨ Project Created Successfully!

📁 Location: ~/[APP_NAME]
🚀 Start: cd [APP_NAME] && npm run dev
📦 Database: 4 tables created (user, session, account, verification)

Next Steps:
1. cd ~/[APP_NAME]
2. npm run dev
3. Open http://localhost:3000

📚 Documentation:
- Better Auth: https://www.better-auth.com
- Supabase: https://supabase.com/docs
- Drizzle ORM: https://orm.drizzle.team
```

## Configuration Options

You can customize the skill behavior by modifying these variables:

| Variable | Default | Description |
|----------|---------|-------------|
| `TEMPLATE_REPO` | `jabirdev/nextjs-better-auth` | GitHub template to use |
| `SUPABASE_REGION` | `aws-1-ap-southeast-1` | Supabase deployment region |
| `SUPABASE_PROJECT_REF` | `mcfbrfevkbfgnuotgfsw` | Supabase project reference |

## License

This skill is provided as-is for helping developers quickly scaffold Next.js applications. The underlying template has its own license - please refer to the template repository for details.
