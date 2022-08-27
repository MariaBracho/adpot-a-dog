import { instance } from 'utils/apiKey'

export default async function CreateAnAdopt ({ image_id, value = 0, sub_id }) {
  const { data } = await instance.post('/votes', {
    image_id,
    value,
    sub_id
  })
  return data
}
