import { instance } from '../utils/apiKey'

export default async function getDogs ({ limit = 6, page = 0 }) {
  const { data: listOfDogs } = await instance.get(
    `/breeds?limit=${limit}&page=${page}`
  )
  return listOfDogs.map(({ image, name, id }) => {
    const url = image.url
    const image_id = image.id
    return { url, image_id, name, id }
  })
}
