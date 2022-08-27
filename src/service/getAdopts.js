import { instance } from 'utils/apiKey'

export default async function getAdopts ({ sub_id }) {
  const { data } = await instance.get(`/votes?sub_id=${sub_id}`)
  return data
}
