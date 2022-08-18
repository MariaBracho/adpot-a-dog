import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  Image,
  Link,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import Twitter from "../assets/twitter.png";
import Whatsapp from "../assets/Whatsapp.svg";
import Facebook from "../assets/facebook.svg";

export default function ShareDog({ onClose, isOpen }) {
  const facebookUrl = window.location.href;
  const twitterUrl = window.location.href;
  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent
        borderTopRadius="12px"
        background="brand.drawerShare"
        h="24%"
      >
        <DrawerHeader color="white" display="flex" alignItems="center">
          <span>Compartir</span>
          <CloseIcon
            position="absolute"
            right="0px"
            marginRight="8%"
            onClick={onClose}
          />
        </DrawerHeader>
        <DrawerBody
          display="flex"
          justifyContent="space-around"
          justifyItems="center"
        >
          <Link
            display="flex"
            alignItems="center"
            target="_blank"
            href="https://api.whatsapp.com/send?text=texto_codificad"
          >
            <Image src={Whatsapp} />
          </Link>

          <Link
            display="flex"
            alignItems="center"
            target="_blank"
            href={`//www.facebook.com/sharer.php?u=${facebookUrl}`}
          >
            <Image src={Facebook} m="auto 0" />
          </Link>
          <Link
            display="flex"
            alignItems="center"
            href={`https://twitter.com/intent/tweet?text=text&url=${twitterUrl}`}
            target="_blank"
          >
            <Image boxSize="60px" src={Twitter} />
          </Link>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
