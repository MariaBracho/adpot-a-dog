import { useState } from 'react'

import useDogsContext from 'context/useDogsContext'
import useUploadMessage from './useUploadMessage'

import UploadDogImg from './UploadDogImg'
import uploadImg from 'services/uploadImg'

import { validateFileIsImage } from 'utils/validations'

const DRAG_MESSAGES = {
  ON_SIDE: 'Drop the file',
  OUT_SIDE: 'Drag the file'
}

export default function UploadImg () {
  const [isActive, setIsActive] = useState(false)
  const [uploadFile, setUploadFile] = useState([])
  const [dragAndDropMessage, setDragAndDropMessage] = useState(
    DRAG_MESSAGES.OUT_SIDE
  )

  const { userId } = useDogsContext()

  const uploadMessages = useUploadMessage()

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
      .then(uploadMessages.onSuccess)
      .catch(uploadMessages.onError)
  }

  const dragOver = (event) => {
    event.preventDefault()
    setDragAndDropMessage(DRAG_MESSAGES.ON_SIDE)
    setIsActive(true)
  }

  const dragLeave = (event) => {
    event.preventDefault()
    setDragAndDropMessage(DRAG_MESSAGES.OUT_SIDE)
    setIsActive(false)
  }

  const drop = (event) => {
    event.preventDefault()
    showFile(event.dataTransfer.files)
    setDragAndDropMessage(DRAG_MESSAGES.OUT_SIDE)
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
    const isImage = validateFileIsImage(file)
    if (isImage) {
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
          .then(uploadMessages.onSuccess)
          .catch(uploadMessages.onError)
      }
    } else {
      uploadMessages.onError()
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
