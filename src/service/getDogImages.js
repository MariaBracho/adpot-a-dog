import { instance } from '../utils/apiKey'

export default async function getDogImages ({ limit = 6, breed_id, page = 0 }) {
  const { data: listOfDogs } = await instance.get(
    `/images/search?breed_id=${breed_id}&page=${page}&limit=${limit}`
  )
  return listOfDogs.map(({ id, url, breeds }) => {
    const breedName = breeds[0]
    return { url, image_id: id, name: breedName.name }
  })
}
