import React from "react";
import DogCard from "./DogCard";
import { Flex, Text } from "@chakra-ui/react";

export default function ListOfDogs({ params, title }) {
  return (
    <>
      <Flex direction="column" align="center">
        <Text layerStyle="title">{title}</Text>
        {params.map(({ url, id, image_id }) => {
          return (
            <DogCard
              key={id ? id : image_id}
              url={url}
              id={id}
              image_id={image_id}
            />
          );
        })}
      </Flex>
    </>
  );
}
