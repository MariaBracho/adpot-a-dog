import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import SocialMedia from './SocialMedia'

export default function SocialMediaModal ({ isOpen, onClose, Title }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(4px)" />
      <ModalContent
        borderRadius="12px"
        background="brand.drawerShare"
        h="24%"
        display="flex"
        alignSelf="center"
      >
        <ModalHeader color="white" display="flex" alignItems="center">
          {Title}
        </ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody
          display="flex"
          justifyContent="space-around"
          justifyItems="center"
        >
          <SocialMedia />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
