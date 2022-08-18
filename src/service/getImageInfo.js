import { instance } from "../utils/apiKey";

export default async function getDogImagesInfo({ image_id }) {
  const { data } = await instance.get(`/images/${image_id}`);
  return data;
}
