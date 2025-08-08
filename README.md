# dementia-report

## Database Migration

### 新しいマイグレーションファイルの作成

```bash
cd server
npm run db:migration:create <migration_name>
```

例：
```bash
npm run db:migration:create create_user_table
```

### Prismaスキーマから SQL の生成

```bash
npm run db:migration:generate -- --output migrations/<migration_file>.sql
```

例：
```bash
npm run db:migration:generate -- --output migrations/0001_create_user_table.sql
```

### マイグレーションの実行

```bash
# ローカル環境
npx wrangler d1 migrations apply <database_name> --local

# 本番環境
npx wrangler d1 migrations apply <database_name> --remote
```

### 注意事項

- D1はSQLiteを使用するため、PostgreSQL固有の構文は使用できません
- `CREATE SCHEMA`、`SERIAL`などはサポートされていません
- SQLite構文に変換する必要があります：
  - `SERIAL` → `INTEGER PRIMARY KEY AUTOINCREMENT`
  - スキーマプレフィックスを削除
  - 制約名を削除
