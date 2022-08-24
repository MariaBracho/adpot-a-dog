import React from 'react'
import DogCard from './DogCard'
import { Grid, Text, Box } from '@chakra-ui/react'

export default function ListOfDogs ({ params, title }) {
  return (
    <Box>
      <Text layerStyle="title">{title}</Text>

      <Grid
        maxW="80%"
        margin="0 auto"
        alignItems="center"
        justifyItems="center"
        templateColumns={{
          lg: 'repeat(3, minmax(200px,1fr))',
          md: 'repeat(2, minmax(210px,1fr))'
        }}
      >
        {params.map(({ url, id, image_id }) => {
          return (
            <DogCard key={image_id} url={url} id={id} image_id={image_id} />
          )
        })}
      </Grid>
    </Box>
  )
}
