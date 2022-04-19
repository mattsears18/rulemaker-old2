import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import mainTheme from 'src/themes/mainTheme'

const withChakra = (StoryFn) => {
  return (
    <ChakraProvider theme={mainTheme}>
      <StoryFn />
    </ChakraProvider>
  )
}

export const decorators = [withChakra]
export const parameters = { chakra: { theme: mainTheme } }
