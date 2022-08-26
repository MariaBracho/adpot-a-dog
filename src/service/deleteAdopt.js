import { instance } from 'utils/apiKey'

export default async function deleteAdopt ({ vote_id }) {
  const data = await instance.delete(`/votes/${vote_id}`)
  return data
}
