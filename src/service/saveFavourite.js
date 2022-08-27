import { instance } from 'utils/apiKey'

export default async function saveFavourite ({ id, userId }) {
  const { data: listOfDogs } = await instance.post('/favourites', {
    image_id: id,
    sub_id: userId
  })
  return listOfDogs.id
}
