import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerCloseButton
} from '@chakra-ui/react'
import SocialMedia from './SocialMedia'

export default function SocialMediaDrawer ({ onClose, isOpen, Title }) {
  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent
        borderTopRadius="12px"
        background="brand.drawerShare"
        h="24%"
      >
        <DrawerHeader color="white" display="flex" alignItems="center">
          <span>{Title}</span>
          <DrawerCloseButton />
        </DrawerHeader>
        <DrawerBody
          display="flex"
          justifyContent="space-around"
          justifyItems="center"
        >
          <SocialMedia />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}
