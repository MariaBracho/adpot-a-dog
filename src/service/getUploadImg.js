import { instance } from '../utils/apiKey'

export default async function getUploadImg ({ limit }) {
  const { data } = await instance.get(`/images?limit=${limit}`)
  return data.map(({ id, url }) => {
    return { image_id: id, url }
  })
}
