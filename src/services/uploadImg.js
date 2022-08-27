import { instance } from 'utils/apiKey'

export default async function uploadImg ({ file, sub_id }) {
  const formData = new FormData()

  formData.append('file', file)
  formData.append('sub_id', sub_id)

  const { status, data } = await instance.post('/images/upload', formData)
  return { status, data }
}
