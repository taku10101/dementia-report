import { createTokens } from "tamagui";

const tokens = createTokens({
    size: {
      small: 10,
      medium: 20,
      large: 30,
    },
    color: {
      primary: '#000000',
      secondary: '#FFFFFF',
      error: '#FF0000',
      success: '#00FF00',
      warning: '#FFFF00',
      info: '#0000FF',
      dark: '#000000',
      light: '#FFFFFF',
      border: '#CCCCCC',
      background: '#F0F0F0',
    },
  })

  export default tokens;
