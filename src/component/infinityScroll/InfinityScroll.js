import { useRef } from 'react'
import { Box } from '@chakra-ui/react'
import useInfinity from 'hook/useInfinity'

export default function InfinityScroll () {
  const elemRef = useRef()
  useInfinity({ elemRef })

  return <Box ref={elemRef} />
}
