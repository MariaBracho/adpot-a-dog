import { useLocation, useNavigate } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

export default function BackHome () {
  const { pathname } = useLocation()
  const isHome = pathname === '/home'

  const navigate = useNavigate()

  if (isHome) return null

  return (
    <Box position="sticky" top="60px">
      <ChevronLeftIcon
        onClick={() => navigate(-1)}
        h="40px"
        w="40px"
        cursor="pointer"
        m="10px 20px"
        position="absolute"
      />
    </Box>
  )
}
