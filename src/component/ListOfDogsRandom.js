import React from "react";
import useDogs from "../context/useDogs";
import useDogsContext from "../context/useDogsContext";
import ListOfDogs from "./ListOfDogs";
import { Spinner } from "@chakra-ui/react";

export default function ListOfDogsRandom() {
  const { listOfDogs } = useDogsContext();
  const { fetchListOfDogs, isLoadingFetch } = useDogs();
  console.log(isLoadingFetch, "load");
  return (
    <>
      {isLoadingFetch ? (
        <Spinner
          thickness="6px"
          speed="0.65s"
          emptyColor="gray.200"
          color="brand.blue"
          size="xl"
        />
      ) : (
        <>
          <ListOfDogs params={listOfDogs} title="Home" />
          <button onClick={fetchListOfDogs}>Recargar</button>
        </>
      )}
    </>
  );
}
