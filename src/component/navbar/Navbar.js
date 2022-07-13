import React from "react";
import Logo from "../../assets/logo.svg";
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
  Flex,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import MenuListModal from "./MenuListModal";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const LIST = ["Home", "Favourites", "Upload a dog", "Adopted dogs"];
  const properityImg = {
    my: "0px",
    mx: "auto",
    display: "flex",
    justifySelf: "center",
  };

  return (
    <>
      <Flex
        borderBottom="1px"
        borderBottomColor="brand.grayLight"
        h="60px"
        alignItems="center"
      >
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
              <Image src={Logo} sx={properityImg} />
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <MenuListModal ListOfMenu={LIST} onClick={onClose} />
            </ModalBody>
            <ModalFooter display="block">
              <Text color="brand.gray" marginBottom="10px">
                Example@gmail.com
              </Text>
              <Button
                onClick={onClose}
                fontWeight="bolder"
                color="brand.green"
                variant="link"
              >
                Log Out
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        <Image sx={properityImg} src={Logo} />
      </Flex>
    </>
  );
}
