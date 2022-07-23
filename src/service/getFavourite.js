import { instance } from "../utils/apiKey";

export default async function getFavourites() {
  const { data: listOfDogs } = await instance.get(`/favourites`);
  console.log(listOfDogs, "favoritos");
  return listOfDogs.map((elemet) => {
    const url = elemet.image.url;
    const { id, image_id } = elemet;
    return { url, id, image_id };
  });
}
