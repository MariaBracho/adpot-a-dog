import { instance } from 'utils/apiKey'
import { transformWithUuid } from 'utils/transformers'

export default async function getFavourites ({ sub_id }) {
  const { data: listOfDogs } = await instance.get(
    `/favourites?sub_id=${sub_id}`
  )
  const translatedListOfDogs = listOfDogs
    .map((item) => {
      const {
        id,
        image_id,
        image: { url }
      } = item
      return { url, id, image_id }
    })
    .filter(({ url, id, image_id }) => Boolean(url && id && image_id))

  return transformWithUuid(translatedListOfDogs)
}
