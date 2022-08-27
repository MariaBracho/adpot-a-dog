import { Grid, Text, Box } from '@chakra-ui/react'
import DogCard from './DogCard'
import EmpetyList from './EmpetyList'

export default function ListOfDogs ({ listOfDogs = [], title }) {
  const isEmpety = listOfDogs.length === 0
  return (
    <Box>
      <Text layerStyle="title">{title}</Text>

      <Grid
        maxW="80%"
        margin="0 auto"
        alignItems="center"
        justifyItems="center"
        templateColumns={
          isEmpety
            ? '1fr'
            : {
                lg: 'repeat(3, minmax(200px,1fr))',
                md: 'repeat(2, minmax(210px,1fr))'
              }
        }
      >
        {isEmpety
          ? (
          <EmpetyList />
            )
          : (
              listOfDogs.map(({ uuid, url, id, image_id }) => {
                return <DogCard key={uuid} url={url} id={id} image_id={image_id} />
              })
            )}
      </Grid>
    </Box>
  )
}
