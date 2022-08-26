import React from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  IconButton,
  useDisclosure,
  Image,
  Text,
  Center,
  useBreakpointValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import MenuListModal from './MenuListModal'

export default function ModalOfMenu ({ list, logo, correo, isLogin }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const size = useBreakpointValue(
    {
      base: 'full',
      sm: 'xs'
    },
    {
      fallback: 'md'
    }
  )

  return (
    <>
      <IconButton
        position="absolute"
        variant="none"
        color="brand.grayIcon"
        aria-label="burgeMenu"
        fontSize="32px"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        key="full"
        m={4}
      />

      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader display="flex" justifyContent="center">
            <Center w="100%">
              <Image src={logo} />
            </Center>
          </DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
            <MenuListModal ListOfMenu={list} onClick={onClose} />
          </DrawerBody>
          <DrawerFooter display="block">
            <Text color="brand.gray" marginBottom="10px">
              {correo}
            </Text>
            <Button
              onClick={onClose}
              fontWeight="bolder"
              color="brand.green"
              variant="link"
            >
              {isLogin}
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
