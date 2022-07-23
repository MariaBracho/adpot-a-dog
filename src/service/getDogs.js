import { instance } from "../utils/apiKey";

export default async function getDogs({ limit = 5 }) {
  const { data: listOfDogs } = await instance.get(`/breeds?limit=${limit}`);
  return listOfDogs.map(({ image, name, id }) => {
    const url = image.url;
    const image_id = image.id;
    return { url, image_id, name, id };
  });
}
