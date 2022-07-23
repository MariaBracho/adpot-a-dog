import { instance } from "../utils/apiKey";

export default async function uploadImg({ file }) {
  const { data } = await instance.post(`/images/upload`, {
    file: file,
    sub_id: "my-user-12345",
  });
  return data;
}
