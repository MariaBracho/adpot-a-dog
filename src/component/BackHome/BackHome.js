import { useLocation } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

export default function BackHome () {
  const isHome = useLocation().pathname === '/home'

  return (
    <Box position="sticky" top="60px">
      <ChevronLeftIcon
        onClick={() => window.history.back()}
        h="30px"
        w="30px"
        cursor="pointer"
        display={isHome ? 'none' : 'block'}
        m="10px 20px"
        position="absolute"
      />
    </Box>
  )
}
