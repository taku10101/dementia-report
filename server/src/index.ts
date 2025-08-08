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
  // Now you can use it wherever you want
  const prisma = getPrisma(c.env.DATABASE_URL)
})
