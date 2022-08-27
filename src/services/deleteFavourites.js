import { instance } from 'utils/apiKey'

export default async function deleteFavourites ({ id }) {
  const data = await instance.delete(`/favourites/${id}`)
  return data
}
