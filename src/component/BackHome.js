import { Link, useLocation } from 'react-router-dom'
import { Image, Box } from '@chakra-ui/react'
import Arrow from '../assets/arrowBack.svg'

export default function BackHome () {
  const isHome = useLocation().pathname === '/home'

  return (
    <Box position="sticky" top="60px">
      <Link to="/home">
        <Image
          cursor="pointer"
          display={isHome ? 'none' : 'block'}
          m="10px 20px"
          position="absolute"
          src={Arrow}
        ></Image>
      </Link>
    </Box>
  )
}
