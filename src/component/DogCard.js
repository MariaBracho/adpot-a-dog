import React, { useState } from "react";
import CardButton from "./CardButton";
import { Box, Container, Grid, Image, Skeleton, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import ImgModal from "./ImgModal";

export default function DogCard({
  url,
  id,
  image_id,
  isDetalle = true,
  detail = [],
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoad, setIsLoad] = useState(false);
  const navigate = useNavigate();

  const showInfo = () => {
    navigate(`../detail/${image_id}`, { replace: true });
  };

  const loadImg = () => {
    setIsLoad(true);
  };

  const showModal = () => {
    console.log("render modal");
    onOpen();
  };

  return (
    <Grid
      cursor="pointer"
      templateRows="162px auto auto"
      templateColumns={isDetalle ? "210px" : "310px"}
      borderWidth="1px"
      borderRadius="12px"
      borderColor="brand.gray"
      overflow="hidden"
      marginBottom="20px"
      minHeight="200px"
    >
      <ImgModal isOpen={isOpen} onClose={onClose} url={url} title="Dog image" />
      <Skeleton isLoaded={isLoad}>
        <Image
          onClick={isDetalle ? showInfo : showModal}
          src={url}
          loading="lazy"
          onLoad={loadImg}
          alt="perrito"
          h="100%"
          w="100%"
          objectFit="fill"
        />
      </Skeleton>
      {isDetalle
        ? null
        : detail.map(
            ({
              name,
              bred_for,
              temperament,
              life_span,
              origin,
              breed_group,
            }) => {
              return (
                <Container p="10px" textAlign="center">
                  <Text>{name}</Text>
                  <Text>{temperament}</Text>
                  <Text>{bred_for}</Text>
                  <Text>{origin}</Text>
                  <Text>{breed_group}</Text>
                  <Text>{life_span}</Text>
                </Container>
              );
            }
          )}

      <Box display="flex" alignItems="center" p="10px">
        <CardButton id={id} image_id={image_id} />
      </Box>
    </Grid>
  );
}
