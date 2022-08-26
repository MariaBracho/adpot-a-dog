import React, { useMemo, useState } from 'react'
import {
  Box,
  Container,
  Grid,
  Image,
  Skeleton,
  Text,
  useDisclosure
} from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom'

import useFavouriteDogs from 'context/useFavouriteDogs'

import CardButton from 'component/cardDogList/CardButton'
import ImgModal from './ImgModal'
export default function DogCard ({
  url,
  id,
  image_id,
  isDetail = true,
  detail = []
}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [isLoad, setIsLoad] = useState(false)
  const navigate = useNavigate()
  const { isLoadListOfFavouriteDogs } = useFavouriteDogs({
    initialFetch: false
  })

  const styleGrid = useMemo(() => {
    return {
      cursor: 'pointer',
      minWidth: '210px',
      borderWidth: '1px',
      borderRadius: '12px',
      boxShadow: 'md',
      overflow: 'hidden',
      marginBottom: '20px',
      minHeight: '200px',
      maxW: 'fit-content'
    }
  }, [])

  const goToDetail = () => {
    navigate(`../detail/${image_id}`, { replace: true })
  }

  const loadImg = () => {
    setIsLoad(true)
  }

  const showModal = () => {
    onOpen()
  }

  const nameOfDog = () => {
    return detail.map(({ name }) => {
      return name
    })
  }

  return (
    <Grid
      sx={styleGrid}
      templateRows={isDetail ? '162px auto auto' : '262px auto auto'}
      templateColumns={isDetail ? '210px' : '310px'}
    >
      <ImgModal
        isOpen={isOpen}
        onClose={onClose}
        url={url}
        title="Dog image"
        name={nameOfDog()[0]}
      />
      <Skeleton isLoaded={isLoad && !isLoadListOfFavouriteDogs}>
        <Image
          onClick={isDetail ? goToDetail : showModal}
          src={url}
          loading="lazy"
          onLoad={loadImg}
          alt="perrito"
          h="100%"
          w="100%"
          objectFit="container"
        />
      </Skeleton>
      {!isDetail &&
        detail.map(
          ({ name, bred_for, temperament, life_span, origin, breed_group }) => {
            return (
              <Container key={name} p="10px" textAlign="center">
                <Text color="brand.green">{name}</Text>
                <Text>{temperament}</Text>
                <Text>{bred_for}</Text>
                <Text>{origin}</Text>
                <Text>{breed_group}</Text>
                <Text>{life_span}</Text>
              </Container>
            )
          }
        )}

      <Box
        display="flex"
        alignItems="center"
        paddingTop="16px"
        paddingBottom="22px"
        position="relative"
      >
        <CardButton id={id} image_id={image_id} />
      </Box>
    </Grid>
  )
}
