import { instance } from 'utils/apiKey'
import { transformWithUuid } from 'utils/transformers'

export default async function getUploadImg ({ sub_id }) {
  const limit = 100
  const { data } = await instance.get(`/images?limit=${limit}&sub_id=${sub_id}`)
  return transformWithUuid(
    data.map(({ id, url }) => {
      return { image_id: id, url }
    })
  )
}
