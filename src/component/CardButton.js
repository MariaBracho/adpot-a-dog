import React, { useMemo } from "react";
import useFavouriteButton from "../hook/useFavouriteButton";
import heartIcon from "../assets/heartIcon.svg";
import heartIconFull from "../assets/heartIconFull.svg";
import share from "../assets/share.svg";
import adopt from "../assets/adopt.svg";
import adoptFull from "../assets/VectoradoptFull.svg";
import { Box, Image } from "@chakra-ui/react";
import useAdoptButton from "../hook/useAdoptButton";

export default function CardButton({ image_id }) {
  const { handleList, isFavouriteDog } = useFavouriteButton({ image_id });
  const { handleListAdopt, isAdoptDog } = useAdoptButton({ image_id });

  const hoverAnimation = useMemo(() => {
    return {
      _hover: { boxSize: "28px" },
    };
  }, []);

  const favorite = useMemo(() => {
    return isFavouriteDog ? (
      <Image src={heartIconFull} sx={hoverAnimation} />
    ) : (
      <Image src={heartIcon} sx={hoverAnimation} />
    );
  }, [isFavouriteDog, hoverAnimation]);

  const favoriteAdopt = useMemo(() => {
    return isAdoptDog ? (
      <Image src={adoptFull} sx={hoverAnimation} />
    ) : (
      <Image src={adopt} sx={hoverAnimation} />
    );
  }, [isAdoptDog, hoverAnimation]);

  const shareIcon = useMemo(() => {
    return <Image src={share} sx={hoverAnimation} />;
  }, [hoverAnimation]);

  return (
    <Box display="flex" w="100%" justifyContent="space-around">
      <Box as="button" onClick={handleList}>
        {favorite}
      </Box>
      <Box as="button" onClick={handleListAdopt}>
        {favoriteAdopt}
      </Box>
      <Box as="button">{shareIcon}</Box>
    </Box>
  );
}
