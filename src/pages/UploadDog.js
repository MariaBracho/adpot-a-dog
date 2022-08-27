import UploadImg from 'component/UploadImg/UploadImg'
import { Helmet } from 'react-helmet'

export default function UploadDog () {
  return (
    <>
      <Helmet>
        <title>Upload a dog | Adopt a dog</title>
        <meta name="description" content="Upload a dog" />
      </Helmet>
      <UploadImg />
    </>
  )
}
