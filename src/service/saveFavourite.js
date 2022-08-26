import { instance } from 'utils/apiKey'

export default async function saveFavourite (id) {
  const { data: listOfDogs } = await instance.post('/favourites', {
    image_id: id
  })
  return listOfDogs.id
}
