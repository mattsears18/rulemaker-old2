import * as React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import mainTheme from 'src/styles/mainTheme'

const theme = extendTheme(mainTheme)

const withChakra = (StoryFn) => {
  return (
    <ChakraProvider theme={theme}>
      <StoryFn />
    </ChakraProvider>
  )
}

export const decorators = [withChakra]
export const parameters = { chakra: { theme } }
