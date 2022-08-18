import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  IconButton,
  useDisclosure,
  Image,
  Text,
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import MenuListModal from "./MenuListModal";

export default function ModalOfMenu({ list, logo, correo, isLogin }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

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

      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader display="flex" justifyContent="center">
            <Center w="100%">
              <Image src={logo} />
            </Center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <MenuListModal ListOfMenu={list} onClick={onClose} />
          </ModalBody>
          <ModalFooter display="block">
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
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
