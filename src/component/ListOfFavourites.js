import React from "react";
import ListOfDogs from "./ListOfDogs";
import useFavouriteDogs from "../context/useFavouriteDogs";
import useDogsContext from "../context/useDogsContext";
import { Spinner } from "@chakra-ui/react";

export default function ListOfFavouriteDogs() {
  const { listOfFavoriteDogs } = useDogsContext();
  const { isLoading } = useFavouriteDogs({ initialFetchDogs: true });
  return (
    <>
      {isLoading ? (
        <Spinner
          thickness="6px"
          speed="0.65s"
          emptyColor="gray.200"
          color="brand.blue"
          size="xl"
        />
      ) : (
        <ListOfDogs params={listOfFavoriteDogs} title="Favourites" />
      )}
    </>
  );
}
