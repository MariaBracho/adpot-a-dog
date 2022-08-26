import RouterNavigation from 'Navigation/RouterNavigation'
import DogContextProvider from 'context/DogContextProvider'
import { Box } from '@chakra-ui/react'
import Navbar from 'component/navbar/Navbar'
import BackHome from 'component/BackHome/BackHome'
import HydrationWrapper from 'wrappers/HydrationWrapper'

function App () {
  return (
    <Box h="100vh">
      <DogContextProvider>
        <HydrationWrapper>
          <Navbar />
          <BackHome />
          <RouterNavigation />
        </HydrationWrapper>
      </DogContextProvider>
    </Box>
  )
}

export default App
