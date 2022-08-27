import { instance } from 'utils/apiKey'
import { transformWithUuid } from 'utils/transformers'

export default async function getDogs ({ limit = 6, page = 0 }) {
  const { data: listOfDogs } = await instance.get(
    `/breeds?limit=${limit}&page=${page}`
  )
  const translatedListOfDogs = listOfDogs
    .map(({ image, name, id }) => {
      const { url, id: image_id } = image
      return { url, image_id, name, id }
    })
    .filter(({ url, image_id, name, id }) =>
      Boolean(url && image_id && name && id)
    )

  return transformWithUuid(translatedListOfDogs)
}
