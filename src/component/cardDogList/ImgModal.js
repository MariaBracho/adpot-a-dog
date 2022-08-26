import {
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalOverlay,
  ModalCloseButton,
  Button,
  Link
} from '@chakra-ui/react'
import { DownloadIcon } from '@chakra-ui/icons'
import { useRef } from 'react'

export default function ImgModal ({ isOpen, onClose, title, url, name }) {
  const refElem = useRef()

  const downloadImg = async () => {
    const proxy = ' https://api.allorigins.win/raw?url='
    const response = await fetch(proxy + url)
    const urlImg = await response.blob()
    const objectURL = window.URL.createObjectURL(urlImg)
    refElem.current.href = objectURL
    refElem.current.download = name
  }

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg="blackAlpha.300"
          backdropFilter="blur(10px) hue-rotate(90deg)"
        />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image h="100%" w="100%" src={url} alt={title} />
          </ModalBody>
          <ModalFooter>
            <Button marginRight="20px" onClick={onClose}>
              Close
            </Button>
            <Link ref={refElem} target="_blank" onClick={downloadImg}>
              <DownloadIcon boxSize="26px" />
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
