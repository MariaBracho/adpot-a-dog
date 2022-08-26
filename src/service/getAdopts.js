import { instance } from 'utils/apiKey'

export default async function getAdopts () {
  const { data } = await instance.get('/votes?sub_id=my-user-12345')
  return data
}
