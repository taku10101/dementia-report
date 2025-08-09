import { Hono } from 'hono'
import { sign, verify } from 'hono/jwt'
import { getPrisma } from './utils/prismaFunction'

// Create the main Hono app
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
  Variables: {
    userId: string
  }
}>()

app.post('/', async (c) => {
  const prisma = getPrisma(c.env.DATABASE_URL)
  // 簡易バリデーション例
  const { name, email } = await c.req.json()
  const user = await prisma.user.create({ data: { name, email } })
  return c.json(user, 201)
})

// ヘルスチェック
app.get('/health', (c) => c.text('ok'))

export default app
