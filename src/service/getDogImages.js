import { instance } from "../utils/apiKey";

export default async function getDogImages(
  { limit, breed_id } = { limit: 5, breed_id: 11 }
) {
  const { data: listOfDogs } = await instance.get(
    `/images/search?limit=${limit}&breed_id=${breed_id}`
  );
  return listOfDogs.map(({ id, url }) => {
    return { url, image_id: id };
  });
}
