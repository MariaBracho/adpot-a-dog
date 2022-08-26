import { instance } from 'utils/apiKey'
import { transformWithUuid } from 'utils/transformers'

export default async function getUploadImg () {
  const limit = 100
  const { data } = await instance.get(`/images?limit=${limit}`)
  return transformWithUuid(
    data.map(({ id, url }) => {
      return { image_id: id, url }
    })
  )
}
