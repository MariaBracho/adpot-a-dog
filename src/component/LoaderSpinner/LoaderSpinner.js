import { Spinner, Grid } from '@chakra-ui/react'

export default function LoaderSpinner () {
  return (
    <Grid w="100%" h="100%" placeContent="center">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </Grid>
  )
}
