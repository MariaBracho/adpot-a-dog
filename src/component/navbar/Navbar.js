import React, { useMemo } from 'react'
import { Image, Flex, Center } from '@chakra-ui/react'
import ModalOfMenu from './ModalOfMenu'
import Logo from '../../assets/logo.svg'

// TODO: Move this to context when the backend has been ready for use, talk to @tech-lead about this
const getModalProps = () => {
  const LIST = ['Home', 'Favourites', 'Upload a dog', 'Uploaded Dogs']
  const modalProps = {
    list: LIST,
    logo: Logo,
    correo: 'Example@gmail.com',
    isLogin: 'Log out'
  }
  return modalProps
}

export default function Navbar () {
  const modalProps = useMemo(getModalProps, [])
  return (
    <Flex
      position="sticky"
      top="0px"
      bg="White"
      zIndex={5}
      borderBottom="1px"
      borderBottomColor="brand.grayLight"
      h="60px"
      alignItems="center"
    >
      <ModalOfMenu {...modalProps}></ModalOfMenu>
      <Center w="100%">
        <Image src={Logo} />
      </Center>
    </Flex>
  )
}
