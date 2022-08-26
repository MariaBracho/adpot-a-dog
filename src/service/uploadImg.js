import { instance } from 'utils/apiKey'

export default async function uploadImg ({ file }) {
  const formData = new FormData()

  formData.append('file', file)
  formData.append('sub_id', 'my-user-12345')

  const { status, data } = await instance.post('/images/upload', formData)
  return { status, data }
}
