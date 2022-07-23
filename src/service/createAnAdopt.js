import { instance } from "../utils/apiKey";

export default async function CreateAnAdopt({ image_id, value = 0 }) {
  const { data } = await instance.post(`/votes`, {
    image_id: image_id,
    value: value,
    sub_id: "my-user-12345",
  });
  console.log(data, "post");
  return data;
}
