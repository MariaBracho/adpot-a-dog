import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Text } from '@chakra-ui/react'
import { Helmet } from 'react-helmet'

import getDogImagesInfo from 'service/getImageInfo'
import DogCard from './DogCard'

export default function CardDetail () {
  const [detailDog, setDetailDog] = useState({})
  const { url, id, breeds } = detailDog
  const { image_id } = useParams()

  const styleProps = useMemo(() => {
    return {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '20px'
    }
  }, [])

  useEffect(() => {
    getDogImagesInfo({ image_id }).then((dog) => setDetailDog(dog))
  }, [image_id])

  return (
    <>
      <Helmet>
        <title>Detail | Adopt a dog</title>
        <meta name="description" content="Information" />
      </Helmet>
      <Box sx={styleProps}>
        <Text layerStyle="title" justifyContent="center">
          Information
        </Text>
        <DogCard
          key={id}
          url={url}
          image_id={id}
          isDetail={false}
          detail={breeds}
        />
      </Box>
    </>
  )
}
