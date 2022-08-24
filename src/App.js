import RouterNavigation from '../src/Navigation/RouterNavigation'
import DogContextProvider from './context/DogContextProvider'
import { Box } from '@chakra-ui/react'
import Navbar from './component/navbar/Navbar'
import BackHome from './component/BackHome'

function App () {
  return (
    <Box h="100vh">
      <DogContextProvider>
        <Navbar />
        <BackHome />
        <RouterNavigation />
      </DogContextProvider>
    </Box>
  )
}

export default App
