// theme
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './resource/theme'

// context
import AppContextProvider from 'context/DogContextProvider'

// app data hydration
import HydrationWrapper from 'wrappers/HydrationWrapper'

// navigation
import AppNavigation from 'navigation/RouterNavigation'

export default function App () {
  return (
    <ChakraProvider theme={theme}>
      <AppContextProvider>
        <HydrationWrapper>
          <AppNavigation />
        </HydrationWrapper>
      </AppContextProvider>
    </ChakraProvider>
  )
}
