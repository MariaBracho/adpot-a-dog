import { Box, Text, Button, Grid, Image, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import imageDog from '../assets/dog.jpg'
import pet from '../assets/pet.svg'

export default function PageNotFound () {
  const navigate = useNavigate()
  const toHome = () => {
    navigate('/home', { replace: true })
  }
  return (
    <>
      <Grid w="100%" h="500PX" placeContent="center">
        <Grid
          justifySelf="center"
          borderRadius="12px"
          border="2px dotted black"
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          w="80%"
          h="280px"
        >
          <Flex
            fontSize="16px"
            direction="column"
            justifyContent="center"
            p="10px"
          >
            <Text fontSize="32px" color="brand.green" fontWeight="bold">
              Oops!!! 404
            </Text>
            <Text fontSize="16px" my="20px">
              It seems that you have lost your way, you can take advantage of
              the visit to meet your next pet.
            </Text>
            <Flex>
              <Button
                onClick={toHome}
                w="128px"
                color="brand.green"
                borderColor="brand.green"
                variant="outline"
                marginRight="20px"
              >
                My future pet
              </Button>
              <Image src={pet} />
            </Flex>
          </Flex>
          <Box display={{ base: 'none', md: 'block' }}>
            <Image
              h="276px"
              w="100%"
              borderEndRadius="12px"
              objectFit="cover"
              src={imageDog}
              alt="dog"
            />
          </Box>
        </Grid>
      </Grid>
    </>
  )
}
