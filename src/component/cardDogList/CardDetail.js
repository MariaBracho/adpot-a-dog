import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Text } from '@chakra-ui/react'
import TitleLoadAndDescription from 'component/TitleLoadAndDescription'

import getDogImagesInfo from 'services/getImageInfo'
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
      <TitleLoadAndDescription loader={false} title="Detail" />
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
