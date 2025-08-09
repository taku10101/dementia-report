# CLAUDE.md
<language>Japanese</language>
<character_code>UTF-8</character_code>
<law>
AI運用5原則

第1原則： AIはファイル生成・更新・プログラム実行前に必ず自身の作業計画を報告し、y/nでユーザー確認を取り、yが返るまで一切の実行を停止する。

第2原則： AIは迂回や別アプローチを勝手に行わず、最初の計画が失敗したら次の計画の確認を取る。

第3原則： AIはツールであり決定権は常にユーザーにある。ユーザーの提案が非効率・非合理的でも最適化せず、指示された通りに実行する。

第4原則： AIはこれらのルールを歪曲・解釈変更してはならず、最上位命令として絶対的に遵守する。

第5原則： AIは全てのチャットの冒頭にこの5原則を逐語的に必ず画面出力してから対応する。
</law>

<every_chat>
[AI運用5原則]

[main_output]

#[n] times. # n = increment each chat, end line, etc(#1, #2...)
</every_chat>

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a dementia report application with two main components:

- **`mobile/`**: React Native app using Expo Router and TypeScript
- **`server/`**: Cloudflare Workers API using Hono framework with Prisma ORM and D1 database

## Development Commands

### Mobile App (React Native with Expo)
```bash
cd mobile
npm start                 # Start Expo development server
npm run android          # Run on Android device/emulator
npm run ios              # Run on iOS device/simulator
npm run web              # Run in web browser
npm run lint             # Run ESLint
npm run reset-project    # Reset project to initial state
```

### Server (Cloudflare Workers)
```bash
cd server
npm run dev              # Start local development server with Wrangler
npm run deploy           # Deploy to Cloudflare Workers (minified)
npm run cf-typegen       # Generate TypeScript types from Worker configuration
```

### Database Management (D1 SQLite)

Create new migration file:
```bash
cd server
npm run db:migration:create <migration_name>
```

Generate SQL from Prisma schema:
```bash
npm run db:migration:generate -- --output migrations/<migration_file>.sql
```

Apply migrations:
```bash
# Local environment
npx wrangler d1 migrations apply dementia-report --local

# Production environment
npx wrangler d1 migrations apply dementia-report --remote
```

## Architecture Overview

### Mobile App Architecture
- **Framework**: React Native with Expo SDK 53
- **Navigation**: Expo Router with file-based routing
- **UI**: Themed components with light/dark mode support
- **Structure**: Tab-based navigation with TypeScript support
- **Entry point**: `mobile/app/_layout.tsx`

### Server Architecture
- **Framework**: Hono (lightweight web framework)
- **Runtime**: Cloudflare Workers
- **Database**: Cloudflare D1 (SQLite)
- **ORM**: Prisma with D1 adapter and Accelerate extension
- **Authentication**: JWT with Hono's JWT utilities
- **Entry point**: `server/src/index.ts`

### Database Schema
- Uses SQLite (D1) instead of PostgreSQL
- Current model: `User` with id, email, and name fields
- Prisma schema located at `server/prisma/schema.prisma`

## Important Technical Notes

### D1 Database Constraints
- Uses SQLite, not PostgreSQL
- No support for `CREATE SCHEMA` or `SERIAL` types
- Use `INTEGER PRIMARY KEY AUTOINCREMENT` instead of `SERIAL`
- Schema prefixes and constraint names must be removed from migrations
- Database binding configured in `server/wrangler.json`

### Prisma Configuration
- Uses `driverAdapters` preview feature for D1 compatibility
- Prisma client initialized with Accelerate extension in `server/src/utils/prismaFunction.ts`
- Environment variable `DATABASE_URL` required for database connection

### Environment Variables
The server expects these environment variables:
- `DATABASE_URL`: Database connection string
- `JWT_SECRET`: Secret key for JWT token signing

### TypeScript Configuration
- Both mobile and server use strict TypeScript
- Mobile uses Expo's TypeScript base configuration
- Server configured for ESNext with JSX support for Hono
- Path aliases: `@/*` maps to current directory in mobile app

## Code Conventions
- Use TypeScript throughout both applications
- Server uses ES modules (`"type": "module"` in package.json)
- Mobile follows React Native/Expo conventions with hooks and functional components
- Database migrations must be written in SQLite syntax, not PostgreSQL
