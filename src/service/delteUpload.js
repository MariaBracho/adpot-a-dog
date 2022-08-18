import { instance } from "../utils/apiKey";

export default async function deleteUpload({ image_id }) {
  await instance.delete(`/images/${image_id}`);
}
