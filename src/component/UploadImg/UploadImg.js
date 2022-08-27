import { useState } from 'react'
import uploadImg from 'services/uploadImg'
import useDogsContext from 'context/useDogsContext'
import UploadDogImg from './UploadDogImg'
import uploadMessage from './uploadMessage'

export default function UploadImg () {
  const { userId } = useDogsContext()

  const dragMessage = {
    onSide: 'Drop the file',
    outSide: 'Drag the file'
  }

  const [isActive, setIsActive] = useState(false)
  const [uploadFile, setUploadFile] = useState([])
  const [dragAndDropMessage, setDragAndDropMessage] = useState(
    dragMessage.outSide
  )

  const uploadDog = (event) => {
    const [file] = event.target.files
    const fileReader = new FileReader()
    fileReader.onload = () => {
      setUploadFile((lastFile) =>
        lastFile.concat({
          url: fileReader.result,
          name: file.name,
          size: file.size
        })
      )
    }
    fileReader.readAsDataURL(file)
    uploadImg({ file, sub_id: userId })
      .then(uploadMessage.onSuccess)
      .catch(uploadMessage.onError)
  }

  const dragOver = (event) => {
    event.preventDefault()
    setDragAndDropMessage(dragMessage.onSide)
    setIsActive(true)
  }

  const dragLeave = (event) => {
    event.preventDefault()
    setDragAndDropMessage(dragMessage.outSide)
    setIsActive(false)
  }

  const drop = (event) => {
    event.preventDefault()
    showFile(event.dataTransfer.files)
    setDragAndDropMessage(dragMessage.outSide)
    setIsActive(false)
  }

  const showFile = (event) => {
    const empety = event.length === undefined
    if (empety) {
      processFile(event)
    } else {
      for (const file of event) {
        processFile(file)
      }
    }
  }

  const processFile = (file) => {
    const fileType = file.type
    const valide = /image\/(png|jpeg)/
    const valideFormat = valide.test(fileType)
    if (valideFormat) {
      if (window.FileReader) {
        const fileReader = new FileReader()
        fileReader.onload = () => {
          setUploadFile((lastFile) =>
            lastFile.concat({
              url: fileReader.result,
              name: file.name,
              size: file.size
            })
          )
        }
        fileReader.readAsDataURL(file)
        uploadImg({ file })
          .then(uploadMessage.onSuccess)
          .catch(uploadMessage.onError)
      }
    } else {
      uploadMessage.onError()
    }
  }
  const uploadProps = {
    isActive,
    uploadFile,
    dragAndDropMessage,
    uploadDog,
    drop,
    dragLeave,
    dragOver
  }
  return <UploadDogImg {...uploadProps} />
}
