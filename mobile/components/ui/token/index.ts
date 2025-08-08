import { color, radius, size, space, themes, zIndex } from '@tamagui/themes'
import { createTamagui, createTokens } from 'tamagui'

const tokens = createTokens({
  size,
  space,
  zIndex,
  color,
  radius,
})

const config = createTamagui({
  themes,
  tokens,
  // ... see Configuration
})

export type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config
